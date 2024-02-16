'use client';

import cn from 'clsx';
import Image from 'next/image';
import { CSSProperties, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import PNG_TopazPhone from 'src/assets/raster/topaz-mobile.png';
import PNG_Topaz from 'src/assets/raster/topaz.png';
import { useEventCallback, useEventListener, useInterval, useEffectOnce as useMount, useUnmount } from 'usehooks-ts';

import { useLayout } from '@/components/common/Layout/Layout';
import { sAsteroid, sBall, sImage } from './Asteroid.css';
import { calcBall, TBall, TCoords } from './helpers';

export interface AsteroidProps {
	className?: string;
	spring?: number;
	friction?: number;
	spin?: number;
}

function normalizeRect(rect: DOMRect): DOMRect {
	return {
		...rect,
		top: rect.top + window.scrollY,
		bottom: rect.bottom + window.scrollY,
		left: rect.left,
		right: rect.right,
		width: rect.width,
		height: rect.height,
		x: rect.x,
		y: rect.y,
	};
}

const phoneWay: TCoords<string>[] = [
	{ x: '60%', y: '65%' },
	{ x: '60%', y: '75%' },
	{ x: '50%', y: '80%' },
	{ x: '40%', y: '75%' },
	{ x: '40%', y: '70%' },
	{ x: '40%', y: '60%' },
	{ x: '50%', y: '50%' },
	{ x: '55%', y: '45%' },
	{ x: '60%', y: '35%' },
	{ x: '60%', y: '25%' },
	{ x: '50%', y: '25%' },
	{ x: '40%', y: '20%' },
	{ x: '40%', y: '30%' },
	{ x: '40%', y: '40%' },
	{ x: '50%', y: '50%' },
	{ x: '55%', y: '55%' },
];

export const Asteroid: React.FC<AsteroidProps> = ({
	className = '',
	spring = 0.0001,
	friction = 0.995,
	spin = 0.01,
}) => {
	const [, rerender] = useReducer((v) => v + 1, 0);

	const device = useLayout();
	const isDesktop = device?.name === 'desktop';
	const isPhone = device?.name === 'phone';

	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const wrapperElRef = useRef<HTMLDivElement | null>(null);
	const ballElRef = useRef<HTMLImageElement | null>(null);

	const ballRef = useRef<TBall>({ x: 0, y: 0, vx: 0, vy: 0, rotation: 0 });
	const mouseRef = useRef<TCoords>({ x: 0, y: 0 });
	const scrollPrevRef = useRef<TCoords>({ x: 0, y: 0 });
	const scrollDiffRef = useRef<TCoords>({ x: 0, y: 0 });

	const animationFrameRef = useRef<number>(0);
	const phoneStep = useRef<number>(0);

	// Helpers

	const calcPhoneMouse = useCallback(() => {
		if (!wrapperElRef.current) return;

		const wrapperRect = normalizeRect(wrapperElRef.current.getBoundingClientRect());
		const total = phoneWay.length;

		const { x: xPercent, y: yPercent } = phoneWay[phoneStep.current];

		const x = wrapperRect.width * (parseFloat(xPercent) / 100);
		const y = wrapperRect.height * (parseFloat(yPercent) / 100);

		mouseRef.current = { x, y };

		phoneStep.current += 1;
		if (phoneStep.current >= total) phoneStep.current = 0;
	}, []);

	const lifecycle = useCallback(() => {
		animationFrameRef.current = window.requestAnimationFrame(() => {
			calcBall(isPhone, isDesktop, spring, friction, spin, mouseRef, ballRef, scrollDiffRef);
			rerender();
			lifecycle();
		});
	}, [friction, isDesktop, isPhone, spin, spring]);

	const cancelLifecycle = useCallback(() => {
		window.cancelAnimationFrame(animationFrameRef.current);
	}, []);

	// Handlers

	const handleMouseMove = useEventCallback((e: MouseEvent) => {
		if (!isDesktop) return;

		if (!wrapperElRef.current) return;
		if (!ballElRef.current) return;

		const ballRect = normalizeRect(ballElRef.current.getBoundingClientRect());
		const wrapperRect = normalizeRect(wrapperElRef.current.getBoundingClientRect());

		const [mouseX, mouseY] = [e.pageX, e.pageY];

		const wrapperEdges = {
			top: wrapperRect.top,
			bottom: wrapperRect.bottom - ballRect.height / 2,
			left: wrapperRect.left + ballRect.width / 2,
			right: wrapperRect.right - ballRect.width / 2,
		};

		mouseRef.current = {
			x: Math.max(wrapperEdges.left, Math.min(mouseX, wrapperEdges.right)),
			y: Math.max(wrapperEdges.top, Math.min(mouseY, wrapperEdges.bottom)),
		};
	});

	const calcPhoneScroll = useCallback(() => {
		if (!device) return;
		if (!isPhone) return;

		const scroll: TCoords = { x: window.scrollX, y: window.scrollY };

		scrollDiffRef.current = {
			x: scroll.x - scrollPrevRef.current.x,
			y: scroll.y - scrollPrevRef.current.y,
		};

		scrollPrevRef.current = scroll;
	}, [device, isPhone]);

	// Effects

	useMount(lifecycle);
	useUnmount(cancelLifecycle);

	useEventListener('mousemove', handleMouseMove);

	useInterval(calcPhoneMouse, isPhone ? 700 : null);
	useInterval(calcPhoneScroll, isPhone ? 100 : null);

	/** Set pixel coords to ball on load */
	useEffect(() => {
		if (!device) return;
		if (!isFirstLoad) return;
		if (!ballElRef.current) return;

		const ballRect = normalizeRect(ballElRef.current.getBoundingClientRect());

		const ballCenterX = (ballRect.left + ballRect.right) / 2;
		const ballCenterY = (ballRect.top + ballRect.bottom) / 2;

		ballRef.current.x = ballCenterX;
		ballRef.current.y = ballCenterY;

		if (isDesktop) mouseRef.current = { ...ballRef.current };
		if (isPhone) calcPhoneMouse();

		setIsFirstLoad(false);
	}, [calcPhoneMouse, device, isDesktop, isFirstLoad, isPhone]);

	// Computed styles

	const { startOffsetLeft, startOffsetTop } = useMemo(() => {
		const startOffsetLeft: string = isDesktop ? '60%' : phoneWay.at(-1)!.x;
		const startOffsetTop: string = isDesktop ? '50%' : phoneWay.at(-1)!.y;

		return { startOffsetLeft, startOffsetTop };
	}, [isDesktop]);

	const ballStyles: CSSProperties = {
		left: isFirstLoad ? startOffsetLeft : ballRef.current.x + 'px',
		top: isFirstLoad ? startOffsetTop : ballRef.current.y + 'px',
	};
	const imageStyles: CSSProperties = {
		transform: `rotateZ(${ballRef.current.rotation}deg)`,
	};

	// Layout

	return (
		<div className={cn(sAsteroid, className)} ref={wrapperElRef}>
			<div className={cn(sBall)} style={ballStyles}>
				<Image
					src={isDesktop ? PNG_Topaz : PNG_TopazPhone}
					alt="Topaz"
					priority
					ref={ballElRef}
					className={cn(sImage)}
					style={imageStyles}
				/>
			</div>
		</div>
	);
};

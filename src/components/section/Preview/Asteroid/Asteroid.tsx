'use client';

import cn from 'clsx';
import Image from 'next/image';
import { CSSProperties, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import PNG_Topaz from 'src/assets/raster/topaz.png';

import { useLayout } from '@/components/common/Layout/Layout';
import { sAsteroid, sBall } from './Asteroid.css';

type TCoords<T = number> = {
	x: T;
	y: T;
};

type TBall = TCoords & {
	vx: number;
	vy: number;
	rotation: number;
};

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
	{ x: '65%', y: '65%' },
	{ x: '60%', y: '75%' },
	{ x: '50%', y: '80%' },
	{ x: '40%', y: '75%' },
	{ x: '35%', y: '65%' },
	{ x: '40%', y: '55%' },
	{ x: '50%', y: '50%' },
	{ x: '60%', y: '45%' },
	{ x: '65%', y: '35%' },
	{ x: '60%', y: '25%' },
	{ x: '50%', y: '20%' },
	{ x: '40%', y: '25%' },
	{ x: '35%', y: '35%' },
	{ x: '40%', y: '45%' },
	{ x: '50%', y: '50%' },
	{ x: '60%', y: '55%' },
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
	const mouseRef = useRef({ x: 0, y: 0 });

	const mousePhoneInterval = useRef<NodeJS.Timeout>();
	const animationFrameRef = useRef<number>(0);
	const phoneStep = useRef<number>(0);

	// Helpers

	const calcBall = useCallback(() => {
		const mouse = mouseRef.current;
		const ball = ballRef.current;

		const dx = mouse.x - ball.x;
		const dy = mouse.y - ball.y;

		const ax = dx * spring;
		const ay = dy * spring;

		ball.vx += ax;
		ball.vy += ay;
		ball.vx *= friction;
		ball.vy *= friction;
		ball.x += ball.vx;
		ball.y += ball.vy;

		if (isDesktop) {
			ball.rotation += ball.vx * spin;
		} else if (isPhone) {
			ball.rotation += ball.vy * spin * -3;
		}
	}, [friction, isDesktop, isPhone, spin, spring]);

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
			calcBall();
			rerender();
			lifecycle();
		});
	}, [calcBall]);

	const cancelLifecycle = useCallback(() => {
		window.cancelAnimationFrame(animationFrameRef.current);
	}, []);

	// Handlers

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
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
		},
		[isDesktop]
	);

	// Effects

	useEffect(() => {
		lifecycle();
		return () => cancelLifecycle();
	}, [lifecycle, cancelLifecycle]);

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [handleMouseMove]);

	useEffect(() => {
		if (!isFirstLoad) return;
		if (!ballElRef.current) return;

		const ballRect = normalizeRect(ballElRef.current.getBoundingClientRect());

		if (isPhone) calcPhoneMouse(); // FIXME: Invalid start mouse on mobile

		setIsFirstLoad(false);

		const ballCenterX = (ballRect.left + ballRect.right) / 2;
		const ballCenterY = (ballRect.top + ballRect.bottom) / 2;

		ballRef.current.x = ballCenterX;
		ballRef.current.y = ballCenterY;
	}, [calcPhoneMouse, isFirstLoad, isPhone]);

	useEffect(() => {
		if (!isPhone) return clearInterval(mousePhoneInterval.current);

		mousePhoneInterval.current = setInterval(calcPhoneMouse, 700);
		return () => clearInterval(mousePhoneInterval.current);
	}, [calcPhoneMouse, isPhone]);

	// Computed styles

	const startOffsetLeft: string = isDesktop ? '60%' : phoneWay[0].x;
	const startOffsetTop: string = isDesktop ? '50%' : phoneWay[0].y;

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
				<Image src={PNG_Topaz} alt="Topaz" priority={true} layout="fill" style={imageStyles} ref={ballElRef} />
			</div>
		</div>
	);
};

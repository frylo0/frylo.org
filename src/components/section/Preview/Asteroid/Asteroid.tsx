'use client';

import cn from 'clsx';
import Image from 'next/image';
import { CSSProperties, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import PNG_Topaz from 'src/assets/raster/topaz.png';

import { sAsteroid, sBall } from './Asteroid.css';

type TCoords = {
	x: number;
	y: number;
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

export const Asteroid: React.FC<AsteroidProps> = ({
	className = '',
	spring = 0.0001,
	friction = 0.995,
	spin = 0.01,
}) => {
	const [, rerender] = useReducer((v) => v + 1, 0);

	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const wrapperElRef = useRef<HTMLDivElement | null>(null);
	const ballElRef = useRef<HTMLImageElement | null>(null);

	const ballRef = useRef<TBall>({ x: 0, y: 0, vx: 0, vy: 0, rotation: 0 });
	const mouseRef = useRef({ x: 0, y: 0 });

	const animationFrameRef = useRef<number>(0);

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

		ball.rotation += ball.vx * spin;
	}, [friction, spin, spring]);

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
			if (!wrapperElRef.current) return;
			if (!ballElRef.current) return;

			const ballRect = normalizeRect(ballElRef.current.getBoundingClientRect());
			const wrapperRect = normalizeRect(wrapperElRef.current.getBoundingClientRect());

			if (isFirstLoad) {
				setIsFirstLoad(false);

				const ballCenterX = (ballRect.left + ballRect.right) / 2;
				const ballCenterY = (ballRect.top + ballRect.bottom) / 2;

				ballRef.current.x = ballCenterX;
				ballRef.current.y = ballCenterY;
			}

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
		[isFirstLoad]
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

	// Computed styles

	const ballStyles: CSSProperties = {
		left: isFirstLoad ? '60%' : ballRef.current.x + 'px',
		top: isFirstLoad ? '50%' : ballRef.current.y + 'px',
	};
	const imageStyles: CSSProperties = {
		transform: `rotateZ(${ballRef.current.rotation}deg)`,
	};

	// Layout

	return (
		<div className={cn(sAsteroid, className)} ref={wrapperElRef}>
			<div className={cn(sBall)} style={ballStyles}>
				<Image
					src={PNG_Topaz}
					width={727}
					height={624}
					alt="Topaz"
					priority={true}
					style={imageStyles}
					ref={ballElRef}
				/>
			</div>
		</div>
	);
};

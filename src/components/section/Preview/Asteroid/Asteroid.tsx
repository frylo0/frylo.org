'use client';

import cn from 'clsx';
import Image from 'next/image';
import { CSSProperties, useCallback, useEffect, useReducer, useRef } from 'react';
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

export const Asteroid: React.FC<AsteroidProps> = ({
	className = '',
	spring = 0.0001,
	friction = 0.995,
	spin = 0.01,
}) => {
	const [, rerender] = useReducer((v) => v + 1, 0);

	const isFirstLoad = useRef<boolean>(true);

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const ballRef = useRef<TBall>({ x: 0, y: 0, vx: 0, vy: 0, rotation: 0 });
	const mouseRef = useRef({ x: 0, y: 0 });

	const animationFrameRef = useRef<number>(0);

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

	useEffect(() => {
		lifecycle();
		return () => cancelLifecycle();
	}, [lifecycle, cancelLifecycle]);

	useEffect(() => {
		isFirstLoad.current = false;
	}, []);

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (!wrapperRef.current) return;

		const wrapperRect = wrapperRef.current.getBoundingClientRect();

		const x = e.clientX - wrapperRect.left;
		const y = e.clientY - wrapperRect.top;

		mouseRef.current = { x, y };
	}, []);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		if (!wrapper) return;

		wrapper.addEventListener('mousemove', handleMouseMove);
		return () => wrapper.removeEventListener('mousemove', handleMouseMove);
	}, [handleMouseMove]);

	const ballStyles: CSSProperties = {
		left: ballRef.current.x + 'px',
		top: ballRef.current.y + 'px',
	};
	const imageStyles: CSSProperties = {
		transform: `rotateZ(${ballRef.current.rotation}deg)`,
	};

	return (
		<div className={cn(sAsteroid, className)} ref={wrapperRef}>
			<div className={cn(sBall)} style={ballStyles}>
				<Image src={PNG_Topaz} width={727} height={624} alt="Topaz" style={imageStyles} />
			</div>
		</div>
	);
};

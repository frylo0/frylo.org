import { MutableRefObject } from 'react';

export type TCoords<T = number> = {
	x: T;
	y: T;
};

export type TBall = TCoords & {
	vx: number;
	vy: number;
	rotation: number;
};

export function calcBall(
	isPhone: boolean,
	isDesktop: boolean,
	spring: number,
	friction: number,
	spin: number,
	mouseRef: MutableRefObject<TCoords>,
	ballRef: MutableRefObject<TBall>,
	scrollDiffRef: MutableRefObject<TCoords>
) {
	const mouse = mouseRef.current;
	const ball = ballRef.current;

	const dx = mouse.x - ball.x;
	const dy = mouse.y - ball.y;

	let ax = dx * spring;
	let ay = dy * spring;

	if (isPhone) {
		ax += scrollDiffRef.current.x * spring * 3;
		ay += scrollDiffRef.current.y * spring * 3;
	}

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
}

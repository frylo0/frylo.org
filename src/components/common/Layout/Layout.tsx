'use client';

import cn from 'clsx';
import { ReactNode, useCallback, useEffect, useState } from 'react';

import { breakpoints, TBreakpoint, TDevices } from '@/constants/breakpoints';
import { sLayout } from './Layout.css';

export interface LayoutProps {
	className?: string;
	children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ className = '', children }) => {
	return <div className={cn(sLayout, className)}>{children}</div>;
};

export type TDevice = {
	name: TDevices;
	innerWidth: number;
} & TBreakpoint;

export function useLayout(): TDevice | null {
	const [device, setDevice] = useState<TDevice | null>(null);

	const handleResize = useCallback(() => {
		const { innerWidth: width } = window;
		const points = Object.entries(breakpoints);

		for (const [name, info] of points) {
			if (width >= info.maxWidth || width <= info.minWidth) continue;
			setDevice({ name: name as TDevices, innerWidth: width, ...info });
			break;
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return device;
}

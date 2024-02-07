import { assignInlineVars } from '@vanilla-extract/dynamic';
import cn from 'clsx';
import { useScreen } from 'usehooks-ts';

import { sHidden, sIsDevelopment, svPosition } from './IsDevelopment.css';

export interface IsDevelopmentProps {
	className?: string;

	minWidth: number;
	maxWidth: number;

	position?: 'fixed' | 'absolute';
}

export const IsDevelopment: React.FC<IsDevelopmentProps> = ({
	className = '',

	minWidth,
	maxWidth,

	position = 'fixed',
}) => {
	const { width } = useScreen();

	const isVisible = minWidth <= width && width <= maxWidth;
	const isHidden = !isVisible;

	const cssVars = assignInlineVars({
		[svPosition]: position,
	});

	return (
		<div className={cn(sIsDevelopment, isHidden && sHidden, className)} style={cssVars}>
			<p>
				Screen widths between <strong>{minWidth}px</strong> and <strong>{maxWidth}px</strong> are under development
			</p>
		</div>
	);
};

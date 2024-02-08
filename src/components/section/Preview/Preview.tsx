import cn from 'clsx';

import { sSection, sWord, sWords, sWordSolid, sWordTransparent } from './Preview.css';

interface PreviewProps {
	className?: string;
}

export const Preview: React.FC<PreviewProps> = ({ className }) => {
	return (
		<section className={cn(sSection, className)}>
			<div className={cn(sWords)}>
				<span className={cn(sWord, sWordSolid)}>Frontend</span>
				<span className={cn(sWord, sWordTransparent)}>Developer</span>
			</div>
		</section>
	);
};

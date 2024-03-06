import cn from 'clsx';
import Image from 'next/image';

import PNG_Rocky from '@/assets/raster/rocky.png';
import { sContent, sRocky, sRocky1, sRocky2, sRocky3, sSection } from './CV.css';
import { CVExperience } from './CVExperience/CVExperience';
import { CVGeneralInfo } from './CVGeneralInfo/CVGeneralInfo';

export interface CVProps {
	className?: string;
}

export const CV: React.FC<CVProps> = ({ className = '' }) => {
	return (
		<section className={cn(sSection, className)}>
			<Rocky className={cn(sRocky1)} />
			<Rocky className={cn(sRocky2)} />
			<Rocky className={cn(sRocky3)} />

			<div className={cn(sContent)}>
				<CVGeneralInfo />
				<CVExperience />
			</div>
		</section>
	);
};

interface RockyProps {
	className?: string;
}

const Rocky: React.FC<RockyProps> = ({ className }) => {
	return (
		<Image className={cn(sRocky, className)} src={PNG_Rocky} width={1248} height={554} alt="Blue Transparent Rock" />
	);
};

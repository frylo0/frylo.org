import cn from 'clsx';

import { sSection } from './CV.css';
import { CVExperience } from './CVExperience/CVExperience';
import { CVGeneralInfo } from './CVGeneralInfo/CVGeneralInfo';

export interface CVProps {
	className?: string;
}

export const CV: React.FC<CVProps> = ({ className = '' }) => {
	return (
		<section className={cn(sSection, className)}>
			<CVGeneralInfo />
			<CVExperience />
		</section>
	);
};

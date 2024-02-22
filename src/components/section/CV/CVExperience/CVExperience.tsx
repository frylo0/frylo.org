import cn from 'clsx';

import { sCVExperience } from './CVExperience.css';

export interface CVExperienceProps {
	className?: string;
}

export const CVExperience: React.FC<CVExperienceProps> = ({ className = '' }) => {
	return <div className={cn(sCVExperience, className)}></div>;
};

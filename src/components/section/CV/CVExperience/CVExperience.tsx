import cn from 'clsx';

import { sCompany, sCVExperience, sDescription, sGraph, sInfo, sLogo, sTitle } from './CVExperience.css';

export interface CVExperienceProps {
	className?: string;
}

export const CVExperience: React.FC<CVExperienceProps> = ({ className = '' }) => {
	return (
		<div className={cn(sCVExperience, className)}>
			<h2 className={cn(sTitle)}>Work experience</h2>

			<div className={cn(sGraph)}></div>

			<div className={cn(sCompany)}>
				<div className={cn(sLogo)}></div>
				<div className={cn(sInfo)}></div>
				<div className={cn(sDescription)}></div>
			</div>
		</div>
	);
};

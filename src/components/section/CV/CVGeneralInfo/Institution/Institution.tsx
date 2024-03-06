import cn from 'clsx';

import { sDegree, sInstitution, sLocation, sYears } from './Institution.css';

interface InstitutionProps extends React.PropsWithChildren {
	className?: string;
	yearBegin: number;
	yearEnd: number;
	degree: string;
	institution: string;
	location: string;
}

export const Institution: React.FC<InstitutionProps> = ({
	className,
	yearBegin,
	yearEnd,
	degree,
	institution,
	location,
}) => {
	return (
		<div className={cn(sInstitution, className)}>
			<div className={cn(sYears)}>
				<time dateTime={`${yearBegin}`}>{yearBegin}</time> — <time dateTime={`${yearEnd}`}>{yearEnd}</time>
			</div>
			<div className={cn(sDegree)}>{degree}</div>
			<div className={cn(sLocation)}>
				{institution}
				<br />
				{location}
			</div>
		</div>
	);
};

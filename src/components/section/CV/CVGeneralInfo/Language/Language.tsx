import cn from 'clsx';

import {
	sChartBody,
	sChartOutline,
	sChartPercent,
	sLanguage,
	sLanguageChart,
	sLanguageLevel,
	sLanguageName,
} from './Language.css';

interface LanguageProps extends React.PropsWithChildren {
	className?: string;
	name: string;
	level: string;
	percent: number;
}

export const Language: React.FC<LanguageProps> = ({ className, name, level, percent }) => {
	return (
		<div className={cn(sLanguage, className)}>
			<PieChart className={cn(sLanguageChart)} percent={percent} />
			<div className={cn(sLanguageName)}>{name}</div>
			<div className={cn(sLanguageLevel)}>{level}</div>
		</div>
	);
};

// Helpers

interface PieChartProps {
	className?: string;
	percent: number;
}

const PieChart: React.FC<PieChartProps> = ({ className, percent }) => {
	const size = 90;
	const strokeWidth = 3;

	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDasharray = `${circumference} ${circumference}`;
	const strokeDashoffset = circumference - (percent / 100) * circumference;

	return (
		<svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
			<circle className={cn(sChartBody)} cx={size / 2} cy={size / 2} r={radius} />
			<circle
				className={cn(sChartOutline)}
				cx={size / 2}
				cy={size / 2}
				r={radius}
				strokeDasharray={strokeDasharray}
				strokeDashoffset={strokeDashoffset}
				strokeLinecap="square"
				transform={`rotate(-90 ${size / 2} ${size / 2})`}
			/>
			<text className={cn(sChartPercent)} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
				{percent}%
			</text>
		</svg>
	);
};

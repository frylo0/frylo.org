'use client';

import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { CSSProperties, useRef, useState } from 'react';

import PNG_Code from '@/assets/raster/tech.png';
import PNG_Time from '@/assets/raster/timing.png';
import PNG_Website from '@/assets/raster/website.png';
import PNG_Job from '@/assets/raster/work.png';
import { experience, getExperiencePercent, TExperience } from '@/constants/work-experience';
import {
	sCompany,
	sCVExperience,
	sDate,
	sDateEnd,
	sDateEndMerged,
	sDateStart,
	sDateStartMerged,
	sDescription,
	sDuration,
	sFeature,
	sFeatures,
	sGraph,
	sIcon,
	sInfo,
	sJobTitle,
	sLine,
	sLineCurrent,
	sLogo,
	sMonth,
	sName,
	sNow,
	sTech,
	sTechItems,
	sTechStack,
	sTiming,
	sTitle,
	sWebsite,
	sYear,
} from './CVExperience.css';

export interface CVExperienceProps {
	className?: string;
}

export const CVExperience: React.FC<CVExperienceProps> = ({ className = '' }) => {
	const [current, setCurrent] = useState(experience.length - 1);

	const selected = experience[current];

	const selectedBegin = getDate(selected.dateBegin);
	const selectedEnd = getDate(selected.dateEnd);

	const handleLineSelect = (index: number) => () => {
		setCurrent(index);
	};

	return (
		<div className={cn(sCVExperience, className)}>
			<h2 className={cn(sTitle)}>Work experience</h2>

			<div className={cn(sGraph)}>
				{experience.map((item, i, list) => (
					<Line
						{...item}
						prevDate={i > 0 ? list[i - 1].dateEnd : null}
						nextDate={i < list.length - 1 ? list[i + 1].dateBegin : null}
						key={i}
						isCurrent={i === current}
						onSelect={handleLineSelect(i)}
					/>
				))}
			</div>

			<div className={cn(sCompany)}>
				<div className={cn(sLogo)}>
					<Image src={selected.company.logo} alt={selected.company.name} layout="fill" />
				</div>
				<div className={cn(sInfo)}>
					<div className={cn(sName)}>{selected.company.name}</div>
					<div className={cn(sFeatures)}>
						<Feature className={cn(sWebsite)} icon={PNG_Website}>
							<Link href={selected.company.url} target="_blank">
								{selected.company.website}
							</Link>
						</Feature>
						<Feature icon={PNG_Job} className={cn(sJobTitle)}>
							{selected.jobTitle}
						</Feature>
						<Feature icon={PNG_Time} className={cn(sTiming)}>
							{selectedBegin?.year}.{selectedBegin?.month} —{' '}
							{selectedEnd ? `${selectedEnd.year}.${selectedEnd.month}` : 'Now'}
						</Feature>
						<Feature icon={PNG_Code} className={cn(sTechStack)}>
							<div className={cn(sTechItems)}>
								{selected.techStack.map((tech, i) => (
									<>
										{i > 0 && ', '}
										<Link className={cn(sTech)} href={tech.url} key={i}>
											{tech.name}
										</Link>
									</>
								))}
							</div>
						</Feature>
					</div>
				</div>
				<div className={cn(sDescription)}>{selected.description}</div>
			</div>
		</div>
	);
};

function getDate(date: Date | undefined): { year: string; month: string } | null {
	if (!date) return null;

	return {
		year: date.toLocaleString('ru', { year: 'numeric' }),
		month: date.toLocaleString('ru', { month: '2-digit' }),
	};
}

interface LineProps extends TExperience {
	className?: string;
	prevDate: TExperience['dateEnd'] | null;
	nextDate: TExperience['dateBegin'] | null;
	isCurrent: boolean;
	onSelect: () => void;
}

const Line: React.FC<LineProps> = ({ className, isCurrent, onSelect, prevDate, nextDate, ...item }) => {
	const { dateBegin, dateEnd } = item;

	const begin = getDate(dateBegin);
	const end = getDate(dateEnd);

	const percent = getExperiencePercent(item);

	const isBeginMerged = dateBegin.getTime() === prevDate?.getTime();
	const isEndMerged = dateEnd !== undefined && dateEnd.getTime() === nextDate?.getTime();

	const yearBeginRef = useRef<HTMLSpanElement | null>(null);
	const yearBeginRect = yearBeginRef.current?.getBoundingClientRect();

	const rootStyle: CSSProperties = {
		width: `calc(${percent} * 100%)`,
	};
	const dateStartStyle: CSSProperties = {
		marginInlineStart: isBeginMerged ? `calc(-${yearBeginRect?.width}px - 7px)` : '0',
	};

	let diffYear = +(end?.year || +new Date().getFullYear()) - +(begin?.year || 0);
	let diffMonth = +(end?.month || +new Date().getMonth()) - +(begin?.month || 0);

	if (diffMonth < 0) {
		diffMonth += 12;
		diffYear -= 1;
	}

	return (
		<div className={cn(sLine, isCurrent && sLineCurrent, className)} onClick={onSelect} style={rootStyle}>
			<div className={cn(sDate, sDateStart, isBeginMerged && sDateStartMerged)} style={dateStartStyle}>
				<span className={cn(sYear)} ref={yearBeginRef}>
					{begin?.year}
				</span>
				<span className={cn(sMonth)}>{begin?.month}</span>
			</div>
			<div className={cn(sDate, sDateEnd, isEndMerged && sDateEndMerged)}>
				{end ? (
					<>
						<span className={cn(sYear)}>{end.year}</span>
						<span className={cn(sMonth)}>{end.month}</span>
					</>
				) : (
					<span className={cn(sNow)}>Now</span>
				)}
			</div>
			{isCurrent && (
				<div className={cn(sDuration)}>
					{diffYear > 0 && `${diffYear}y`} {diffMonth}m
				</div>
			)}
		</div>
	);
};

interface FeatureProps extends React.PropsWithChildren {
	icon: StaticImageData;
	className?: string;
}

const Feature: React.FC<FeatureProps> = ({ className, icon, children }) => {
	return (
		<div className={cn(sFeature, className)}>
			<Image className={cn(sIcon)} src={icon} alt="Icon" />
			{children}
		</div>
	);
};

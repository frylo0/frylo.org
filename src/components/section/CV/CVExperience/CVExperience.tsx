'use client';

import cn from 'clsx';
import Image from 'next/image';
import { CSSProperties, Fragment, useRef, useState } from 'react';

import { useLayout } from '@/components/common/Layout/Layout';
import { experience, getExperiencePercent, TExperience } from '@/constants/work-experience';
import { CVCompany } from './CVCompany/CVCompany';
import {
	sCVExperience,
	sDate,
	sDateEnd,
	sDateEndMerged,
	sDateStart,
	sDateStartMerged,
	sDuration,
	sGraph,
	sLine,
	sLineCurrent,
	sLineImg,
	sLineLogo,
	sLineOutstaff,
	sMonth,
	sNow,
	sTitle,
	sYear,
} from './CVExperience.css';
import { getDate } from './helpers';

export interface CVExperienceProps {
	className?: string;
}

export const CVExperience: React.FC<CVExperienceProps> = ({ className = '' }) => {
	const device = useLayout();
	const isPhone = device?.name === 'phone';

	const [current, setCurrent] = useState(experience.length - 1);

	const graphDirection: LineProps['direction'] = device?.name === 'phone' ? 'vertical' : 'horizontal';

	const elCompany = useRef<HTMLDivElement | null>(null);

	const handleLineSelect = (index: number) => () => {
		setCurrent(index);

		if (isPhone) {
			elCompany.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
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
						direction={graphDirection}
					/>
				))}
			</div>

			{experience.map((exp, i) => (
				<CVCompany
					ref={i === current ? elCompany : null}
					isPhone={isPhone}
					isSelected={i === current}
					exp={exp}
					key={i}
				/>
			))}
		</div>
	);
};

interface LineProps extends TExperience {
	className?: string;
	prevDate: TExperience['dateEnd'] | null;
	nextDate: TExperience['dateBegin'] | null;
	isCurrent: boolean;
	onSelect: () => void;
	direction: 'horizontal' | 'vertical';
}

const Line: React.FC<LineProps> = ({ className, isCurrent, onSelect, prevDate, nextDate, direction, ...item }) => {
	const { dateBegin, dateEnd } = item;

	const isHorizontal = direction === 'horizontal';
	const isVertical = direction === 'vertical';
	const isOutstaff = item.isOutstaff;

	const begin = getDate(dateBegin);
	const end = getDate(dateEnd);

	const percent = getExperiencePercent(item);

	const isBeginMerged = dateBegin.getTime() === prevDate?.getTime();
	const isEndMerged = dateEnd !== undefined && dateEnd.getTime() === nextDate?.getTime();

	const yearBeginRef = useRef<HTMLSpanElement | null>(null);
	const yearBeginRect = yearBeginRef.current?.getBoundingClientRect();

	const cssSizeProp = isHorizontal ? 'width' : 'height';
	const rootStyle: CSSProperties = {
		[cssSizeProp]: `calc(${percent} * 100%)`,
	};

	const cssMarginProp = isHorizontal ? 'marginInlineStart' : 'marginBlockEnd';
	const cssMarginValue = isHorizontal
		? `calc(-${yearBeginRect?.width}px - 7px)`
		: `calc(-${yearBeginRect?.height}px - 3px)`;
	const dateStartStyle: CSSProperties = {
		[cssMarginProp]: isBeginMerged ? cssMarginValue : '0',
	};

	let diffYear = +(end?.year || +new Date().getFullYear()) - +(begin?.year || 0);
	let diffMonth = +(end?.month || +new Date().getMonth()) - +(begin?.month || 0);

	if (diffMonth < 0) {
		diffMonth += 12;
		diffYear -= 1;
	}

	return (
		<div
			className={cn(sLine, isCurrent && sLineCurrent, isOutstaff && sLineOutstaff, className)}
			onClick={onSelect}
			style={rootStyle}
		>
			{isVertical && (
				<div className={cn(sLineLogo)}>
					<Image className={cn(sLineImg)} src={item.company.logoCentred} alt={item.company.name} />
				</div>
			)}

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

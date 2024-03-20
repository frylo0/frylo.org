import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { forwardRef, Fragment } from 'react';

import PNG_Code from '@/assets/raster/tech.png';
import PNG_Time from '@/assets/raster/timing.png';
import PNG_Website from '@/assets/raster/website.png';
import PNG_Job from '@/assets/raster/work.png';
import { TExperience } from '@/constants/work-experience';
import { getDate } from '../helpers';
import {
	sCVCompany,
	sDescription,
	sFeature,
	sFeatures,
	sHidden,
	sIcon,
	sInfo,
	sJobTitle,
	sLogo,
	sLogoImg,
	sMainFeatures,
	sName,
	sTech,
	sTechItems,
	sTechStack,
	sTiming,
	sWebsite,
} from './CVCompany.css';

export interface CVCompanyProps {
	className?: string;
	isPhone: boolean;
	isSelected: boolean;
	exp: TExperience;
}

export const CVCompany = forwardRef<HTMLDivElement, CVCompanyProps>(
	({ className = '', isPhone, isSelected, exp }, ref) => {
		const expLogo = isPhone ? exp.company.logoCentred : exp.company.logo;

		const expBegin = getDate(exp.dateBegin);
		const expEnd = getDate(exp.dateEnd);

		const theWebsite = (
			<Feature className={cn(sWebsite)} icon={PNG_Website}>
				<Link href={exp.company.url} target="_blank">
					{exp.company.website}
				</Link>
			</Feature>
		);

		const theName = <div className={cn(sName)}>{exp.company.name}</div>;

		return (
			<div className={cn(sCVCompany, !isSelected && sHidden, className)} ref={ref}>
				<div className={cn(sLogo)}>
					<Image className={cn(sLogoImg)} src={expLogo} alt={exp.company.name} />
				</div>
				{isPhone && (
					<div className={cn(sMainFeatures)}>
						{theName}
						{theWebsite}
					</div>
				)}
				<div className={cn(sInfo)}>
					{!isPhone && theName}
					<div className={cn(sFeatures)}>
						{!isPhone && theWebsite}
						<Feature icon={PNG_Job} className={cn(sJobTitle)}>
							{exp.jobTitle}
						</Feature>
						<Feature icon={PNG_Time} className={cn(sTiming)}>
							{expBegin?.year}.{expBegin?.month} — {expEnd ? `${expEnd.year}.${expEnd.month}` : 'Now'}
						</Feature>
						<Feature icon={PNG_Code} className={cn(sTechStack)}>
							<div className={cn(sTechItems)}>
								{exp.techStack.map((tech, i) => (
									<Fragment key={i}>
										{i > 0 && ', '}
										<Link className={cn(sTech)} href={tech.url}>
											{tech.name}
										</Link>
									</Fragment>
								))}
							</div>
						</Feature>
					</div>
				</div>
				<div className={cn(sDescription)}>{exp.description}</div>
			</div>
		);
	}
);

CVCompany.displayName = 'CVCompany';

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

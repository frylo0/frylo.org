import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import PNG_Code from '@/assets/raster/code.png';
import PNG_Copyright from '@/assets/raster/copyright.png';
import PNG_Paint from '@/assets/raster/paint.png';
import { Layout } from '@/components/common/Layout/Layout';
import { figmaUrl, repoUrl, yearStart } from '@/constants/project';
import {
	sContent,
	sCopyright,
	sCopyrightSign,
	sFooter,
	sMetaInfo,
	sSource,
	sSourceIcon,
	sSources,
	sYears,
} from './Footer.css';

export interface FooterProps {
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
	const yearCurrent = new Date().getFullYear();

	return (
		<footer className={cn(sFooter, className)}>
			<Layout className={cn(sContent)}>
				<div className={cn(sMetaInfo)}>
					<div className={cn(sCopyright)}>
						<Image className={cn(sCopyrightSign)} src={PNG_Copyright} alt="copyright sign" />
						frylo.d.ts
					</div>
					<div className={cn(sYears)}>
						{yearStart} — {yearCurrent}
					</div>
				</div>

				<div className={cn(sSources)}>
					<Source icon={PNG_Paint} iconAlt="Paint sign" label="frylo" url={figmaUrl} />
					<Source icon={PNG_Code} iconAlt="Code sign" label="frylo0" url={repoUrl} />
				</div>
			</Layout>
		</footer>
	);
};

interface SourceProps extends React.PropsWithChildren {
	className?: string;
	icon: StaticImageData;
	iconAlt: string;
	label: ReactNode;
	url: string;
}

const Source: React.FC<SourceProps> = ({ className, label, url, icon, iconAlt }) => {
	return (
		<Link className={cn(sSource, className)} href={url}>
			<Image className={cn(sSourceIcon)} src={icon} alt={iconAlt} />
			<span>{label}</span>
		</Link>
	);
};

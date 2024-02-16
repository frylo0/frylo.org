import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { CSSProperties, ReactNode } from 'react';

import PNG_GitHub from '@/assets/raster/github.png';
import PNG_GitLab from '@/assets/raster/gitlab.png';
import SVG_Logo from '@/assets/vector/logo.svg?url';
import { Layout } from '@/components/common/Layout/Layout';
import { colors } from '@/styles/vars/colors.css';
import { sContent, sDot, sDots, sHeader, sIcon, sLinks, sLogo, sLogoImg, sNickname, sPermalink } from './Header.css';

export interface HeaderProps {
	className?: string;
}

const withColor = (color: string) => ({ '--dot-color': color }) as CSSProperties;

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
	return (
		<header className={cn(sHeader, className)}>
			<Layout className={cn(sContent)}>
				<ul className={cn(sDots)}>
					<li className={cn(sDot)} style={withColor(colors.primaryLighter)} />
					<li className={cn(sDot)} style={withColor(colors.primary)} />
					<li className={cn(sDot)} style={withColor(colors.primaryDarker)} />
				</ul>

				<Link href="/" className={cn(sLogo)}>
					<Image className={cn(sLogoImg)} src={SVG_Logo} alt="frylo logo" />
				</Link>

				<div className={cn(sLinks)}>
					<Permalink label="frylo0" iconAlt="Github Logo" icon={PNG_GitHub} url="https://github.com/frylo0" />
					<Permalink label="frylo" iconAlt="GitLab Logo" icon={PNG_GitLab} url="https://gitlab.com/frylo" />
				</div>
			</Layout>
		</header>
	);
};

interface PermalinkProps extends React.PropsWithChildren {
	className?: string;
	label: ReactNode;
	icon: StaticImageData;
	iconAlt: string;
	url: string;
}

const Permalink: React.FC<PermalinkProps> = ({ className, url, label, icon, iconAlt }) => {
	return (
		<Link href={url} className={cn(sPermalink, className)}>
			<Image className={cn(sIcon)} src={icon} alt={iconAlt} />
			<span className={cn(sNickname)}>{label}</span>
		</Link>
	);
};

import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import PNG_Freelance_Mob from '@/assets/raster/exp-freelance-mobile.png';
import PNG_Freelance from '@/assets/raster/exp-freelance.png';
import PNG_Genesis_Mob from '@/assets/raster/exp-genesis-mobile.png';
import PNG_Genesis from '@/assets/raster/exp-genesis.png';
import PNG_RNCB_Mob from '@/assets/raster/exp-rncb-mobile.png';
import PNG_RNCB from '@/assets/raster/exp-rncb.png';
import PNG_VK_Mob from '@/assets/raster/exp-vk-mobile.png';
import PNG_VK from '@/assets/raster/exp-vk.png';
import PNG_Xsolla_Mob from '@/assets/raster/exp-xsolla-mobile.png';
import PNG_Xsolla from '@/assets/raster/exp-xsolla.png';
import {
	Backbone,
	CSS,
	Gulp,
	HTML,
	jQuery,
	NextJS,
	NodeJS,
	PHP,
	PUG,
	React,
	Redux,
	Sass,
	Svelte,
	SVG,
	TTechnology,
	TurboRepo,
	TypeScript,
	WordPress,
	Yii2,
} from './technologies';

export type TExperience = {
	company: {
		logo: StaticImageData;
		logoCentred: StaticImageData;
		name: string;
		website: string;
		url: string;
	};

	jobTitle: string;
	isOutstaff: boolean;

	dateBegin: Date;
	dateEnd?: Date;

	techStack: TTechnology[];

	description: ReactNode;
};

const Genesis: TExperience = {
	company: {
		logo: PNG_Genesis,
		logoCentred: PNG_Genesis_Mob,
		name: 'Clinic Genesis',
		website: 'клиника-генезис.рф',
		url: 'https://клиника-генезис.рф/',
	},

	jobTitle: 'WordPress developer / System Administrator',
	isOutstaff: false,

	dateBegin: new Date('2020-06-01'),
	dateEnd: new Date('2020-08-31'),

	techStack: [HTML, CSS, jQuery, WordPress, PUG],

	description: (
		<>
			<p>
				The &quot;Genesis&quot; clinic was my first job as a programmer. I worked simultaneously as a WordPress
				developer and system administrator. My responsibilities included theme development for WordPress, creating
				interactive modules for WordPress, data collection for the website, writing medical articles, and SEO promotion.
			</p>

			<h4>Achievements</h4>

			<ul>
				<li>Gathered system requirements through communication with the client</li>
				<li>Expanded the website interface by creating new pages</li>
				<li>Improved the website&apos;s SEO performance by creating SEO-optimized content</li>
			</ul>
		</>
	),
};

const Freelance: TExperience = {
	company: {
		logo: PNG_Freelance,
		logoCentred: PNG_Freelance_Mob,
		name: 'Freelance',
		website: '—',
		url: '#',
	},

	jobTitle: 'Full-stack Developer',
	isOutstaff: false,

	dateBegin: new Date('2020-08-31'),
	dateEnd: new Date('2021-07-01'),

	techStack: [React, NodeJS, HTML, CSS, SVG, WordPress],

	description: (
		<>
			<p>
				I developed tools to simplify job searches, designed an interactive map showcasing historical landmarks, and
				built a custom online platform for a psychologist, delivering tailored solutions that met specific needs
				effectively.
			</p>

			<h4>Achievements</h4>

			<ul>
				<li>Developed an IT job parser for popular online resources using Node.js and React.js</li>
				<li>Created an interactive map of Crimea featuring historical landmarks</li>
				<li>Built an online store for a psychologist by developing a custom WordPress theme</li>
			</ul>
		</>
	),
};

const RNCB: TExperience = {
	company: {
		logo: PNG_RNCB,
		logoCentred: PNG_RNCB_Mob,
		name: 'RNCB',
		website: 'rncb.ru',
		url: 'https://www.rncb.ru/',
	},

	jobTitle: 'Middle Full-stack Developer',
	isOutstaff: false,

	dateBegin: new Date('2022-01-01'),
	dateEnd: new Date('2022-05-01'),

	techStack: [PHP, Yii2, jQuery, React, Sass, Gulp],

	description: (
		<>
			<p>
				RNCB bank brought me closer to industrial development. Here, I faced tasks of a more complex level. I also
				worked as a full-stack developer. However, the backend was written in Yii2, while the frontend was written in
				jQuery and Vue.js.
			</p>

			<h4>Achievements</h4>

			<ul>
				<li>Increased incident response speed by adapting dashboards for TV</li>
				<li>Improved interface readability by developing a new design with enhanced UI and UX</li>
				<li>Migrated the project from jQuery/Vue.js to React.js, simplifying project maintenance</li>
			</ul>
		</>
	),
};

const Xsolla: TExperience = {
	company: {
		logo: PNG_Xsolla,
		logoCentred: PNG_Xsolla_Mob,
		name: 'Xsolla',
		website: 'xsolla.com',
		url: 'https://xsolla.com/',
	},

	jobTitle: 'Senior Frontend Developer',
	isOutstaff: true,

	dateBegin: new Date('2022-05-01'),
	dateEnd: new Date('2023-03-01'),

	techStack: [React, TypeScript, TurboRepo, NextJS],

	description: (
		<>
			<p>
				Xsolla is a company that develops a payment system for games. I was developing a widget that integrates into the
				page and allows users to interact with Xsolla: transferring items to the game, purchasing currency, and so on.
			</p>

			<h4>Achievements</h4>

			<ul>
				<li>Implemented the subscription auto-renewal functionality with automatic payments</li>
				<li>Migrated the project from React to Preact, reducing memory usage and improving widget loading speed</li>
				<li>Improved cross-browser support for the widget by supporting older versions of Chrome and Firefox</li>
			</ul>
		</>
	),
};

const VK: TExperience = {
	company: {
		logo: PNG_VK,
		logoCentred: PNG_VK_Mob,
		name: 'VK',
		website: 'vk.com',
		url: 'https://dev.vk.com/en',
	},

	jobTitle: 'Senior Frontend Developer',
	isOutstaff: true,

	dateBegin: new Date('2023-03-01'),
	dateEnd: new Date('2024-06-01'),

	techStack: [React, Redux, Svelte, Backbone, TypeScript],

	description: (
		<>
			<p>
				At VK, I was involved in developing advertising banners. At first glance, this may seem like a straightforward
				task, but don&apos;t rush to conclusions.
			</p>

			<h4>Achievements</h4>

			<ul>
				<li>Developed a banner construction system and integrated it into 6 projects</li>
				<li>Expanded the user funnel by supporting IE11 and older versions of Chrome and Firefox</li>
				<li>Increased codebase coverage with unit tests, reducing the number of bugs in production</li>
			</ul>
		</>
	),
};

export const experience: TExperience[] = [Genesis, Freelance, RNCB, Xsolla, VK];

const dayS = 86_400;

function getDuration(experience: TExperience): number {
	const begin = experience.dateBegin;
	const end = experience.dateEnd || new Date();

	return end.getTime() - begin.getTime() + 31 * dayS * 1000;
}

const totalExperience = experience.reduce((prev, curr) => prev + getDuration(curr), 0);
const totalExperienceDate = new Date(totalExperience);
const roundingYear = 0 && totalExperienceDate.getMonth() >= 7 ? 1 : 0;

export const totalYears = totalExperienceDate.getUTCFullYear() - 1970 + roundingYear;

export function getExperiencePercent(experience: TExperience): number {
	return getDuration(experience) / totalExperience;
}

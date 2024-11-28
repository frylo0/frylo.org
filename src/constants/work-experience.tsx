import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import PNG_Genesis_Mob from '@/assets/raster/exp-genesis-mobile.png';
import PNG_Genesis from '@/assets/raster/exp-genesis.png';
import PNG_JoyDev_Mob from '@/assets/raster/exp-joydev-mobile.png';
import PNG_JoyDev from '@/assets/raster/exp-joydev.png';
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
	PHP,
	PUG,
	React,
	Redux,
	Sass,
	Svelte,
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

	dateBegin: new Date('2017-06-01'),
	dateEnd: new Date('2018-09-01'),

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

	dateBegin: new Date('2018-09-01'),
	dateEnd: new Date('2020-02-01'),

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

	dateBegin: new Date('2020-02-01'),
	dateEnd: new Date('2020-10-01'),

	techStack: [React, TypeScript, TurboRepo],

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

	dateBegin: new Date('2020-10-01'),
	dateEnd: new Date('2022-05-01'),

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

const JoyDev: TExperience = {
	company: {
		logo: PNG_JoyDev,
		logoCentred: PNG_JoyDev_Mob,
		name: 'Joy Dev',
		website: 'joy-dev.ru',
		url: 'https://joy-dev.ru/',
	},

	jobTitle: 'Head of Frontend Department',
	isOutstaff: false,

	dateBegin: new Date('2022-05-01'),
	dateEnd: new Date('2024-07-30'),

	techStack: [React, NextJS, TypeScript, WordPress],

	description: (
		<>
			<p>
				I&apos;am CTO of frontend department. Code reviews, project customization for different needs, team management,
				motivating employees, project decomposition and estimation, and conducting technical interviews. All this
				responsibilities was attended to me while I was working in JoyDev.
			</p>

			<h4>Achievements</h4>

			<ul>
				<li>
					Increased developer engagement in company projects, as measured by team feedback during retrospectives, by
					introducing new technologies such as Zustand, Docker, and pnpm
				</li>
				<li>
					Simplified the hiring process, leading to a 40% increase in HR funnel reach, by refining candidate
					requirements based on market standards and preparing a bank of technical interview questions
				</li>
				<li>
					Achieved timely project completion, improving estimation accuracy by 30%, through preliminary evaluation and
					decomposition of incoming leads
				</li>
			</ul>
		</>
	),
};

export const experience: TExperience[] = [Genesis, RNCB, Xsolla, VK, JoyDev];

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

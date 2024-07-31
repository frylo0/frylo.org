import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import PNG_Genesis_Mob from '@/assets/raster/exp-genesis-mobile.png';
import PNG_Genesis from '@/assets/raster/exp-genesis.png';
import PNG_JoyDev_Mob from '@/assets/raster/exp-joydev-mobile.png';
import PNG_JoyDev from '@/assets/raster/exp-joydev.png';
import PNG_Kindda_Mob from '@/assets/raster/exp-kindda-mobile.png';
import PNG_Kindda from '@/assets/raster/exp-kindda.png';
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
	ModuleFederation,
	NextJS,
	PHP,
	PUG,
	React,
	Sass,
	Svelte,
	TTechnology,
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

	techStack: [WordPress, HTML, CSS, jQuery],

	description: (
		<>
			<p>
				The &quot;Genesis&quot; clinic was my first job as a programmer. I worked simultaneously as a WordPress
				developer and system administrator. My responsibilities included theme development for WordPress, creating
				interactive modules for WordPress, data collection for the website, writing medical articles, and SEO promotion.
			</p>

			<p>
				This job allowed me to significantly improve my communication skills because I had to gather information bit by
				bit and communicate with a large number of people from various fields and departments.
			</p>

			<p>
				Here, I encountered SEO for the first time and learned a lot of aspects of it. In the future, this helped me not
				only to develop websites qualitatively but also to understand what needs to be done to ensure that the websites
				I create rank high in search engine results.
			</p>
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

	techStack: [PHP, Yii2, jQuery, React],

	description: (
		<>
			<p>
				RNCB bank brought me closer to industrial development. Here, I faced tasks of a more complex level. I also
				worked as a full-stack developer. However, the backend was written in Yii2, while the frontend was written in
				jQuery and Vue.js.
			</p>

			<p>
				My responsibilities included developing backend logic, writing frontend using jQuery and Vue.js, and rewriting
				old frontend logic in React.js. Quite a broad range of technologies, isn&apos;t it? I was fortunate to try out
				all these technologies because the company was undergoing standardization, and a decision was made to rewrite
				everything in React.js due to its growing popularity.
			</p>

			<p>
				Primarily, I developed internal products, and my client was the department head. During my time at the company,
				I had created several dashboards with a large amount of infographic and rewritten one project to React.js. Also,
				working as a full-stack developer gave me an understanding of client-server architecture, which made it easy for
				me to communicate with both backend and frontend developers in the future.
			</p>
		</>
	),
};

const Kindda: TExperience = {
	company: {
		logo: PNG_Kindda,
		logoCentred: PNG_Kindda_Mob,
		name: 'Kindda',
		website: 'linkedin.com/company/kindda',
		url: 'https://www.linkedin.com/company/kindda/',
	},

	jobTitle: 'Outstaff Middle Frontend Developer',
	isOutstaff: true,

	dateBegin: new Date('2020-02-01'),
	dateEnd: new Date('2020-06-01'),

	techStack: [Gulp, PUG, Sass, jQuery, WordPress, React],

	description: (
		<>
			<p>
				Kindda was my first experience working on an outstaff basis. Here, I developed landing pages using a combination
				of Gulp, Pug, Sass, jQuery, and created simple admin panels for collecting and sending messages. Some of them
				were built with React.
			</p>

			<p>
				The most challenging task I tackled in this company was writing text along a circle using SVG format. One of the
				landing pages was stylistically composed of such text, and my solution was aimed at speeding up development.
			</p>
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

	jobTitle: 'Outstaff Senior Frontend Developer',
	isOutstaff: true,

	dateBegin: new Date('2020-06-01'),
	dateEnd: new Date('2021-03-01'),

	techStack: [React, TypeScript, ModuleFederation],

	description: (
		<>
			<p>
				Xsolla is a company that develops a payment system for games. I was developing a widget that integrates into the
				page and allows users to interact with Xsolla: transferring items to the game, purchasing currency, and so on.
			</p>

			<p>
				Additionally, I created players personal accounts where they could do the same things as in the widget. Here, I
				became familiar with technologies such as Module Federation and Turbo Repo. The project was divided into
				separate repositories that were brought together. Each micro-frontend was hosted on a separate server and pulled
				together using Module Federation.
			</p>

			<p>
				This project involved intensive work with CI/CD, publishing package to NPM, and advanced TypeScript work, making
				it one of my favorite projects.
			</p>
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

	jobTitle: 'Outstaff Senior Frontend Developer',
	isOutstaff: true,

	dateBegin: new Date('2021-03-01'),
	dateEnd: new Date('2022-05-01'),

	techStack: [React, Svelte, Backbone, TypeScript],

	description: (
		<>
			<p>
				At VK, I was involved in developing advertising banners. At first glance, this may seem like a straightforward
				task, but don&apos;t rush to conclusions.
			</p>
			<p>
				Advertising banners themselves typically have many variations: with a headline or without, with the image on the
				right or left. Additionally, different amounts of text need to be accommodated, and the banner should adjust
				correctly. Adding the environmental factors where the advertising banner is placed complicates matters further:
				different language locales, light/dark themes, and the specific devices users are accessing from. Taken
				together, these factors turn banner development into a resource-intensive process because each ad must meet
				around 20 different requirements and adapt to any placement it finds itself in.
			</p>

			<p>
				Typically, a developer works on 1-3 projects simultaneously. During my time at VK, I worked on 11 projects
				because I needed to understand the environment into which I integrated my solution and identify the root of any
				problems that arose. Here, I learned to quickly immerse myself in unfamiliar projects of any complexity, which
				helps me find solutions to problems quickly to this day.
			</p>
		</>
	),
};

const JoyDev: TExperience = {
	company: {
		logo: PNG_JoyDev,
		logoCentred: PNG_JoyDev_Mob,
		name: 'JoyDev',
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
				responsibilities was attended to my while I was working in JoyDev.
			</p>

			<p>
				My main focus was to develop the company&apos;s website with a team of 6 developers. On this project, I
				configured linters and prettifier, set up CI/CD pipelines, defined the code style, and prepared project
				documentation. Additionally, I acted as a team lead on other projects such as a website for selling bouquets, a
				module for calculating product costs for an online store, and an admin panel for a cosmetics sales website.
			</p>

			<p>
				Nevertheless, I also wrote code myself. Primarily, this involved solutions related to optimizing websites for
				SEO and performance or complex frontend logic that less experienced employees couldn&apos;t complete within
				reasonable timeframes.
			</p>
		</>
	),
};

export const experience: TExperience[] = [Genesis, RNCB, Kindda, Xsolla, VK, JoyDev];

function getDuration(experience: TExperience): number {
	const begin = experience.dateBegin;
	const end = experience.dateEnd || new Date();

	return end.getTime() - begin.getTime();
}

const totalExperience = experience.reduce((prev, curr) => prev + getDuration(curr), 0);

export function getExperiencePercent(experience: TExperience): number {
	return getDuration(experience) / totalExperience;
}

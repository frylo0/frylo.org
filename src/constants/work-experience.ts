import { StaticImageData } from 'next/image';

import PNG_Genesis from '@/assets/raster/exp-genesis.png';
import PNG_JoyDev from '@/assets/raster/exp-joydev.png';
import PNG_Kindda from '@/assets/raster/exp-kindda.png';
import PNG_RNCB from '@/assets/raster/exp-rncb.png';
import PNG_VK from '@/assets/raster/exp-vk.png';
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

type TExperience = {
	company: {
		logo: StaticImageData;
		name: string;
		website: string;
		url: string;
	};

	jobTitle: string;

	dateBegin: Date;
	dateEnd: Date;

	techStack: TTechnology[];
};

const Genesis: TExperience = {
	company: {
		logo: PNG_Genesis,
		name: 'Clinic Genesis',
		website: 'клиника-генезис.рф',
		url: 'https://клиника-генезис.рф/',
	},

	jobTitle: 'WordPress developer / System Administrator',

	dateBegin: new Date('2000-01-01'),
	dateEnd: new Date('2000-01-01'),

	techStack: [WordPress, HTML, CSS, jQuery],
};

const RNCB: TExperience = {
	company: {
		logo: PNG_RNCB,
		name: 'RNCB',
		website: 'rncb.ru',
		url: 'https://www.rncb.ru/',
	},

	jobTitle: 'Middle Full-stack Developer',

	dateBegin: new Date('2000-01-01'),
	dateEnd: new Date('2000-01-01'),

	techStack: [PHP, Yii2, jQuery, React],
};

const Kindda: TExperience = {
	company: {
		logo: PNG_Kindda,
		name: 'Kindda',
		website: 'linkedin.com/company/kindda',
		url: 'https://www.linkedin.com/company/kindda/',
	},

	jobTitle: 'Outstaff Middle Frontend Developer',

	dateBegin: new Date('2000-01-01'),
	dateEnd: new Date('2000-01-01'),

	techStack: [Gulp, PUG, Sass, jQuery, WordPress, React],
};

const Xsolla: TExperience = {
	company: {
		logo: PNG_Xsolla,
		name: 'Xsolla',
		website: 'xsolla.com',
		url: 'https://xsolla.com/',
	},

	jobTitle: 'Outstaff Senior Frontend Developer',

	dateBegin: new Date('2000-01-01'),
	dateEnd: new Date('2000-01-01'),

	techStack: [React, TypeScript, ModuleFederation],
};

const VK: TExperience = {
	company: {
		logo: PNG_VK,
		name: 'VK',
		website: 'vk.com',
		url: 'https://dev.vk.com/en',
	},

	jobTitle: 'Outstaff Senior Frontend Developer',

	dateBegin: new Date('2000-01-01'),
	dateEnd: new Date('2000-01-01'),

	techStack: [React, Svelte, Backbone, TypeScript],
};

const JoyDev: TExperience = {
	company: {
		logo: PNG_JoyDev,
		name: 'JoyDev',
		website: 'joy-dev.ru',
		url: 'https://joy-dev.ru/',
	},

	jobTitle: 'CTO Frotend Developer',

	dateBegin: new Date('2000-01-01'),
	dateEnd: new Date('2000-01-01'),

	techStack: [React, NextJS, TypeScript, WordPress],
};

export const experience: TExperience[] = [Genesis, RNCB, Kindda, Xsolla, VK, JoyDev];

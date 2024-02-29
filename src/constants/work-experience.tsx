import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

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

export type TExperience = {
	company: {
		logo: StaticImageData;
		name: string;
		website: string;
		url: string;
	};

	jobTitle: string;

	dateBegin: Date;
	dateEnd?: Date;

	techStack: TTechnology[];

	description: ReactNode;
};

const Genesis: TExperience = {
	company: {
		logo: PNG_Genesis,
		name: 'Clinic Genesis',
		website: 'клиника-генезис.рф',
		url: 'https://клиника-генезис.рф/',
	},

	jobTitle: 'WordPress developer / System Administrator',

	dateBegin: new Date('2017-06-01'),
	dateEnd: new Date('2018-04-01'),

	techStack: [WordPress, HTML, CSS, jQuery],

	description: (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mauris
				pharetra et ultrices neque ornare aenean. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
				Sagittis eu volutpat odio facilisis. Sagittis orci a scelerisque purus semper eget duis. Aliquet lectus proin
				nibh nisl condimentum id venenatis a condimentum.
			</p>
			<p>
				Eget magna fermentum iaculis eu non diam phasellus. Id neque aliquam vestibulum morbi blandit. Eleifend donec
				pretium vulputate sapien nec sagittis aliquam. Sed vulputate mi sit amet mauris. Facilisis magna etiam tempor
				orci eu lobortis elementum nibh tellus. Condimentum id venenatis a condimentum.
			</p>
		</>
	),
};

const RNCB: TExperience = {
	company: {
		logo: PNG_RNCB,
		name: 'RNCB',
		website: 'rncb.ru',
		url: 'https://www.rncb.ru/',
	},

	jobTitle: 'Middle Full-stack Developer',

	dateBegin: new Date('2018-04-01'),
	dateEnd: new Date('2020-02-01'),

	techStack: [PHP, Yii2, jQuery, React],

	description: (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mauris
				pharetra et ultrices neque ornare aenean. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
				Sagittis eu volutpat odio facilisis. Sagittis orci a scelerisque purus semper eget duis. Aliquet lectus proin
				nibh nisl condimentum id venenatis a condimentum.
			</p>
			<p>
				Eget magna fermentum iaculis eu non diam phasellus. Id neque aliquam vestibulum morbi blandit. Eleifend donec
				pretium vulputate sapien nec sagittis aliquam. Sed vulputate mi sit amet mauris. Facilisis magna etiam tempor
				orci eu lobortis elementum nibh tellus. Condimentum id venenatis a condimentum.
			</p>
		</>
	),
};

const Kindda: TExperience = {
	company: {
		logo: PNG_Kindda,
		name: 'Kindda',
		website: 'linkedin.com/company/kindda',
		url: 'https://www.linkedin.com/company/kindda/',
	},

	jobTitle: 'Outstaff Middle Frontend Developer',

	dateBegin: new Date('2020-02-01'),
	dateEnd: new Date('2020-06-01'),

	techStack: [Gulp, PUG, Sass, jQuery, WordPress, React],

	description: (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mauris
				pharetra et ultrices neque ornare aenean. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
				Sagittis eu volutpat odio facilisis. Sagittis orci a scelerisque purus semper eget duis. Aliquet lectus proin
				nibh nisl condimentum id venenatis a condimentum.
			</p>
			<p>
				Eget magna fermentum iaculis eu non diam phasellus. Id neque aliquam vestibulum morbi blandit. Eleifend donec
				pretium vulputate sapien nec sagittis aliquam. Sed vulputate mi sit amet mauris. Facilisis magna etiam tempor
				orci eu lobortis elementum nibh tellus. Condimentum id venenatis a condimentum.
			</p>
		</>
	),
};

const Xsolla: TExperience = {
	company: {
		logo: PNG_Xsolla,
		name: 'Xsolla',
		website: 'xsolla.com',
		url: 'https://xsolla.com/',
	},

	jobTitle: 'Outstaff Senior Frontend Developer',

	dateBegin: new Date('2020-06-01'),
	dateEnd: new Date('2020-12-01'),

	techStack: [React, TypeScript, ModuleFederation],

	description: (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mauris
				pharetra et ultrices neque ornare aenean. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
				Sagittis eu volutpat odio facilisis. Sagittis orci a scelerisque purus semper eget duis. Aliquet lectus proin
				nibh nisl condimentum id venenatis a condimentum.
			</p>
			<p>
				Eget magna fermentum iaculis eu non diam phasellus. Id neque aliquam vestibulum morbi blandit. Eleifend donec
				pretium vulputate sapien nec sagittis aliquam. Sed vulputate mi sit amet mauris. Facilisis magna etiam tempor
				orci eu lobortis elementum nibh tellus. Condimentum id venenatis a condimentum.
			</p>
		</>
	),
};

const VK: TExperience = {
	company: {
		logo: PNG_VK,
		name: 'VK',
		website: 'vk.com',
		url: 'https://dev.vk.com/en',
	},

	jobTitle: 'Outstaff Senior Frontend Developer',

	dateBegin: new Date('2020-12-01'),
	dateEnd: new Date('2021-11-01'),

	techStack: [React, Svelte, Backbone, TypeScript],

	description: (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mauris
				pharetra et ultrices neque ornare aenean. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
				Sagittis eu volutpat odio facilisis. Sagittis orci a scelerisque purus semper eget duis. Aliquet lectus proin
				nibh nisl condimentum id venenatis a condimentum.
			</p>
			<p>
				Eget magna fermentum iaculis eu non diam phasellus. Id neque aliquam vestibulum morbi blandit. Eleifend donec
				pretium vulputate sapien nec sagittis aliquam. Sed vulputate mi sit amet mauris. Facilisis magna etiam tempor
				orci eu lobortis elementum nibh tellus. Condimentum id venenatis a condimentum.
			</p>
		</>
	),
};

const JoyDev: TExperience = {
	company: {
		logo: PNG_JoyDev,
		name: 'JoyDev',
		website: 'joy-dev.ru',
		url: 'https://joy-dev.ru/',
	},

	jobTitle: 'CTO Frotend Developer',

	dateBegin: new Date('2021-11-01'),
	dateEnd: undefined,

	techStack: [React, NextJS, TypeScript, WordPress],

	description: (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mauris
				pharetra et ultrices neque ornare aenean. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
				Sagittis eu volutpat odio facilisis. Sagittis orci a scelerisque purus semper eget duis. Aliquet lectus proin
				nibh nisl condimentum id venenatis a condimentum.
			</p>
			<p>
				Eget magna fermentum iaculis eu non diam phasellus. Id neque aliquam vestibulum morbi blandit. Eleifend donec
				pretium vulputate sapien nec sagittis aliquam. Sed vulputate mi sit amet mauris. Facilisis magna etiam tempor
				orci eu lobortis elementum nibh tellus. Condimentum id venenatis a condimentum.
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

import Image from 'next/image';

import { IsDevelopment } from './IsDevelopment';

import type { Meta, StoryObj } from '@storybook/react';

/**
 * This components is dedicated to hide content on screens that are not developed yet.
 */
const meta = {
	title: 'Common/IsDevelopment',
	component: IsDevelopment,
	parameters: {
		layout: 'center',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof IsDevelopment>;

export default meta;

type Story = StoryObj<typeof meta>;

const PNG_Kitten =
	'https://www.pet.co.nz/_next/image?url=https%3A%2F%2Fstrapi-petco-stage-media-library.s3.ap-southeast-2.amazonaws.com%2Fwelcoming_a_new_kitten_9d7724c4a4.png&w=1920&q=75';
export const Primary: Story = {
	args: {
		minWidth: 300,
		maxWidth: 2000,
	},
	decorators: (Story) => (
		<div>
			<Image src={PNG_Kitten} alt="kitten" width={848} height={385} />
			<Story />
		</div>
	),
};

import { Images } from './Images';

import type { Meta, StoryObj } from '@storybook/react';

/**
 * This is an example of using images in this project
 */
const meta = {
	title: 'Env/Images',
	component: Images,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Images>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SrcImage: Story = {
	args: {
		showSrcImage: true,
		showComponentImage: false,
	},
};

export const ComponentImage: Story = {
	args: {
		showSrcImage: false,
		showComponentImage: true,
	},
};

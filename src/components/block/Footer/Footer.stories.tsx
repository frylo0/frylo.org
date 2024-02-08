import { Footer } from './Footer';

import type { Decorator, Meta, StoryObj } from '@storybook/react';

const WithPadding: Decorator = (Story) => (
	<div style={{ paddingBlock: '10px' }}>
		<Story />
	</div>
);

const meta = {
	title: 'Block/Footer',
	component: Footer,
	parameters: {
		layout: 'fullwidth',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: {},

	parameters: {
		viewport: {
			defaultViewport: 'desktop',
		},
	},

	decorators: [WithPadding],
};

export const Mobile: Story = {
	args: {},

	parameters: {
		viewport: {
			defaultViewport: 'mobile2',
		},
	},

	decorators: [WithPadding],
};

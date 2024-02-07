import { Layout } from './Layout';

import type { Meta, StoryObj } from '@storybook/react';

/**
 * This components is dedicated to add adaptive padding to the content. Yellow color shows size of padding.
 */
const meta = {
	title: 'Common/Layout',
	component: Layout,
	parameters: {
		layout: 'fullwidth',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: <div style={{ background: 'red', height: '100px' }} />,
	},
	decorators: (Story) => (
		<div style={{ background: 'yellow' }}>
			<Story />
		</div>
	),
};

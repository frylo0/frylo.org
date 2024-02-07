import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

/**
 * Simple Button component to show whole power of storybook.
 */
const meta = {
	title: 'Env/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		color: { control: 'select', options: ['primary', 'secondary'] },
		size: { control: 'select', options: ['small', 'large'] },
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: 'primary',
		children: 'Button',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		children: 'Button',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		children: 'Button',
	},
};

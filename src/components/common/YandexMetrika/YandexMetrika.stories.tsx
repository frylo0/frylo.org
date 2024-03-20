import { YandexMetrika } from './YandexMetrika';

import type { Meta, StoryObj } from '@storybook/react';

/**
 * Adds Yandex Metrika counter to Next.js website
 */
const meta = {
	title: 'Common/YandexMetrika',
	component: YandexMetrika,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof YandexMetrika>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		ymId: 96785094,
	},
};

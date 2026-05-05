import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Animation from '../components/Animation/Animation';

const meta = {
  title: 'Example/Animation',
  component: Animation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Animation>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    count: 16
  }

export const Default: Story = {
  args,
};

export const Disabled: Story = {
  args: {
    ...args,
  },
};

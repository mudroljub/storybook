import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import Filter from '../components/Filter/Filter';

const meta = {
  title: 'Example/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // nema konkretnih props-a još, ali ostavljam prostor
  },
  args: {
    onChange: fn(),
    onReset: fn(),
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  onChange: (() => console.log('changed')) as any,
  onReset: (() => console.log('reset')) as any,
};

export const Default: Story = {
  args,
};

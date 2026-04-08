import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';

import FilterButton from '../components/FilterButton/FilterButton';

const nations = ["cn", "uk", "es", "de"]

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/FilterButton',
  component: FilterButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    nations: { control: 'multi-select', options: nations },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    nations,
    onClick: (() => console.log('clicked')) as any,
    onClose: (() => console.log('reset')) as any,
    label: 'Text',
  }

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args,
};

export const Disabled: Story = {
  args: {
    ...args,
    isDisabled: true,
  },
};

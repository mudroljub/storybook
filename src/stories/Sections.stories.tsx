import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Sections from '../components/Sections/Sections'

const meta: Meta<typeof Sections> = {
  title: 'Example/Sections',
  component: Sections,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a252f' },
      ],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sections>

export const Default: Story = {
  render: () => <Sections />,
}

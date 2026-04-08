import type { Meta, StoryObj } from '@storybook/react-webpack5'

import Filter from '../components/Filter/Filter'
import { FilterData } from '../components/Filter/types'

const data: FilterData = new Map([
  [
    'Tier',
    [
      { key: 'I' }, { key: 'II' }, { key: 'III' }, { key: 'IV' }, { key: 'V' },
      { key: 'VI' }, { key: 'VII' }, { key: 'VIII' }, { key: 'IX' }, { key: 'X' }, { key: '★' }
    ]
  ],
  [
    'Type',
    [
      { key: 'CV', label: 'Aircraft Carrier' },
      { key: 'BB', label: 'Battleship' },
      { key: 'CA', label: 'Cruiser' },
      { key: 'DD', label: 'Destroyer' }
    ]
  ],
  [
    'Nation',
    [
      { key: 'cn' }, { key: 'uk' }, { key: 'es' }, { key: 'de' }, { key: 'jp' }, { key: 'us' }, { key: 'eu' }
    ]
  ],
  [
    'Rarity',
    [
      { key: 'Common' }, { key: 'Rare' }, { key: 'Elite' }, { key: 'Premium' }
    ]
  ]
])

const meta = {
  title: 'Example/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    data,
  },
} satisfies Meta<typeof Filter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
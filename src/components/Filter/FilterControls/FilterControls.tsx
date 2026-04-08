import React, { useState } from 'react'
import styles from './FilterControls.module.scss'
import FilterButton from '../../FilterButton/FilterButton'

// TODO: remove mock data
const filterButtonArgs = {
  countries: ['Greece', 'Canada', 'Mexico', 'Russia', 'Serbia', 'China'],
  onClick: (() => console.log('clicked')) as any,
  onClose: (() => console.log('reset')) as any,
}

interface FilterControlsProps {
  onShowFiltersClick: () => void
  onSearchChange: (value: string) => void
  onReset: () => void
}

const FilterControls: React.FC<FilterControlsProps> = ({
  onSearchChange,
  onShowFiltersClick,
  onReset
}) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearchChange(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <div className={styles.leftSection}>
          <button className={styles.actionButton} onClick={onShowFiltersClick}>
            <span>Show filters</span>
            <span>▼</span>
          </button>

          <button className={styles.actionButton}>
            Display order: by price ⬇
          </button>

          <label>
            <input type="checkbox" />
            <span>Not compatible with my ships</span>
          </label>
        </div>

        <input
          type="search"
          placeholder='Search by name'
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.secondRow}>
        <span>III, VII-X</span>

        <FilterButton {...filterButtonArgs} />

        <button className={styles.resetButton} onClick={onReset}>
          Reset All
        </button>
      </div>
    </div>
  )
}

export default FilterControls
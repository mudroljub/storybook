import React, { useState } from 'react'
import styles from './FilterControls.module.scss'

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
      <div className={styles.mainRow}>
        <div className={styles.leftSection}>
          <button className={styles.actionButton} onClick={onShowFiltersClick}>
            <span>Show filters</span>
            <span style={{ marginLeft: '6px', fontSize: '10px' }}>▼</span>
          </button>

          <div className={styles.divider} />

          <button className={styles.actionButton}>
            Display order: by price ⬇
          </button>

          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span>Not compatible with my ships</span>
          </label>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search by name"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      <div className={styles.tagsRow}>
        <span className={styles.activeFiltersText}>III, VII-X</span>

        <div className={styles.iconTags}>
          <span style={{color: 'red', fontWeight: 'bold'}}>🇨🇳</span>
          <span style={{color: 'blue'}}>🇪🇺</span>
          <span style={{color: 'gold'}}>☭</span>
        </div>

        <button className={styles.resetButton} onClick={onReset}>
          Reset All
        </button>
      </div>
    </div>
  )
}

export default FilterControls
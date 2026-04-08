import styles from './FilterTable.module.scss';
import FilterSection from '../FilterSection/FilterSection'
import { FilterData } from '../types';

interface FilterProps {
  data: FilterData;
}

const FilterTable = ({ data }: FilterProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <span>Filters</span>
          <button className={styles.reset}>Reset All</button>
        </div>
        <input type="search" placeholder='Search by name' />
      </div>

      <div className={styles.sections}>
        {Array.from(data).map(([title, options]) => (
          <FilterSection
            key={title}
            title={title}
            items={options}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <div>
          <label><input type="checkbox" /> Not compatible with my ships</label>
          <label className={styles.marginLeft}><input type="checkbox" /> Available for selling</label>
        </div>
        <span className={styles.sort}>Display order: by tier ↓</span>
      </div>
    </div>
  );
};

export default FilterTable
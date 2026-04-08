import { FilterItem } from '../types';
import styles from './FilterSection.module.scss';
import { chunkArray } from '../utils';

const MAX_ROWS = 5;

interface SectionProps {
  title: string;
  items: FilterItem[];
}

const FilterSection: React.FC<SectionProps> = ({ title, items }) => {
  const columns = chunkArray(items, MAX_ROWS);

  return (
    <div className={styles.section}>
      <div className={styles.title}>{title}</div>

      <div className={styles.columnsWrapper}>
        {columns.map((col, colIdx) => (
          <div key={colIdx} className={styles.column}>
            {col.map((item) => (
              <label key={item.key} className={styles.label}>
                <input type="checkbox" />
                <span>{item.label || item.key}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection
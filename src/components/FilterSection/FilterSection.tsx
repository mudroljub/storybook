import { FilterItem } from '../Filter/Filter';
import styles from './FilterSection.module.scss';

const maxRows = 5;

const chunkArray = (arr: FilterItem[], size: number): FilterItem[][] => {
  const chunks: FilterItem[][] = []
  
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }  
  return chunks
}

interface SectionProps {
  title: string;
  items: FilterItem[];
}

const FilterSection: React.FC<SectionProps> = ({ title, items }) => {
  const columns = chunkArray(items, maxRows);

  return (
    <div className={styles.section}>
      <div className={styles.title}>{title}</div>

      <div className={styles.columnsWrapper}>
        {columns.map((col, colIdx) => (
          <div key={colIdx} className={styles.column}>
            {col.map((item) => (
              <label key={item.key} className={styles.label}>
                <input type="checkbox" />
                <span>{item.key}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection
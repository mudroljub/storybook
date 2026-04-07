import styles from './FilterSection.module.scss';

const maxRows = 5;

const chunkArray = (arr: string[], size: number): string[][] => {
  const chunks: string[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

interface SectionProps {
  title: string;
  items: string[];
}

const FilterSection: React.FC<SectionProps> = ({ title, items }) => {
  const columns = chunkArray(items, maxRows);

  return (
    <div className={styles.section}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.columnsWrapper}>
        {columns.map((col, colIdx) => (
          <div key={colIdx} className={styles.column}>
            {col.map((item) => (
              <label key={item} className={styles.label}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection
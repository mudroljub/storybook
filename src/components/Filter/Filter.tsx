import styles from './Filter.module.scss';
import FilterSection from '../FilterSection/FilterSection'

type Data = Record<string, string[]>;

const data: Data = {
  Tier: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', '★'],
  Type: ['CV', 'BB', 'CA', 'DD'],
  Nation: ['cn', 'uk', 'de', 'jp', 'us'],
  Rarity: ['Common', 'Rare', 'Elite', 'Premium']
}

const Filter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Filters</span>
        <button className={styles.reset}>Reset All</button>
      </div>

      <div className={styles.sections}>
        {Object.entries(data).map(([title, options]) => (
          <FilterSection 
            key={title} 
            title={title} 
            items={options} 
          />
        ))}
      </div>

      <div className={styles.footer}>
        <label><input type="checkbox" /> Not compatible with my ships</label>
        <label><input type="checkbox" /> Available for selling</label>
        <span className={styles.sort}>Display order: by tier ↓</span>
      </div>
    </div>
  );
};

export default Filter
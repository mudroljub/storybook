import styles from './Filter.module.scss';
import FilterSection from '../FilterSection/FilterSection'

type Data = [string, string[]][];

const data: Data = [
  ['Tier', ['I','II','III','IV','V','VI','VII','VIII','IX','X','★']],
  ['Type', ['CV','BB','CA','DD']],
  ['Nation', ['cn','uk','es','de','jp','us','eu']],
  ['Rarity', ['Common','Rare','Elite','Premium']]
];

const Filter = () => {
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
        {data.map(([title, options]) => (
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

export default Filter
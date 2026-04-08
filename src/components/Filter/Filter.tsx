import styles from './Filter.module.scss';
import FilterSection from '../FilterSection/FilterSection'

export type FilterItem = {
  key: string
};
export type DataMap = Map<string, FilterItem[]>

const data: DataMap = new Map([
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
      { key: 'CV' }, { key: 'BB' }, { key: 'CA' }, { key: 'DD' }
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

export default Filter
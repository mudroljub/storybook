import React from 'react';
import styles from './Sections.module.scss';

interface FilterData {
  Tier: string[];
  Type: string[];
  Nation: string[];
  Rarity: string[];
}

const data: FilterData = {
  Tier: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', '★'],
  Type: ['CV', 'BB', 'CA', 'DD'],
  Nation: ['cn', 'uk', 'de', 'jp', 'us'],
  Rarity: ['Common', 'Rare', 'Elite', 'Premium']
};

interface SectionProps {
  title: string;
  items: string[];
}

const FilterSection: React.FC<SectionProps> = ({ title, items }) => {
  // Funkcija koja deli niz na delove od po 5 elemenata
  const chunkArray = (arr: string[], size: number): string[][] => {
    const chunks: string[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const columns = chunkArray(items, 5);

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

const Sections: React.FC = () => {
  return (
    <div className={styles.container}>
      {(Object.keys(data) as Array<keyof FilterData>).map((key) => (
        <FilterSection 
          key={key} 
          title={key} 
          items={data[key]} 
        />
      ))}
    </div>
  );
};

export default Sections;
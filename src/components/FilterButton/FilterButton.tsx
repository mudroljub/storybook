import cn from 'classnames';
import styles from './FilterButton.module.scss'
import { getFlag } from './utils';

interface FilterButtonProps {
  nations: string[];
  onClick: () => void;
  onClose: () => void;
  label?: string;
  isDisabled?: boolean;
}

const FilterButton = ({ nations = [], isDisabled = false, onClick, onClose, label }: FilterButtonProps) => {
  return (
    <div
      className={cn(styles.wrapper, { [styles.disabled]: isDisabled })}
      onClick={isDisabled ? undefined : onClick}
    >
      {nations.map(country => (
        <div
          key={country}
          className={styles.flag}
          style={{ backgroundImage: `url(${getFlag(country)})` }}
        />
      ))}

      {label && <span className={styles.label}>{label}</span>}

      <button className={styles.close} onClick={isDisabled ? undefined : onClose}>x</button>
    </div>
  )
}

export default FilterButton;
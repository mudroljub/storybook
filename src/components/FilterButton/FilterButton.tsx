import cn from 'classnames';
import flag from './flag.png'
import styles from './FilterButton.module.scss'

const getFlag = (country: string) => {
  return flag;
}

interface FilterButtonProps {
  countries: string[];
  onClick: () => void;
  onClose: () => void;
  label?: string;
  isDisabled?: boolean;
}

const FilterButton = ({ countries = [], isDisabled = false, onClick, onClose, label }: FilterButtonProps) => {
  return (
    <div
      className={cn(styles.wrapper, { [styles.disabled]: isDisabled })}
      onClick={isDisabled ? undefined : onClick}
    >
      {countries.map(country => <img src={getFlag('china')} className={styles.flag} key={country} alt={country} />)}

      {label && <span className={styles.label}>{label}</span>}

      <button className={styles.close} onClick={isDisabled ? undefined : onClose}>x</button>
    </div>
  )
}

export default FilterButton;
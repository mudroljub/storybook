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

const FilterButton = ({ countries = [], isDisabled = true, onClick, onClose, label }: FilterButtonProps) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {countries.map(country => <img src={getFlag('china')} className={styles.flag} alt="flag" />)}

      {label && <span className={styles.label}>{label}</span>}

      <button onClick={onClose}>x</button>
    </div>
  )
}

export default FilterButton;
import styles from './Animation.module.scss'

const Animation = ({ count = 10 }) => {
  return (
    <div className={styles.parent}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.span} />
      ))}
    </div>
  )
}

export default Animation
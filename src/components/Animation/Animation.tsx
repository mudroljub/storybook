import styles from './Animation.module.scss'

const Animation = ({ count = 10 }) => {
  return (
    <div className={styles.parent}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}
          className={styles.span}
          style={{
            animationDelay: `${Math.random() * 0.8}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Animation
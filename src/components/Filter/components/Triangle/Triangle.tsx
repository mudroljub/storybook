import React from 'react'
import styles from './Triangle.module.scss'

interface TriangleProps {
  isDown?: boolean
}

const Triangle = ({ isDown = false }: TriangleProps) => {
  /**
   * Paths are relative (0-100) to fill SCSS dimensions; 
   * 0.5 offsets prevent stroke clipping.
   */
  const upPath = "M50 0.5 L99.5 99.5 H0.5 Z"
  const downPath = "M50 99.5 L0.5 0.5 H99.5 Z"

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={styles.triangle}
      preserveAspectRatio="none"
    >
      <path 
        d={isDown ? downPath : upPath} 
        className={styles.path}
      />
    </svg>
  )
}

export default Triangle
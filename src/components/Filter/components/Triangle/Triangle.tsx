import React from 'react'
import styles from './Triangle.module.scss'

interface TriangleProps {
  isDown?: boolean
}

const Triangle: React.FC<TriangleProps> = ({ 
  isDown = false, 
}) => {
  const upPath = "M11 0.5 L21.5 11.5 H0.5 Z"
  const downPath = "M11 11.5 L0.5 0.5 H21.5 Z"

  return (
    <svg 
      viewBox="0 0 22 12" 
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
import React from 'react'
import classNames from 'classnames'
import styles from './Triangle.module.scss'

interface TriangleProps {
  isDown?: boolean
  className?: string
}

const Triangle: React.FC<TriangleProps> = ({
  isDown = false,
  className
}) => {
  const triangleClasses = classNames(
    styles.triangle,
    {
      [styles.down]: isDown,
      [styles.up]: !isDown
    },
    className
  )

  return <div className={triangleClasses} />
}

export default Triangle
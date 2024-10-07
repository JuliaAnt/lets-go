import React, { useEffect, useRef, useState } from 'react'
import styles from '../TravelerCard/TravelerCard.module.scss'

type LevelIconProps = {
  value: number
}

const LevelIcon: React.FC<LevelIconProps> = ({ value }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100)
  const pathRef = useRef<SVGCircleElement>(null)
  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
    }
  }, [])

  const strokeDashoffset = -(pathLength - (clampedValue / 100) * pathLength)

  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${styles.levelCircle} ${styles.rotatedSvg}`}
    >
      <circle
        ref={pathRef}
        cx='32'
        cy='32'
        r='30'
        stroke='auto'
        strokeWidth='3'
        strokeLinecap='round'
        strokeDasharray={pathLength}
        strokeDashoffset={strokeDashoffset}
        className={styles.circleProgress}
      />
    </svg>
  )
}

export default LevelIcon

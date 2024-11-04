"use client"

import useStore from '@/store/useStore';
import styles from './countButtons.module.css'

export default function countButtons() {

  const {increase, decrease} = useStore();

  return (
    <div className={styles.container}>
        <button className={styles.button} onClick={increase}>+</button>
        <button className={styles.button} onClick={decrease}>-</button>
    </div>
  )
}

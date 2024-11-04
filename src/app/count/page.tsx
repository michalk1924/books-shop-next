"use client"

import useStore from '@/store/userStore';
import styles from './count.module.css'

export default function Page() {

  const {count, increase, decrease} = useStore();

  return (
    <div className={styles.container}>
        <h2 className={styles.h2}>{count}</h2>
        <button className={styles.button} onClick={increase}>+</button>
        <button className={styles.button} onClick={decrease}>-</button>
    </div>
  )
}

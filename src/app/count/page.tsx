"use client"

import useStore from '@/store/useStore';
import styles from './count.module.css';
import CountButtons from '@/components/countButtons/page';

export default function Page() {

  const {count} = useStore();

  return (
    <div className={styles.container}>
        <h2 className={styles.h2}>{count}</h2>
        <CountButtons />
    </div>
  )
}

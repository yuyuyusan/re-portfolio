'use client';
import styles from './index.module.scss';
import useMail  from '@/app/_hooks/useMail';


export default function Mail() {
  const { setName, setMessage, send } = useMail();

  return (
    <div className={styles.contact}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <textarea onChange={(e) => setMessage(e.target.value)} />
      <button type="button" onClick={send}>Send</button>
    </div>
  );
}


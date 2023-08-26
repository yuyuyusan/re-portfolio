import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinnerBox}>
        <div className={styles.circleBorder}>
          <div className={styles.circleCore}></div>
        </div>
      </div>
    </div>
  );
}

import styles from './loading.module.scss';

export default function Loading() {
  const text = 'LOADING...';
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinnerBox}>
        <div className={styles.circleBorder}>
          <div className={styles.circleCore}></div>
        </div>
      </div>
      <div className={styles.textBox}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={styles.circleText}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </div>{' '}
    </div>
  );
}

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
import styles from './index.module.scss';

export function DashboardSkeleton() {
  return (
    <div key={styles.id} className={styles.cardItem}>
      <div className={styles.link}>
        <div className={styles.thumbnail}>
          <div className={styles.thumbnailImg}></div>
        </div>
      </div>
      <div className={styles.infoTop}></div>
      <div className={styles.url}></div>
    </div>
  );
}
export default function CardSkeleton() {
  return (
    <div className={styles.skeletonBox}>
      <DashboardSkeleton />
      <DashboardSkeleton />
      <DashboardSkeleton />
      <DashboardSkeleton />
      <DashboardSkeleton />
      <DashboardSkeleton />
    </div>
  );
}

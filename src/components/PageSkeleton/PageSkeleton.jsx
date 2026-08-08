import styles from './AboutPageSkeleton.module.css'

const AboutPageSkeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      {/* Hero Skeleton */}
      <div className={styles.heroSkeleton}>
        <div className={styles.skeletonTextHeading}></div>
        <div className={styles.skeletonTextSub}></div>
      </div>
      
      {/* Content Grid Skeleton */}
      <div className={`container-fluid-px ${styles.contentSkeleton}`}>
        <div className={styles.leftSkeleton}>
          <div className={styles.skeletonImg}></div>
        </div>
        <div className={styles.rightSkeleton}>
          <div className={styles.skeletonLabel}></div>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonPara}></div>
          <div className={styles.skeletonPara}></div>
          <div className={styles.skeletonBtnGroup}>
            <div className={styles.skeletonBtn}></div>
            <div className={styles.skeletonBtn}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutPageSkeleton

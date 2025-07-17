import styles from "./styles.module.css";
import arrowIcon from "../../assets/icons/arrow.svg?react";

function CategoryCard({ icon, title, isShowMore = false }) {
  const cardClasses = `${styles.card} ${isShowMore ? styles.showMore : ""}`;

  return (
    <div className={cardClasses}>
      {isShowMore ? (
        <img src={arrowIcon} alt="Больше категорий" className={styles.icon} />
      ) : (
        <img src={icon} alt={title} className={styles.icon} />
      )}
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default CategoryCard;

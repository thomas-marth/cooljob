import styles from "./styles.module.css";
import CategoryCard from "./../categoryCard/index";

import financeIcon from "../../assets/icons/union.svg";
import carIcon from "../../assets/icons/car.svg";
import designIcon from "../../assets/icons/design.svg";
import restaurantIcon from "../../assets/icons/restaurant.svg";
import medicineIcon from "../../assets/icons/medicine.svg";
import multimediaIcon from "../../assets/icons/multimedia.svg";
import chatIcon from "../../assets/icons/chat.svg";
import managementIcon from "../../assets/icons/management.svg";
import salesIcon from "../../assets/icons/sales.svg";

const categoriesData = [
  { id: 1, title: "Финансы", icon: financeIcon },
  { id: 2, title: "Грузоперевозки", icon: carIcon },
  { id: 3, title: "Дизайн", icon: designIcon },
  { id: 4, title: "Ресторанный бизнес", icon: restaurantIcon },
  { id: 5, title: "Медицина", icon: medicineIcon },
  { id: 6, title: "Мультимедиа", icon: multimediaIcon },
  { id: 7, title: "Служба поддержки", icon: chatIcon },
  { id: 8, title: "Менеджмент", icon: managementIcon },
  { id: 9, title: "Продажи", icon: salesIcon },
  { id: 10, title: "Больше категорий", isShowMore: true },
];

function CategoryCardList() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <h2 className={styles.title}>
          Работа <br />
          по категориям
        </h2>
        <div className={styles.list}>
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
              isShowMore={category.isShowMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryCardList;

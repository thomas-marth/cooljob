import styles from "./styles.module.css";
import searchIcon from "../../assets/icons/search.svg";
import locationIcon from "../../assets/icons/location.svg";

function SearchBar() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <h1 className={styles.heading}>
            Один клик <br /> и работа в кармане
          </h1>

          <form className={styles.searchForm}>
            <div className={styles.inputSection}>
              <label className={styles.inputWrapper}>
                <img src={searchIcon} className={styles.icon} alt="Search" />
                <input
                  name="search"
                  type="text"
                  placeholder="Должность или компания"
                  className={styles.inputField}
                />
              </label>

              <div className={styles.divider}></div>

              <label
                className={`${styles.inputWrapper} ${styles.centeredInput}`}
              >
                <img
                  src={locationIcon}
                  className={styles.icon}
                  alt="Location"
                />
                <input
                  name="location"
                  type="text"
                  placeholder="Город, Страна"
                  className={styles.inputField}
                />
              </label>
            </div>

            <button type="submit" className={styles.searchButton}>
              Поиск
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;

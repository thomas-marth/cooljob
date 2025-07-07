import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <a href="#" className={styles.logo}>
              Cooljob
            </a>
            <nav>
              <ul className={styles.menu}>
                <li>
                  <a href="#">Поиск работы</a>
                </li>
                <li>
                  <a href="#">Поиск стартапов</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.right}>
            <a href="#" className={styles.link}>
              Регистрация
            </a>
            <a href="#" className={styles.button}>
              Вход
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

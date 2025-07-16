import styles from "./styles.module.css";
import disneyLogo from "../../assets/images/disney.png";
import facebookLogo from "../../assets/images/facebook.png";
import microsoftLogo from "../../assets/images/microsoft.png";
import sonyLogo from "../../assets/images/sony.png";
import colaLogo from "../../assets/images/cola.png";

function Employers() {
  return (
    <section className={styles.employers}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <p className={styles.sectionDescription}>Помогаем найти работу:</p>
          <ul className={styles.logoList}>
            <li>
              <img src={disneyLogo} alt="Disney Logo" />
            </li>
            <li>
              <img src={facebookLogo} alt="Facebook Logo" />
            </li>
            <li>
              <img src={microsoftLogo} alt="Microsoft Logo" />
            </li>
            <li>
              <img src={sonyLogo} alt="Sony Logo" />
            </li>
            <li>
              <img src={colaLogo} alt="Coca-Cola Logo" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Employers;

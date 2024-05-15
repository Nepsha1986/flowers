import CitySelect from "./components/CitySelect";

import styles from "./styles.module.css";

const HomepageIntro = () => {
  return (
    <div className={styles.homepageIntro}>
      <p className={styles.homepageIntro__supTitle}>Send a little spring</p>
      <h1 className={styles.homepageIntro__title}>Flower Delivery</h1>
      <p className={styles.homepageIntro__description}>
        Birthday, anniversary or any reason at all - Handpick flowers are always
        a good idea and will make their day
      </p>

      <div className={styles.homepageIntro__searchBlock}>
        <CitySelect />
      </div>
    </div>
  );
};

export default HomepageIntro;

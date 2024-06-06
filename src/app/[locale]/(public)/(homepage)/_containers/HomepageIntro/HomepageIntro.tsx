import CitySelect from "./components/CitySelect";

import styles from "./styles.module.css";

interface Props {
  supTitle: string,
  title: string,
  description: string
}

const HomepageIntro = ({ title,supTitle, description }: Props) => {
  return (
    <div className={styles.homepageIntro}>
      <p className={styles.homepageIntro__supTitle}>{supTitle}</p>
      <h1 className={styles.homepageIntro__title}>{title}</h1>
      <p className={styles.homepageIntro__description}>{description}</p>

      <div className={styles.homepageIntro__searchBlock}>
        <CitySelect />
      </div>
    </div>
  );
};

export default HomepageIntro;

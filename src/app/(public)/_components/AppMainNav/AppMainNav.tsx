import styles from "./styles.module.css";
import { BarsOutlined } from "@ant-design/icons";
const AppMainNav = () => {
  return (
    <div data-testid="app_main_nav" className={styles.appMainNav}>
      <button className={styles.appMainNav__btn}>
        <BarsOutlined />
      </button>

      <nav className={styles.appMainNav__nav}></nav>
    </div>
  );
};

export default AppMainNav;

"use client";

import FooterNav from "./components/FooterNav";
import { useDictionary } from "@shared/i18n";

import styles from "./styles.module.css";

const AppFooter = () => {
  const { dictionary } = useDictionary();

  return (
    <div data-testid="app_footer" className={styles.appFooter}>
      <span>© 2024, GiftIdea. {dictionary.common.all_rights_reserved}.</span>
      <FooterNav />
    </div>
  );
};

export default AppFooter;

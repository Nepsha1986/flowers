import Link from "next/link";

import styles from "./styles.module.css";
import { useDictionary } from "@shared/i18n";

type AppLink = [string, string];

interface Props {
  links: AppLink[];
}
const FooterNav = () => {
  const { dictionary, locale } = useDictionary();

  const links = [
    [dictionary.common.about, `/${locale}/about`],
    [dictionary.common.contacts, `/${locale}/contacts`],
  ];

  return (
    <div data-testid="footer_nav" className={styles.footerNav}>
      {links.map((i) => (
        <Link key={i[0]} href={i[1]}>
          {i[0]}
        </Link>
      ))}
    </div>
  );
};

export default FooterNav;

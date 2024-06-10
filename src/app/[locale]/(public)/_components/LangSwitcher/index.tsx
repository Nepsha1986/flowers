import React from "react";
import classNames from "classnames";
import Icon, { GlobalOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Locale } from "@/lib/locales";

import styles from "./styles.module.css";

const locales: Record<
  Locale,
  {
    label: string;
  }
> = {
  "en-us": {
    label: "United States - English",
  },
  "ru-ua": {
    label: "Украина - Русский",
  },
  "uk-ua": {
    label: "Україна - Українська",
  },
};

interface Props {
  locale: Locale;
  direction?: "top" | "bottom";
}

const LangSwitcherItem: React.FC<{
  label: string;
  link: string;
  active?: boolean;
}> = ({ link, label, active = false }) => {
  const className = classNames(styles.langSwitcherItem, {
    [styles.langSwitcherItem_active]: active,
  });

  return (
    <Link href={link} className={className}>
      {active && (
        <span className={styles.langSwitcherItem__icon}>
          <GlobalOutlined />
        </span>
      )}
      <span className={styles.langSwitcherItem__label}>{label}</span>
    </Link>
  );
};

const LangSwitcher: React.FC<Props> = ({ locale, direction = "bottom" }) => {
  const classname = classNames(styles.langSwitcher, {
    [styles.langSwitcher_dropdownBootom]: direction === "bottom",
    [styles.langSwitcher_dropdownTop]: direction === "top",
  });

  return (
    <div className={classname}>
      <LangSwitcherItem
        active
        link={`/${locale}`}
        label={locales[locale].label}
      />

      <ul className={styles.langSwitcher__list}>
        {Object.keys(locales).map((i) => {
          if (i === locale) return null;

          return (
            <li key={i} className={styles.langSwitcher__item}>
              <LangSwitcherItem
                link={`/${i}`}
                label={locales[i as keyof typeof locales].label}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LangSwitcher;

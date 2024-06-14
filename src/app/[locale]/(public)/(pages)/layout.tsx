import { Locale } from "@shared/i18n/locales";

import SignIn from "@shared/containers/SignIn";
import AppLogo from "@shared/components/AppLogo";
import AppFooter from "@public/_components/AppFooter";
import LangSwitcher from "@public/_components/LangSwitcher";

import styles from "./layout.module.css";
export default function PublicPageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <div data-testid="public_layout" className={styles.layout__wrapper}>
      <header className={styles.layout__header}>
        <AppLogo href={`/${params.locale}`} />

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <LangSwitcher locale={params.locale} />
          <SignIn />
        </div>
      </header>

      <main className={styles.layout__main}>{children}</main>

      <footer className={styles.layout__footer}>
        <AppFooter />
      </footer>
    </div>
  );
}

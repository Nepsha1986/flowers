import AppLogo from "@/components/AppLogo";

import styles from "./layout.module.css";
import SignIn from "@/containers/SignIn";
import { Locale } from "@/lib/locales";
import LangSwitcher from "@/app/[locale]/(public)/_components/LangSwitcher";
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
        <span>© 2024, GiftIdea. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

import SignIn from "@/containers/SignIn/SignIn";
import AppLogo from "@/components/AppLogo";
import LangSwitcher from "@/app/[locale]/(public)/_components/LangSwitcher";
import { Locale } from "@/lib/locales";

import styles from "./layout.module.css";
import { getDictionary } from "@/app/[locale]/(public)/_i18n/getDictionary";

export default async function HomePageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const dict = await getDictionary(params.locale);

  return (
    <div data-testid="homepage_layout" className={styles.layout__wrapper}>
      <header className={styles.layout__header}>
        <AppLogo href={`/${params.locale}`} />

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <LangSwitcher locale={params.locale} />
          <SignIn />
        </div>
      </header>

      <main className={styles.layout__main}>{children}</main>

      <footer className={styles.layout__footer}>
        <span>© 2024, GiftIdea. {dict.common.all_rights_reserved}.</span>
      </footer>
    </div>
  );
}

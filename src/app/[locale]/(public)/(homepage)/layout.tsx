import SignIn from "@/containers/SignIn/SignIn";
import AppLogo from "@/app/[locale]/(public)/_components/AppLogo";

import styles from "./layout.module.css";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-testid="homepage_layout"
      className={styles.layout__wrapper}
      style={{ background: "no-repeat 95% center/40% url(./buaquete2.png)" }}
    >
      <header className={styles.layout__header}>
        <AppLogo />
        <SignIn />
      </header>

      <main className={styles.layout__main}>{children}</main>

      <footer className={styles.layout__footer}>
        <span>© 2024, GiftIdea. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

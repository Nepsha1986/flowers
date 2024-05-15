import AppLogo from "@/app/(public)/_components/AppLogo";
import AppMainNav from "@/app/(public)/_components/AppMainNav";

import styles from "./layout.module.css";
export default function PublicPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-testid="public_layout" className={styles.layout__wrapper}>
      <header className={styles.layout__header}>
        <AppLogo />
        <AppMainNav />
      </header>

      <main className={styles.layout__main}>{children}</main>

      <footer className={styles.layout__footer}>
        <span>© 2024, GiftIdea. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

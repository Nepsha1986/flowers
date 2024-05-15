import SignIn from "@/containers/SignIn/SignIn";
import AppLogo from "@/app/(public)/_components/AppLogo";
import AppMainNav from "@/app/(public)/_components/AppMainNav";

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
        <AppMainNav />
      </header>

      <main className={styles.layout__main}>{children}</main>

      <footer className={styles.layout__footer}>
        <span>© 2024, GiftIdea. All Rights Reserved.</span>
        <span>
          <SignIn />
        </span>
      </footer>
    </div>
  );
}

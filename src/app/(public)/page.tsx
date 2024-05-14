import styles from "./styles.module.css";

import AppLogo from "@/app/(public)/_components/AppLogo";
import AppMainNav from "@/app/(public)/_components/AppMainNav";
import HomepageIntro from "@/app/(public)/_components/HomepageIntro";
import SignIn from "@/containers/SignIn";

export default function Home() {
  return (
    <div
      data-testid="public_layout"
      className={styles.layout__wrapper}
      style={{ background: "no-repeat 95% center/40% url(./buaquete2.png)" }}
    >
      <header className={styles.layout__header}>
        <AppLogo />
        <AppMainNav />
      </header>

      <main className={styles.layout__main}>
        <HomepageIntro />
      </main>

      <footer className={styles.layout__footer}>
        <span>© 2024, GiftIdea. All Rights Reserved.</span>
        <span>
          <SignIn />
        </span>
      </footer>
    </div>
  );
}

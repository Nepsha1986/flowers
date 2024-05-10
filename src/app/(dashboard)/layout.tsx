import Navigation from "@/app/(dashboard)/_containers/Navigation";
import SignIn from "@/containers/SignIn/SignIn";

import styles from "./layout.module.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-testid="dashboard_layout" className={styles.layout__wrapper}>
      <header className={styles.layout__header}>
        <SignIn />
      </header>

      <aside className={styles.layout__sidebar}>
        <Navigation />
      </aside>

      <main className={styles.layout__main}>{children}</main>
    </div>
  );
}
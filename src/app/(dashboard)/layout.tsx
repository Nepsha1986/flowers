import styles from "./layout.module.css";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-testid="dashboard_layout" className={styles.layout__wrapper}>
      <header className={styles.layout__header}>
        <h1>Dashboard</h1>
      </header>

      <aside className={styles.layout__sidebar}></aside>

      <main className={styles.layout__main}>{children}</main>
    </div>
  );
}

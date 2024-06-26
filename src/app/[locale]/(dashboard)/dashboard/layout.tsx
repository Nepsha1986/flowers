import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Navigation from "@/app/[locale]/(dashboard)/_containers/Navigation";
import SignIn from "@shared/containers/SignIn/SignIn";
import AppLogo from "@shared/components/AppLogo";

import styles from "./layout.module.css";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-testid="dashboard_layout" className={styles.layout__wrapper}>
      <header className={styles.layout__header}>
        <AppLogo href="/" />
        <SignIn />
      </header>

      <aside className={styles.layout__sidebar}>
        <Navigation />
      </aside>

      <main className={styles.layout__main}>{children}</main>
    </div>
  );
}

// @ts-ignore
export default withPageAuthRequired(DashboardLayout, {
  returnTo: "/dashboard",
});

import styles from "./styles.module.css";
interface Props {
  heading: string;
  subheading: React.ReactNode | string;
  children: React.ReactNode;
}
const Section = ({ heading, subheading, children }: Props) => {
  return (
    <section>
      <div className={styles.section__container}>
        <header className={styles.section__header}>
          <h1 className={styles.section__heading}>{heading}</h1>

          <div className={styles.section__subheading}>
            {typeof subheading === "string" ? <p>{subheading}</p> : subheading}
          </div>
        </header>

        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;

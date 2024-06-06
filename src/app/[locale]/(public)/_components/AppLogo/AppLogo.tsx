import Link from "next/link";

const AppLogo = () => {
  return (
    <Link
      href="/"
      style={{
        margin: 0,
        letterSpacing: "0.15em",
        fontWeight: 400,
        fontSize: "1.5rem",
      }}
    >
      FLOWERS
    </Link>
  );
};

export default AppLogo;

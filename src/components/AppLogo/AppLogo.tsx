import Link from "next/link";

interface Props {
  href: string;
}
const AppLogo = ({ href }: Props) => (
  <Link
    href={href}
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

export default AppLogo;

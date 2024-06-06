import Link from "next/link";
import { cities } from "@/lib/cities";

const CitiesLinks = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            flexFlow: "row wrap",
            gap: "5px",
            margin: "1rem 0",
            padding: "0",
          }}
        >
          {cities.ua.map((i) => (
            <li key={i} style={{ listStyle: "none" }}>
              <Link
                style={{
                  padding: "10px",
                  background: "var(--c-gray-200)",
                  display: "block",
                }}
                href={`/${i}`}
              >
                {i}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CitiesLinks;

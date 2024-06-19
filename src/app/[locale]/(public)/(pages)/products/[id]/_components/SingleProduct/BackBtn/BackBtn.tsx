import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons/lib/icons";

const BackBtn = ({ url, text }: { url: string; text: string }) => {
  return (
    <Link
      href={url}
      style={{
        marginBottom: "1rem",
        display: "inline-block",
        fontSize: "1.25rem",
      }}
    >
      <ArrowLeftOutlined />
      <span style={{ marginLeft: "10px" }}>{text}</span>
    </Link>
  );
};

export default BackBtn;

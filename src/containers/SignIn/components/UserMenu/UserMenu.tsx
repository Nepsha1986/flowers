"use client";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, MenuProps } from "antd";
import { usePathname } from "next/navigation";

const getMenuItems = (curPath: string): MenuProps["items"] => {
  return [
    {
      key: "1",
      label: !curPath.includes("/dashboard") ? (
        <Link href="/dashboard">Dashboard</Link>
      ) : (
        <Link href="/">Homepage</Link>
      ),
    },
    {
      key: "2",
      label: <a href="/api/auth/logout">Logout</a>,
    },
  ];
};

interface Props {
  imgSrc: string;
}

const UserMenu: React.FC<Props> = ({ imgSrc }) => {
  const currentPath = usePathname();
  const items = getMenuItems(currentPath);

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
      <a
        style={{
          display: "inline-block",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={(e) => e.preventDefault()}
      >
        <img style={{ width: "100%" }} src={imgSrc} alt="user" />
      </a>
    </Dropdown>
  );
};

export default UserMenu;

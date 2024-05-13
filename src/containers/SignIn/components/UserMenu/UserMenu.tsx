"use client";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
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
  userName: string;
}

const UserMenu: React.FC<Props> = ({ userName }) => {
  const currentPath = usePathname();
  const items = getMenuItems(currentPath);

  return (
    <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <UserOutlined /> {userName}
      </a>
    </Dropdown>
  );
};

export default UserMenu;

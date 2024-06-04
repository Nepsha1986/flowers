"use client";

import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "grp",
    type: "group",
    children: [
      {
        key: "13",
        label: <Link href="/dashboard/my-listings">My Listings</Link>,
      },
      {
        key: "14",
        label: <Link href="/dashboard/my-profile">My Profile</Link>,
      },
    ],
  },
];

const Navigation: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return <Menu onClick={onClick} mode="inline" items={items} />;
};

export default Navigation;

"use client";

import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

import { useDictionary } from "@shared/i18n";

type MenuItem = Required<MenuProps>["items"][number];

const Navigation: React.FC = () => {
  const { locale, dictionary } = useDictionary();
  const dict = dictionary.dashboard.containers.navigation;

  const items: MenuItem[] = [
    {
      key: "grp",
      type: "group",
      children: [
        {
          key: "13",
          label: (
            <Link href={`/${locale}/dashboard/my-listings`}>
              {dict.my_listings}
            </Link>
          ),
        },
        {
          key: "14",
          label: (
            <Link href={`/${locale}/dashboard/my-profile`}>
              {dict.my_profile}
            </Link>
          ),
        },
      ],
    },
  ];

  return <Menu mode="inline" items={items} />;
};

export default Navigation;

"use client";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, MenuProps } from "antd";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/app/[locale]/_providers/LocaleProvider";

interface Props {
  imgSrc: string;
}

const UserMenu: React.FC<Props> = ({ imgSrc }) => {
  const { dictionary, locale } = useDictionary();
  const currentPath = usePathname();

  const getMenuItems = (curPath: string): MenuProps["items"] => {
    return [
      {
        key: "1",
        label: !curPath.includes("/dashboard") ? (
          <Link href={`/${locale}/dashboard/my-listings`}>
            {dictionary.common.dashboard}
          </Link>
        ) : (
          <Link href={`/${locale}`}>{dictionary.common.homepage}</Link>
        ),
      },
      {
        key: "2",
        label: <a href="/api/auth/logout">{dictionary.common.logout}</a>,
      },
    ];
  };

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

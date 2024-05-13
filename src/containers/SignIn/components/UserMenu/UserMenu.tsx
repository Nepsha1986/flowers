"use client";

import { UserOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="/api/auth/logout">Logout</a>,
  },
];

interface Props {
  userName: string;
}

const UserMenu: React.FC<Props> = ({ userName }) => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <UserOutlined /> {userName}
        </Space>
      </a>
    </Dropdown>
  );
};

export default UserMenu;

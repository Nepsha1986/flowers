import { ConfigProvider, ThemeConfig } from "antd";

import "../globals.css";

const config: ThemeConfig = {
  token: {
    colorPrimary: "#eec902",
    controlHeight: 45,
  },
  components: {
    Card: {
      headerFontSize: 22,
    },
    Button: {
      borderRadius: 50,
      borderRadiusLG: 50,
      fontSizeLG: 18,
    },
    Select: {
      borderRadius: 50,
      controlHeight: 45,
    },
  },
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider theme={config}>{children}</ConfigProvider>;
}

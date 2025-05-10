import type {ThemeConfig} from "antd";

const primaryColor: string = "#1a73e8";
const secondaryColor: string = "#c3c0c0";

export const customTheme: ThemeConfig = {
  token: {
    colorText: "#f4f3f3",
    colorPrimary: primaryColor,
    colorTextSecondary: secondaryColor
  },
  components: {
    Typography: {
        colorTextHeading: primaryColor,
        colorLink: primaryColor
    },
    Collapse: {
      colorTextHeading: primaryColor
    },
    Tag: {
      colorTextSecondary: secondaryColor
    }
  },
};
export interface Breakpoint {
  mobile: string;
  mobileMedium: string;
  pad: string;
  desktop: string;
}

interface ThemeType {
  breakpoints: Breakpoint;
  [key: string]: any;
}

const theme: ThemeType = {
  grid: {},
  border: {},
  font: {
    family: "Inter",
    sizes: {},
  },
  colors: {
    white: "#FFFFFF",
    lightRed: "#FDEBFF",
    mediumRed: "#F2A9C3",
    red: "#FF6B6F",
    lightGreen: "#D1FFDB",
    mediumGreen: "#8CE0BE",
    green: "#00DA93",
    darkGreen: "#025B37",
    lightOrange: "#FFD5BF",
    mediumOrange: "#FF9661",
    orange: "#FA7203",
    darkOrange: "#AF5333",
    lightYellow: "#F0E8C2",
    mediumYellow: "#FFEB7A",
    darkYellow: "#775B33",
    yellow: "#FFCE00",
    lightGray: "#F2F2F0",
    mediumGray: "#D4CEC3",
    gray: "#867F70",
    darkGray: "#28241C",

    lightShadow: "rgba(24, 86, 105, 0.15)",
    darkShadow: "rgba(40, 36, 28, 0.15)",
  },
  spacings: {},
  breakpoints: {
    mobile: "0px",
    mobileMedium: "374px",
    pad: "600px",
    desktop: "1024px",
  },
};

export default theme;

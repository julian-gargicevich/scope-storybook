/** @type {import('tailwindcss').Config} */
import tailwindColors from "tailwindcss/colors";

// Done to remove tailwind eslint warnings, these colos are depreacted
delete tailwindColors["lightBlue"];
delete tailwindColors["warmGray"];
delete tailwindColors["trueGray"];
delete tailwindColors["coolGray"];
delete tailwindColors["blueGray"];

export const customColors = {
  primary: "#006AB3",
  success: "#78be21",
  industrial: "#e39b30",
  office: "#53a8c9",
  retail: "#d14e4e",
  longWaleRetail: "#624d9e",
  shoppingCentreRetail: "#d14e4e",
  socialInfrastructure: "#00aa80",
  living: "#e1e100",
  diversified: "#62b180",
};

export const colors = {
  ...tailwindColors,
  ...customColors,
};

export const content = ["./src/**/*.{js,ts,jsx,tsx,html}"];

export const theme = {
  extend: {
    colors,
    fontFamily: { sans: ['"DM Sans"', "sans-serif"] },
  },
};

export const corePlugins = {};

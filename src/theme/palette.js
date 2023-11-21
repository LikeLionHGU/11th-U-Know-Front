import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const LAYOUT = {
  black: "#000000",
  white: "#FFFFFF",
  grey1: "#F9F9FA",
  grey2: "#ECEEF0",
  grey3: "#DEE1E5",
  grey4: "#BFC4CD",
  grey5: "#ACB3BE",
  grey6: "#8E8A83",
  grey7: "#99A0AD",
  grey8: "#838A94",
  grey9: "#676C75",
  grey10: "#3C3F44",
};

const BACKGROUND = {
  grey1: "#F5F7FA",
  grey2: "#EEF1F6",
  grey3: "#E5EAF2",
  grey4: "#A5AFC0",
  grey5: "#94A1B7",
  grey6: "#3D495C",
  grey7: "#333D4C",
};
const PRIMARY = {
  main: "#5592FC",
  secondary: "#F2F7FF",
  shadow: "#C2DCFF",
  pale: "#9EC8FF",
  light: "#6FA4FF",
  dark: "#416AD7",

  border: "#B2D7FF",
  lighter: "#F2F8FF",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#00AB55",
  dark: "#007B55",
  darker: "#005249",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#00E676",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#fff",
  default: "#00A865",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
  default: "#FFEA00",
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
  default: "#FF5347",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  background: BACKGROUND,
  layout: LAYOUT,
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      header: GREY[600],
      disabled: GREY[500],
    },
    background: {
      // default: "#F9FAFB"
      default: "#FFFFFF",
      sidebar: "#FCFCFD",
      paper: "#fff",
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    primary: {
      main: "#1565c0",
      border: "#265D97",
      // light: "#E4F1FF",
      light: "#F2F8FF",
      lighter: "#132F4C",
      // lighter: "#F2F8FF",
      dark: "#1565c0",
      contrastText: "#fff",
      // light: "#FFFFFF",
    },
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: "white",
      header: "#B2BAC2",
      disabled: GREY[600],
    },
    background: {
      // default: "#1F2937",
      default: "#0A1929",
      sidebar: "#0A1929",
      paper: "#374251",
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === "light" ? light : dark;
}

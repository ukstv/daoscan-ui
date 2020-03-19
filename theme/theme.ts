import { PulseAnimation } from "../components/placeholders/pulse.animation";
import { BORDER_SIZES } from "./border-sizes";
import { BREAKPOINTS } from "./breakpoints";
import { COLORS } from "./colors";
import { PALETTE } from "./palette";
import { BORDERS } from "./borders";
import { FONT_WEIGHT } from "./font-weight";

export const THEME = {
  borderWidths: BORDER_SIZES,
  breakpoints: BREAKPOINTS,
  colors: {
    ...COLORS,
    ...PALETTE
  },
  fonts: {
    sans:
      'Lato,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    body:
      'Lato,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: "Oswald, Open Sans, sans-serif",
    monospace: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    logo: "Oswald, Open Sans, sans-serif"
  },
  fontSizes: ["0.875rem", "1rem", "1.25rem", "1.5rem", "1.875rem", "2.25rem", "3rem", "4rem", "4.5rem"],
  fontWeights: FONT_WEIGHT,
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    body: "1.625",
    heading: "1.25"
  },
  sizes: {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "9": "2.2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    px: "1px",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screenHeight: "100vh",
    screenWidth: "100vw"
  },
  borders: {
    bevel: BORDERS.bevel
  },
  shadows: {
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: "none"
  },
  space: [0, "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem", "16rem", "32rem"],
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    lg: "0.5rem",
    full: "9999px"
  },
  zIndices: {
    "0": "0",
    "10": "10",
    "20": "20",
    "30": "30",
    "40": "40",
    "50": "50",
    auto: "auto"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    a: {
      color: "primary",
      textDecoration: "underline",
      ":hover": {
        color: "primaryHover"
      }
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      color: "gray.8",
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 2,
      "& > a": {
        color: "gray.8",
        textDecoration: "none"
      }
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 5,
      mt: 2
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 4,
      mt: 3
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 3
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 2
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      fontSize: 1,
      mb: 2
    },
    code: {},
    pre: {},
    hr: {
      bg: "muted",
      border: 0,
      height: "1px",
      m: 3
    },
    table: {
      width: "100%",
      marginBottom: "1rem",
      borderCollapse: "collapse"
    },
    "table thead th": {
      verticalAlign: "bottom",
      borderBottomColor: "gray.4",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px"
    },
    td: {
      padding: "0.75rem",
      verticalAlign: "top",
      borderTopColor: "gray.4",
      borderTopStyle: "solid",
      borderTopWidth: "1px"
    }
  },
  buttons: {
    simple: {
      py: 2,
      px: 3,
      cursor: "pointer",
      fontSize: "100%",
      lineHeight: "inherit",
      backgroundColor: "primary",
      border: "none",
      color: "white",
      fontWeight: "bold",
      borderRadius: "default",
      "&:hover": {
        backgroundColor: "primaryHover"
      }
    },
    pill: {
      py: 2,
      px: 3,
      cursor: "pointer",
      fontSize: "100%",
      lineHeight: "inherit",
      backgroundColor: "primary",
      border: "none",
      color: "white",
      fontWeight: "bold",
      borderRadius: "full",
      "&:hover": {
        backgroundColor: "primaryHover"
      }
    },
    outline: {
      py: 2,
      px: 3,
      cursor: "pointer",
      fontSize: "100%",
      lineHeight: "inherit",
      backgroundColor: "transparent",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "primary",
      color: "primary",
      fontWeight: "semibold",
      borderRadius: "default",
      "&:hover": {
        backgroundColor: "primary",
        color: "white",
        borderColor: "transparent"
      }
    },
    bordered: {
      py: 2,
      px: 3,
      cursor: "pointer",
      fontSize: "100%",
      lineHeight: "inherit",
      backgroundColor: "primary",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "primaryHover",
      color: "white",
      fontWeight: "bold",
      borderRadius: "default",
      "&:hover": {
        backgroundColor: "primaryHover"
      }
    },
    disabled: {
      py: 2,
      px: 3,
      fontSize: "100%",
      lineHeight: "inherit",
      backgroundColor: "primary",
      border: "none",
      opacity: 0.5,
      cursor: "not-allowed",
      color: "white",
      fontWeight: "bold",
      borderRadius: "default"
    },
    "3D": {
      py: 2,
      px: 3,
      cursor: "pointer",
      fontSize: "100%",
      lineHeight: "inherit",
      backgroundColor: "primary",
      border: "none",
      borderBottomWidth: "4px",
      borderBottomStyle: "solid",
      borderBottomColor: "primaryHover",
      color: "white",
      fontWeight: "bold",
      borderRadius: "default",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "translateY(-1px)"
      }
    },
    elevated: {
      py: 2,
      px: 3,
      cursor: "pointer",
      fontSize: "100%",
      lineHeight: "inherit",
      backgroundColor: "white",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "gray.4",
      color: "text",
      fontWeight: "bold",
      borderRadius: "default",
      boxShadow: "default",
      "&:hover": {
        backgroundColor: "gray.1"
      }
    }
  },
  inputs: {
    shadow: {
      py: 2,
      px: 3,
      fontSize: "100%",
      borderRadius: "default",
      appearance: "none",
      lineHeight: "tight",
      border: "none",
      color: "gray.7",
      boxShadow: "default",
      "&:focus": {
        outline: "none",
        boxShadow: "outline"
      }
    },
    inline: {
      py: 2,
      px: 3,
      fontSize: "100%",
      borderRadius: "default",
      appearance: "none",
      lineHeight: "tight",
      backgroundColor: "gray.2",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "gray.2",
      color: "gray.7",
      "&:focus": {
        outline: "none",
        borderColor: "primary",
        backgroundColor: "white"
      }
    },
    underline: {
      py: 2,
      px: 3,
      fontSize: "100%",
      appearance: "none",
      lineHeight: "tight",
      backgroundColor: "transparent",
      border: "none",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
      borderBottomColor: "primary",
      borderRadius: "0px",
      color: "gray.7",
      "&:focus": {
        outline: "none",
        borderColor: "primary",
        backgroundColor: "white"
      }
    }
  },
  images: {
    social: {
      width: 8,
      height: 8
    },
    avatar: {
      borderRadius: "50%"
    }
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 2,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)"
    },
    proposal: {
      padding: 2,
      borderRadius: 0,
      boxShadow: "none",
      borderBottom: "bevel"
    }
  },
  grids: {
    organisations: {
      details: {
        gridTemplateColumns: "20rem max-content max-content",
        fontSize: "smaller",
        gridAutoFlow: "column",
        overflow: "none"
      }
    }
  },
  variants: {
    round: {
      borderRadius: "50%",
      overflow: "hidden",
      padding: 0,
      margin: 0,
      width: "100%",
      height: "100%",
      display: "inline-block",
      backgroundColor: "placeholder"
    },
    organisations: {
      avatar: {
        width: "3rem",
        height: "3rem",
        minWidth: "3rem",
        marginRight: 2
      },
      item: {
        borderBottom: "bevel",
        padding: 2
      },
      address: {
        fontFamily: "mono",
        wordWrap: "unset",
        fontSize: "smaller",
        paddingRight: 2,
        display: "inline-block"
      },
      inline: {
        whiteSpace: "nowrap",
        fontSize: "smaller",
        paddingRight: 2,
        display: "inline-block"
      },
      openAction: {
        minWidth: "4rem",
        marginTop: -2,
        marginRight: -2,
        marginBottom: -2,
        borderLeft: "bevel",
        "&>a": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "4rem",
          fontSize: "x-large",
          textAlign: "center",
          textDecoration: "none",
          height: "100%",
          padding: 2
        },
        "&>a>span": {
          display: "none"
        },
        "&:hover>a": {
          backgroundColor: "primaryHover",
          color: "white"
        },
        "&:hover>a>span": {
          display: [null, "block"],
          fontSize: 1,
          marginRight: 1
        }
      }
    },
    heading: {
      borderBottom: "bevel",
      paddingLeft: 2
    },
    description: {
      backgroundColor: "blue.7",
      padding: 2,
      color: "white.7",
      borderBottom: "bevel"
    },
    participant: {
      avatar: {
        width: "3.5rem",
        height: "3.5rem",
        marginRight: "1rem"
      },
      name: {
        fontSize: "larger",
        fontWeight: "bolder"
      },
      address: {
        fontSize: "smaller",
        fontFamily: "mono"
      }
    },
    pager: {
      bottom: {
        borderBottom: "bevel",
        marginBottom: "-1px"
      },
      pageNumber: {
        flex: "1 1 auto",
        padding: 2,
        textAlign: "center",
        borderLeft: "bevel",
        borderRight: "bevel"
      }
    }
  },
  links: {
    pageNav: {
      padding: 2,
      fontWeight: "normal",
      borderRight: "bevel",
      "&:hover": {
        color: "text",
        bg: "yellow.6"
      },
      "&.active": {
        color: "white",
        backgroundColor: "yellow.7"
      },
      "&:hover.active": {
        color: "white",
        backgroundColor: "yellow.6"
      }
    },
    pager: {
      arrow: {
        display: "block",
        textDecoration: "none",
        padding: 2,
        minWidth: "4rem",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "green.7",
        color: "white",
        "&:hover": {
          backgroundColor: "green.6",
          color: "white"
        },
        "&:focus": {
          backgroundColor: "green.7",
          color: "white"
        },
        disabled: {
          padding: 2,
          minWidth: "4rem",
          textAlign: "center",
          color: "white",
          backgroundColor: "muted",
          display: "block",
          textDecoration: "none",
          "&:hover": {
            color: "white",
            backgroundColor: "muted"
          }
        }
      }
    }
  }
};

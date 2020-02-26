import Typography from "typography"
const typography = new Typography({
  baseFontSize: "32px",
  baseLineHeight: 1.4,
  headerWeight: 700,
  headerGray: 10,
  bodyWeight: 400,
  boldWeight: 700,
  bodyGray: 20,
  scaleRatio: 2.6,
  headerFontFamily: [
    "Cairo",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", "Georgia", "serif"],
  googleFonts: [
    {
      name: "Cairo",
      styles: ["700"],
      display: "swap",
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i"],
      display: "swap",
    },
  ],
})
export default typography

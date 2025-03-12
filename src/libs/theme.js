import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Playfair Display", "PT Serif", serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Playfair Display", "PT Serif", serif',
        },
      },
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";
import { deepPurple, blue } from "@mui/material/colors";
import PoppinsTtf from "../../assets/fonts/Poppins-Regular.ttf";

export const appTheme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: blue,
  },
  typography: {
    fontFamily: "Poppins, serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Poppins'), local('Poppins-Regular'), url(${PoppinsTtf}) format('ttf');       
            }
        `,
    },
  },
});

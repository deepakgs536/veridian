import { createTheme } from "@mui/material";
// import '@fontsource/poppins';
// import '@fontsource/poppins/600.css';
const lightTheme = createTheme({
    typography: {
      // fontFamily: "Poppins",
      // fontSize: 12.25, //Don't Change this, as it have the default font size as 14 or 0.875rem by default
    },
    palette: {
      text: {
        primary: "#091B29",
        secondary: "#51585E",
        tertiary:'#717B85',
        line1 : "#A9AFBC",
        line2 : "#CACFDB",
        
      },
      background : {
        bg1 : "#EDEFF2",
        bg2 : "#F2F4F7",
        bg3 : "#F5F7FA",
        white : "#FFFFFF",
        black : "#000000",
      },
      primary: {
        main: "#009065",
        dark: "#006547",
        light:"#D9EFE9",
        aboutusShadow:"",
      },
      secondary: {
        main: "#DFD328",
        light: "#EFE992",
        dark: "#666114",
      },
      
    },
    
  });
  
  export default lightTheme;
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme(); // Access the custom theme

  return {
    company: {
        color: '#FFFFFF',
        fontSize: '12px',
        fontFamily: theme.typography.fontFamilySecondary,
        letterSpacing: '0.1em', 
        alignItems:'center',
        backgroundColor: '#f9c300', // Corrected property name
        paddingX:'5px',
        '@media (max-width: 600px)': { // Styles for mobile view
            fontSize: "12px", // Smaller font for mobile screens
        },
    },
    boxStyle : {
        width: "auto", // Full width of the container
        display: "flex", // Using flexbox layout
        rowGap: '10px',
        flexDirection: "column", // Stack items vertically
        justifyContent: "center", // Center items vertically
        alignItems: "center", // Center items horizontally
        position: "relative", // Position relative to allow child elements like images or shadows to use absolute positioning
        zIndex: 5, // Layering order, makes sure this box appears above lower z-index elements
        backgroundColor: "transparent", // Ensures the background remains transparent
        textAlign: "center",
        height:'50vh',
        maxHeight:{xs:'300px',md:'550px'},
        paddingX:'5%',
      },
      quotes : {
            fontFamily: theme.typography.fontFamily,
            fontWeight: 600,
            fontSize: {xs:"32px",md:"48px"},
            lineHeight: "28px",
            color: "#FFFFFF", // Neutral color for supporting text
            marginBottom: "24px",
            lineHeight: "1", // Line height set to 1.5 for more space between text lines
      },
      knowMore : {
        display: "flex",
        flexDirection: "row",
        gap :"5px" ,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#006547",
        padding: "16px 24px",
        borderRadius: "4px",
        cursor: "pointer",
        color:'#FFFFFF',
        fontSize:'18px',
        "&:hover": {
          backgroundColor: "rgba(0, 101, 71,0.7)", // The last value (0.5) controls the opacity
        },
        '@media (max-width: 600px)': { // Styles for mobile view
            fontSize: "18px", // Smaller font for mobile screens
            padding:'6px 15px',
        },
      },
      knowMoreText:{
        fontFamily: theme.typography.fontFamilySecondary,
        fontWeight:'600',
      }
  
  };
};

export default useStyles;


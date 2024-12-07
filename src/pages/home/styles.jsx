import zIndex from "@mui/material/styles/zIndex";

export const Styles = {
    company: {
        color: '#FFFFFF',
        fontSize: '12px',
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
        maxHeight:{xs:'300px',md:'540px'},
        paddingX:'5%',
      },
      quotes : {
        fontFamily: "DM Sans, sans-serif",
            fontWeight: 400,
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
        padding: "12px 20px",
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
      }

};

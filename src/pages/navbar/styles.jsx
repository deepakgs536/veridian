import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme(); // Access the custom theme

  return {
    mainContainer : {
        width: '98.72vw',  // Width 98.8% of the viewport width
        paddingX: '5%',  // Horizontal padding
        display:'flex',
        flexDirection: 'column', // Arrange children vertically
        alignItems: 'center', // Center content horizontally
        fontFamily:'IBM Plex Serif',
        backgroundColor:'#FFFFFF',
        color:'#000000'
      },
    contentSection : { 
        width: '100%',
        alignSelf:'center',         
        maxWidth: '1440px',  
    },
    logoStyle : { 
        maxWidth: '100px', 
        height: 'auto' ,
    },
    menuIconStyle  : { 
        display: { xs: 'block', md: 'none' }, 
        flex: 1, 
        textAlign: 'right' ,
    },
    headerStyle : {
        fontSize:{xs:'26px',md:'32px'},
        fontWeight:'600',
        paddingBottom:{xs:'5px',md:'15px'},
        paddingTop:{xs:'10px',md:'20px'}
    },
    appBar : { 
        backgroundColor: theme.palette.background.white, 
        boxShadow: 0,
        position:"sticky" ,
        top: 0, // Ensures stickiness starts at the top
        zIndex: 1100, // Ensure it appears above other elements
    },
    tabListMd : {
        position: 'sticky', // Sticky tabs
        top: 0,
        zIndex: 1100,
        backgroundColor: theme.palette.background.white,
        display: 'flex',
        justifyContent: 'center',
        '& .MuiTab-root': {
          color:theme.palette.text.secondary,
          outline: 'none',
          fontSize: '18px',
          fontWeight:500,
          marginX: '5px',
          textTransform: 'none',
        },
        '& .MuiTab-root.Mui-selected': { color: theme.palette.primary.main },
        '& .MuiTabs-indicator': {
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.palette.primary.main,
          height:'4px',
        },
        
    },
    drawerIcon : {
        color: theme.palette.background.black,
        outline: 'none',
        border: 'none',
        '&:focus': { outline: 'none' },
        '&:active': { outline: 'none' },
    },
    tabListXs : {
        position: 'sticky', 
        top: 0,
        zIndex: 1100,
        backgroundColor: theme.palette.background.white,
        '& .MuiTab-root': {
          textAlign: 'center',
          padding: '12px 15px',
          fontSize: '18px',
          fontWeight:500,
          textTransform: 'none',
          justifyContent: 'center',
        },
        '& .MuiTab-root.Mui-selected': { color: theme.palette.primary.main },
        '& .MuiTabs-indicator': { display: 'none' },
    },
    drawerTabs : {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'center',
        padding: '0px',
        backgroundColor: theme.palette.background.white,
    },
    alignTabs : {
        alignItems: 'start',
    },
    home : {
        position: 'relative',
        width: '100%',
        height: { xs: '60vh', md: '60vh' },
        backgroundColor: theme.palette.primary.main, 
        overflow: 'hidden',
        marginY:{xs:'0',md:'auto'},
        display:'flex',
        alignItems:'center',
    },
    drawerContainer : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px',
        borderBottom: `1px solid ${theme.palette.text.line2}`,
        backgroundColor: 'transparent',
    },
};
};

export default useStyles;



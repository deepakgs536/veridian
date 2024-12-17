import { alpha, useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme(); // Access the custom theme

  return {
    mainContainer : {
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        color: theme.palette.background.white,
        width: '100%',
        overflow: 'hidden',
        paddingY: '5%',
    },
    mailToStack : { 
        justifySelf: 'center',
        marginRight:{xs:'6%',md:'0%'}, 
        whiteSpace: 'nowrap', 
    },
    mailToContainer : {
        backgroundColor: alpha(theme.palette.primary.dark,0.7),
        padding: {xs:'2% 2%',md:'10px 20px'},
        alignItems: 'center', 
        cursor: 'pointer', 
        fontFamily:theme.typography.fontFamilySecondary,
        fontWeight:'600',
    },
    mailToText :{
        backgroundColor: '#f9c300',
        color: theme.palette.background.black,
        fontSize: '12px',
        padding: '3px 11px',
        display: 'flex', // Add flex to align text
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
    },
    mailText : { 
        display: 'flex', 
        alignItems: 'center',
        fontSize:{xs:'14px',md:'16px'},
        fontWeight:'600',
        fontFamily:theme.typography.fontFamilySecondary 
    },
    sendIcon : {
        color: theme.palette.background.white,
        width: '10%',
        height: 'auto',
        display: 'flex', // Use flexbox
        alignItems: 'center', // Vertically center the icon
        justifyContent: 'center', // Horizontally center the icon
        backgroundColor: theme.palette.primary.dark , // Original background color with full opacity
        paddingX: {xs:'6%',md:'25px'},
        '&:hover': {
          backgroundColor: theme.palette.primary.dark , // Reduce background opacity to 0.7 on hover
        },
    },
    helpText : { 
        marginTop: '16px',
        fontSize:'14px',
        fontFamily:theme.typography.fontFamilySecondary 
    },
    contactUs : { 
        marginBottom: '8px',
        fontSize:'32px',
        fontWeight:'600' 
    },
    question : { 
        marginBottom: '16px',
        fontSize:'14px',
        fontFamily:theme.typography.fontFamilySecondary, 
    },


  };
};

export default useStyles;


const Styles = {
    mainContainer : {
        width: '98.8vw',  // Width 98.8% of the viewport width
        paddingX: '3%',  // Horizontal padding
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
        paddingBottom:{xs:'5px',md:'15px'},
        paddingTop:{xs:'10px',md:'20px'}
    }
};
export default Styles;
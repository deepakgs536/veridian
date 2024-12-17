import { alpha, useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme(); // Access the custom theme

  return {
    buttonStyles : {
        position: 'absolute',
        top: '50%',
        zIndex: 10,
        transform: 'translateY(-50%)',
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: theme.palette.background.white,
        fontSize: '18px',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.dark,0.9), // Slightly darker grey on hover
        },
      },
  };
};

export default useStyles;


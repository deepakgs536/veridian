import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme(); // Access the custom theme

  return {
    textStyle: {
      fontSize: '14px',
      textAlign: 'start',
      color:theme.palette.text.secondary,
      fontFamily:theme.typography.fontFamilySecondary,
    },
    gridStyle: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // Default for larger screens
      gap: {xs:'20px',md:'20px'},
      // Adjust grid layout for xs screens (1 element per row)
      '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr', // 1 element per row on small screens
      },
      
    },
  };
};

export default useStyles;


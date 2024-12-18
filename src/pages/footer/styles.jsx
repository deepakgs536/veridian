import { alpha, useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme(); // Access the custom theme

  return {
    termOfUse : {
        fontSize: '12px',
        fontFamily:theme.typography.fontFamilySecondary,
        textAlign: 'left', // Ensure left alignment for xs
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        textDecoration: 'none', // Optional: Add underline to the link for clarity
        '&:hover': {
          color: theme.palette.primary.main, // Optional: Change color on hover
        },
    },
    policyInfo : { 
        textAlign: 'left', 
        fontSize:'12px',
        fontFamily:theme.typography.fontFamilySecondary, 
    },
    footerContainer : {
        width: '100%',
        marginY: '10px',
        paddingX:{xs:'4%'},
        textAlign: 'start',
        color: theme.palette.text.tertiary,
        alignItems: { xs: 'flex-start', md: 'center' }, // Align items vertically in the center for md
        justifyContent: { xs: 'flex-start', md: 'space-between' }, // Start alignment for xs, space-between for md
    },
  };
};

export default useStyles;


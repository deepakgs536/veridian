export const Styles = {
    textStyle: {
      fontSize: '14px',
      textAlign: 'start',
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
  
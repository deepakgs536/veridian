import { useTheme } from '@emotion/react';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 2, md: 3 }}
      sx={{
        width: '100%',
        marginY: '10px',
        textAlign: 'start',
        color: theme.palette.text.tertiary,
        alignItems: { xs: 'flex-start', md: 'center' }, // Align items vertically in the center for md
        justifyContent: { xs: 'flex-start', md: 'space-between' }, // Start alignment for xs, space-between for md
      }}
    >
      <Typography sx={{ textAlign: 'left', fontSize: '12px' }}>
        COPYRIGHT © Veridian (Gibraltar) Limited 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.
      </Typography>
      <Typography
      onClick={() => navigate('/policy')}       
      sx={{
          fontSize: '12px',
          textAlign: 'left', // Ensure left alignment for xs
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          textDecoration: 'none', // Optional: Add underline to the link for clarity
          '&:hover': {
            color: theme.palette.primary.main, // Optional: Change color on hover
          },
        }}
      >
        Term of use
      </Typography>
    </Stack>
  );
}

export default Footer;

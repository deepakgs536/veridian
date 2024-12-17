import { useTheme } from '@emotion/react';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const Styles = useStyles();
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 2, md: 3 }}
      sx={Styles.footerContainer}
    >
      <Typography sx={Styles.policyInfo}>
        COPYRIGHT © Veridian (Gibraltar) Limited 2024. All rights reserved. Any and all content 
        included on this website or incorporated by reference is protected by international 
        copyright laws.
      </Typography>
      <Typography
        onClick={() => navigate('/policy')}       
        sx={Styles.termOfUse}
        >
          Term of use
      </Typography>
    </Stack>
  );
}

export default Footer;

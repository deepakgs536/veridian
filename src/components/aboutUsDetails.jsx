import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function AboutUsDetails({ aboutUsIcon = null, aboutUsMessage = "", header = "" }) {
  const theme = useTheme();
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} sx={{backgroundColor:theme.palette.background.white ,padding:{xs:'5%',md:'3%'},zIndex:10}}>
      {/* Text Section */}
      <Stack sx={{ 
          order: { xs: 1, md: 0 } // Image comes first in xs (top), second in md (bottom)
        }}>
        <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'start', marginBottom: '5px' }}>
          {header}
        </Typography>
        <Typography sx={{ fontSize: '14px', textAlign: 'start' }}>
          {aboutUsMessage}
        </Typography>
      </Stack>
      
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'flex-start',  // Align image to the left
        alignItems: 'center', // Vertically center the image
        order: { xs: 0, md: 1 },  // Image comes first in xs (top), second in md (bottom)
        width: { xs: '50%', md: 'auto' },  // Adjust image size in xs and md
        maxWidth: { xs: '150px', md: '250px' },  // Max size in xs and md
        height: 'auto', // Maintain aspect ratio
        paddingBottom:'10px',
      }}>
        <img
          src={aboutUsIcon}
          alt="aboutUsIcon"
        />
      </Box>
      {/* Image Section */}
      

    </Stack>
  );
}

export default AboutUsDetails;

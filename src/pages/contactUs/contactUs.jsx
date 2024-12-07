import { alpha, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactUsShadow from '../../components/contactUsShadow';
import { useTheme } from '@emotion/react';

function ContactUs() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        color: theme.palette.background.white,
        width: '100%',
        overflow: 'hidden',
        paddingY: '5%',
      }}
    >
      <Box sx={{ zIndex: 100}}>
        <Typography sx={{ marginBottom: '8px',fontSize:'32px' }}>Contact Us</Typography>
        <Typography sx={{ marginBottom: '16px',fontSize:'14px' }}>
          Have questions or need more information? Reach out to us at.
        </Typography>
        <a
            href="mailto:info@veridian.com"
            style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
          >
        <Stack direction="row" sx={{ justifySelf: 'center',marginRight:{xs:'6%',md:'0%'}, whiteSpace: 'nowrap', }}>
          {/* Email Section */}
          
            <Stack
              direction="row"
              spacing={2}
              sx={{
                backgroundColor: alpha(theme.palette.primary.dark,0.7),
                padding: {xs:'2% 2%',md:'10px 20px'},
                alignItems: 'center', // Center items vertically
                cursor: 'pointer', // Change cursor to pointer on hover
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#f9c300',
                  color: theme.palette.background.black,
                  fontSize: '12px',
                  padding: '3px 5px',
                  display: 'flex', // Add flex to align text
                  alignItems: 'center', // Center vertically
                  justifyContent: 'center', // Center horizontally
                }}
              >
                MAIL TO
              </Box>
              <Typography sx={{ display: 'flex', alignItems: 'center',fontSize:{xs:'16px',md:'18px'} }}>
                info@veridian.com
              </Typography>
            </Stack>
          

          {/* Arrow Section */}
          <Box
            sx={{
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
            }}
          >
            <ArrowForwardIcon />
          </Box>
        </Stack>
        </a>
        <Typography sx={{ marginTop: '16px',fontSize:'14px' }}>We're here to help</Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <ContactUsShadow top="0%" right="-75%" opacity="0.4" />
        <ContactUsShadow top="25%" right="-82%" opacity="0.7" />
        <ContactUsShadow top="50%" right="-89%" opacity="1" />
        <ContactUsShadow bottom="0%" left="-75%" opacity="0.4" />
        <ContactUsShadow bottom="25%" left="-82%" opacity="0.7" />
        <ContactUsShadow bottom="50%" left="-89%" opacity="1" />
      </Box>


    </Box>
  );
}

export default ContactUs;

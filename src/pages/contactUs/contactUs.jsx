import { alpha, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactUsShadow from '../../components/contactUsShadow';
import { useTheme } from '@emotion/react';
import useStyles from './styles';

function ContactUs() {
  const theme = useTheme();
  const Styles = useStyles();
  return (
    <Box
      sx={Styles.mainContainer}
    >
      <Box sx={{ zIndex: 100}}>
        <Typography sx={Styles.contactUs}>
          Contact Us
        </Typography>
        <Typography sx={Styles.question}>
          Have questions or need more information? Reach out to us at.
        </Typography>

        <a
            href="mailto:info@veridian.com"
            style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
        >       
        <Stack direction="row" sx={Styles.mailToStack}>
          {/* Email Section */}
            <Stack
              direction="row"
              spacing={1.5}
              sx={Styles.mailToContainer}
            >
              <Box
                sx={Styles.mailToText}>
                MAIL TO
              </Box>
              <Typography sx={Styles.mailText}>
                info@veridian.com
              </Typography>
            </Stack>
          {/* Arrow Section */}
          <Box sx={Styles.sendIcon}>
            <ArrowForwardIcon />
          </Box>
        </Stack>
        </a>
        <Typography sx={Styles.helpText}>
          We're here to help
        </Typography>
      </Box>
      {/* Shadow */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <ContactUsShadow top="0%" right="-70%" opacity="0.2" />
        <ContactUsShadow top="25%" right="-78%" opacity="0.2" />
        <ContactUsShadow top="50%" right="-86%" opacity="0.1" />
        <ContactUsShadow bottom="0%" left="-70%" opacity="0.2" />
        <ContactUsShadow bottom="25%" left="-78%" opacity="0.2" />
        <ContactUsShadow bottom="50%" left="-86%" opacity="0.1" />
      </Box>


    </Box>
  );
}

export default ContactUs;

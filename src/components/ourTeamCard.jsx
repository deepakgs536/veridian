import { useTheme } from '@emotion/react';
import { alpha } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import React from 'react';

function OurTeamCard({ TeamMemberName, Info1 , Info2, Image, Designation,paraRef, maxHeight }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: 'start',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        boxShadow: `0 4px 8px ${alpha(theme.palette.background.white, 0.2)}`,
        overflow: 'hidden',
        backgroundColor: theme.palette.background.white,
        minHeight: { xs: 'auto', md: '400px' },
        transform: {
          xs: 'skew(0deg)', // For small screens
          md: 'translateX(9%) skew(-20deg)', // For medium screens and above
        },
      }}
    >
      {/* Replacing Stack with Box for similar behavior */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack for xs and row for md
          spacing: 2,
          position: { xs: 'relative', md: 'absolute' },
          top: { xs: '0', md: 'auto' }, // Move to top for xs
          bottom: { xs: '0', md: '0' }, // Keep at bottom for md
          left: '0%',
          transform: {
            xs: 'skew(0deg)',
            md: 'skew(20deg)',
          },
          zIndex: 0,
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: '100%', // Fixed width
            maxHeight: {xs:'300px',md:'350px'}, // Fixed height
            overflow: 'hidden', // Hide overflow if necessary
          }}
        >
          <img
            src={Image}
            alt="team member"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Ensure the whole image is visible
              zIndex: -10,
            }}
          />
        </Box>

        {/* Name and Designation Box */}
        {/* ND box */}
        
        <Box
          sx={{
            alignSelf: 'end',
            whiteSpace: 'nowrap',
            backgroundColor: theme.palette.primary.main,
            padding: '10px 50px',
            transform: 'skew(-30deg)',
            paddingX: {xs:'50%',md:'120px'},
            paddingLeft:{xs:'75%'},
            position: { xs: 'relative', md: 'absolute' },
            left: { xs: '-17%', md: '65%' },
            zIndex: -20,
            minHeight: '75px',
            display: {xs:'block',md:'flex'}, // Flex container
            flexDirection: 'column', // Stack vertically
            alignItems: {xs:'center',md:'flex-start'}, // Align content to the start (left)
            justifyContent: 'center', // Center content vertically
            width: { xs: '160%', md: 'auto' }, // Adjust width for xs without affecting md
            marginBottom:{xs:'0%',md:'10px'},
          }}
        >
          <Typography
            sx={{
              transform: 'skew(30deg)',
              color: theme.palette.background.white,
              fontSize:'18px',
              textAlign: 'left', // Explicitly left-align text
            }}
          >
            {TeamMemberName}
          </Typography>
          <Typography
            sx={{
              transform: 'skew(30deg)',
              color: theme.palette.background.white,
              fontSize:'14px',
              textAlign: 'left', // Explicitly left-align text
              fontFamily:theme.typography.fontFamilySecondary,
            }}
          >
            {Designation}
          </Typography>
        </Box>
        
      </Box>

      {/* Paragraph */}
      <Box
        ref={paraRef} // Attach the ref
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: {xs:'100%',md:'70%'},
          marginLeft:{md:'22%'},
          marginTop: '10px',
          color:theme.palette.text.tertiary,
          transform: {
            xs: 'skew(0deg)',
            md: 'skew(20deg)',
          },
          height: maxHeight ? `${maxHeight}px` : 'auto', // Apply the max height
        }}
      >
        <Typography sx={{ marginBottom: '8px',fontSize:{xs:'14px',md:'16px'},fontFamily:theme.typography.fontFamilySecondary, }}>{Info1}</Typography>
        {Info2 && <Typography sx={{fontSize:{xs:'14px',md:'16px'},fontFamily:theme.typography.fontFamilySecondary,}}>{Info2}</Typography>}
      </Box>
    </Box>
  );
}

export default OurTeamCard;

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function InvestmentApproachCard({ InvestmentImage, Header, ParaOne = '', ParaTwo = '' }) {
    const theme = useTheme();
    return (
        <Stack spacing={2} sx={{ textAlign: 'start', padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px',backgroundColor:theme.palette.background.white, minHeight: { xs: '720px', md: '300px' },zIndex:10}}>
            {/* Image */}
            <Box
                component="img"
                src={InvestmentImage}
                alt="InvestmentImage"
                sx={{
                    width: '100%',
                    height: 'auto', // Allow the height to adjust automatically
                    aspectRatio: '16/9', // Ensure all images have the same aspect ratio (16:9 for example)
                    objectFit: 'cover', // Ensures the image scales proportionally to fill the space
                    borderRadius: '8px',
                }}
            />

            {/* Header */}
            <Typography variant="h6" sx={{ fontWeight: 600,fontSize:'18px' }}>
                {Header}
            </Typography>

            {/* Paragraphs */}
            <Stack spacing={1} sx={{color:theme.palette.text.secondary }}>
                <Typography sx={{ fontSize: '14px', lineHeight: '1.6' ,fontFamily:theme.typography.fontFamilySecondary}}>
                    {ParaOne}
                </Typography>
                {ParaTwo && (
                    <Typography sx={{ fontSize: '14px', lineHeight: '1.6' ,fontFamily:theme.typography.fontFamilySecondary}}>
                        {ParaTwo}
                    </Typography>
                )}
            </Stack>
        </Stack>
    );
}

export default InvestmentApproachCard;

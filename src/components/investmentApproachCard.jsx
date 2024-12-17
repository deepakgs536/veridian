import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function InvestmentApproachCard({ InvestmentImage, Header, ParaOne = '', ParaTwo = '' }) {
    const theme = useTheme();
    return (
        <Stack spacing={{xs:1,md:1.5}} 
        sx={{ 
            textAlign: 'start', 
            padding: '16px', 
            border: '1px solid #e0e0e0',
            backgroundColor:theme.palette.background.white, 
            minHeight: { xs: '720px', md: '300px' },
            zIndex:10
            }}>
            <Box sx={{
                    height: {
                        xs: 'auto', // Height is auto for xs screens
                        md: '130px', // Fixed height for md screens
                        lg: '210px', // Fixed height for larger screens
                    },
                }}>
                <Box
                    component="img"
                    src={InvestmentImage}
                    alt="InvestmentImage"
                    sx={{
                        width: '100%',
                        height: 'auto', // Allow the height to adjust automatically
                        
                    }}
                />
            </Box>
            
            {/* Header */}
            <Typography variant="h6" sx={{ fontWeight: 600,fontSize:'18px',paddingTop:{xs:'0',md:'5px'}}}>
                {Header}
            </Typography>

            {/* Paragraphs */}
            <Stack spacing={1} sx={{color:theme.palette.text.secondary }}>
                <Typography 
                sx={{ 
                    fontSize: '14px', 
                    lineHeight: '1.6' ,
                    fontFamily:theme.typography.fontFamilySecondary
                }}>
                    {ParaOne}
                </Typography>
                {ParaTwo && (
                    <Typography 
                    sx={{ 
                        fontSize: '14px', 
                        lineHeight: '1.6' ,
                        fontFamily:theme.typography.fontFamilySecondary
                    }}>
                        {ParaTwo}
                    </Typography>
                )}
            </Stack>
        </Stack>
    );
}

export default InvestmentApproachCard;

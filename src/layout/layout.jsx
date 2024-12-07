import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Shadow from '../components/shadow'
import Home from '../pages/home/home'
import AboutUs from '../pages/aboutUs/aboutUs'
import OurTeam from '../pages/ourTeam/ourTeam'
import HolisticInvestmentApproach from '../pages/holisticInvestmentApproach/holisticInvestmentApproach'
import ContactUs from '../pages/contactUs/contactUs'
import Footer from '../pages/footer/footer'
import { useTheme } from '@emotion/react'
import { alpha } from '@mui/material/styles';

function LayoutPage() {
    const theme = useTheme();
  return (
    <Box>
        <Box id="home">
            <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '60vh', md: 'auto' },
                backgroundColor: theme.palette.primary.main,
                overflow: 'hidden',
            }}
            >
            <Shadow top={-50} left={0} />
            <Shadow bottom={-60} right={0} />
            <Shadow top={-50} right={0} />
            <Shadow bottom={-60} left={0} />
            <Home />
            </Box>
      </Box>
      <Stack spacing={5} sx={{backgroundColor:theme.palette.primary.light ,position:'relative',overflow:'hidden'}}>
          <Shadow top={'-15%'} left={0} shadowRotate={'rotate(225deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
          <Shadow bottom={'20%'} right={0} shadowRotate={'rotate(135deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
          <Shadow top={'-15%'} right={0} shadowRotate={'rotate(135deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
          <Shadow bottom={'20%'} left={0} shadowRotate={'rotate(225deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
          <Box id="aboutUs" sx={{paddingX:{xs:'4%',md:'5%'}}}>
            <AboutUs />
          </Box>
        <Stack id="ourTeam" spacing={5} sx={{my:0}}>
          <Typography variant="h4">Our Team</Typography>
          <OurTeam />
        </Stack>
        <Box id="investmentApproach" sx={{ py: 5,px:{xs:2,md:3} }}>
          <HolisticInvestmentApproach />
        </Box>
      </Stack>
      <Box id="contactUs">
          <ContactUs />
      </Box>
      <Box>
      <Divider sx={{paddingY:'10px',width:'100%'}}/>
          <Footer/>
      </Box>
    </Box>
    
  )
}

export default LayoutPage

import { useState } from 'react'
import './App.css'
import Navbar from './pages/navbar/navbar'
import Home from './pages/home/home'
import { Box, Stack, ThemeProvider } from '@mui/material'
import Shadow from './components/shadow'
import AboutUs from './pages/aboutUs/aboutUs'
import HolisticInvestmentApproach from './pages/holisticInvestmentApproach/holisticInvestmentApproach'
import OurTeam from './pages/ourTeam/ourTeam'
import ContactUs from './pages/contactUs/contactUs'
import LightTheme from './theme/lightTheme'
import PrivacyPolicy from './pages/privacyPolicy/privacyPolicy'
import AppRouter from './router/appRouter'

function App() {

  return (
    <>

    <ThemeProvider theme={LightTheme}>
      <AppRouter/>
    </ThemeProvider>
 
    </>
  )
}

export default App




      
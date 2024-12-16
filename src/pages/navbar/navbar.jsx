  import * as React from 'react';
  import { alpha } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import Tab from '@mui/material/Tab';
  import TabContext from '@mui/lab/TabContext';
  import TabList from '@mui/lab/TabList';
  import VeridianLogo from '../../assets/veridianLogo.jpeg';
  import { AppBar, Divider, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import CloseIcon from '@mui/icons-material/Close';
  import Home from '../home/home';
  import Shadow from '../../components/shadow';
  import AboutUs from '../aboutUs/aboutUs';
  import HolisticInvestmentApproach from '../holisticInvestmentApproach/holisticInvestmentApproach';
  import ContactUs from '../contactUs/contactUs';
  import OurTeam from '../ourTeam/ourTeam';
  import Footer from '../footer/footer';
  import { useTheme } from '@emotion/react';
  import Styles from './styles';
  import { useLocation, useNavigate } from 'react-router-dom';


  function Navbar() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [currentTab, setCurrentTab] = React.useState('');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleChange = (event, newValue) => {
      setCurrentTab(newValue);
      navigate(`#${newValue}`); // Update the URL with the section ID
      scrollToSection(newValue); // Smooth scroll to the section
      setDrawerOpen(false); // Close the drawer for mobile view
    };
  
    // To scroll to a section
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = -100; // Adjust this value as needed
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth',
        });
      }
    };
    // UseEffect to scroll on URL change
    React.useEffect(() => {
      if (location.hash) {
        const sectionId = location.hash.substring(1); // Remove '#' from hash
        scrollToSection(sectionId);
        setCurrentTab(sectionId); // Highlight the active tab
      }
    }, [location]);

    const toggleDrawer = (open) => () => {
      setDrawerOpen(open);
    };

    return (
      <Box
        sx={Styles.mainContainer}>
      <Box sx={Styles.contentSection}>

        <AppBar 
        sx={{ 
          backgroundColor: theme.palette.background.white, 
          boxShadow: 0,
          position:"sticky" ,
          top: 0, // Ensures stickiness starts at the top
          zIndex: 1100, // Ensure it appears above other elements
          }}>
          <Toolbar sx={{ padding: 0 ,position:"sticky"}}>
            <Box sx={{ flex: 1, textAlign: 'left' }}>
              <img
                src={VeridianLogo}
                alt="VeridianLogo"
                style={Styles.logoStyle}
              />
            </Box>

            {/* Tabs for larger screens */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, flex: 3 }}>
              <TabContext value={currentTab}>
                <TabList
                  onChange={handleChange}
                  aria-label="navbar tabs"
                  sx={{
                    position: 'sticky', // Sticky tabs
                    top: 0,
                    zIndex: 1100,
                    backgroundColor: theme.palette.background.white,
                    display: 'flex',
                    justifyContent: 'center',
                    '& .MuiTab-root': {
                      outline: 'none',
                      fontSize: '20px',
                      fontWeight:500,
                      paddingX: '15px',
                      textTransform: 'none',
                    },
                    '& .MuiTab-root.Mui-selected': { color: theme.palette.primary.main },
                    '& .MuiTabs-indicator': { backgroundColor: theme.palette.primary.main, height: '4px' },
                  }}
                  >
                  <Tab label="Home" value="home" />
                  <Tab label="About Us" value="aboutUs" />
                  <Tab label="Our Team" value="ourTeam" />
                  <Tab label="Investment Approach" value="investmentApproach" />
                  <Tab label="Contact Us" value="contactUs" />
                </TabList>
              </TabContext>
            </Box>

            {/* Menu Icon for smaller screens */}
            <Box sx={Styles.menuIconStyle}>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer for smaller screens */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClick={toggleDrawer(!drawerOpen)}
          PaperProps={{
            sx: { width: '100%', height: 'max-content' }, // or use height = 100% full occupy fully
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px',
              borderBottom: `1px solid ${theme.palette.text.line2}`,
              backgroundColor: 'transparent',
            }}
          >
            <img
              src={VeridianLogo}
              alt="VeridianLogo"
              style={{ maxWidth: '100px', height: 'auto' }}
            />
            <IconButton
              onClick={toggleDrawer(!drawerOpen)}
              sx={{
                color: theme.palette.background.black,
                outline: 'none',
                border: 'none',
                '&:focus': { outline: 'none' },
                '&:active': { outline: 'none' },
              }}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          {/* Tabs in Drawer */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0px',
              backgroundColor: theme.palette.background.white,
            }}
          >
            <TabContext value={currentTab}>
              <TabList
                onChange={handleChange}
                orientation="vertical"
                aria-label="drawer tabs"
                sx={{
                  position: 'sticky', 
                  top: 0,
                  zIndex: 1100,
                  backgroundColor: theme.palette.background.white,
                  '& .MuiTab-root': {
                    textAlign: 'center',
                    padding: '12px 24px',
                    fontSize: '18px',
                    fontWeight:500,
                    textTransform: 'none',
                    justifyContent: 'center',
                  },
                  '& .MuiTab-root.Mui-selected': { color: theme.palette.primary.main },
                  '& .MuiTabs-indicator': { display: 'none' },
                }}
              >
                <Tab label="Home" value="home" />
                <Tab label="About Us" value="aboutUs" />
                <Tab label="Our Team" value="ourTeam" />
                <Tab label="Investment Approach" value="investmentApproach" />
                <Tab label="Contact Us" value="contactUs" />
              </TabList>
            </TabContext>
          </Box>
        </Drawer>

        {/* Page Sections */}
        

          <Box id="home">
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '60vh', md: '60vh' },
                backgroundColor: theme.palette.primary.main, 
                overflow: 'hidden',
                marginY:{xs:'0',md:'auto'},
                display:'flex',
                alignItems:'center',
              }}
            >
              <Shadow top={-50} left={0} />
              <Shadow bottom={-60} right={0} />
              <Shadow top={-50} right={0} />
              <Shadow bottom={-60} left={0} />
              <Home />
            </Box>
          </Box>
          <Stack spacing={2} 
          sx={{
            backgroundColor:theme.palette.primary.light ,position:'relative',overflow:'hidden'
            }}>
              <Shadow top={'-15%'} left={0} shadowRotate={'rotate(225deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
              <Shadow bottom={'20%'} right={0} shadowRotate={'rotate(135deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
              <Shadow top={'-15%'} right={0} shadowRotate={'rotate(135deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
              <Shadow bottom={'20%'} left={0} shadowRotate={'rotate(225deg)'} shadowColor ={alpha('#C0E3DB', 1)} fadeColor = {alpha('#C0E3DB', 0)}/>
              <Box id="aboutUs" sx={{paddingX:{xs:'4%',md:'8%'}}}>
              <Typography sx={Styles.headerStyle}>About Us</Typography>
              <AboutUs />
              </Box>
            <Stack id="ourTeam" >
              <Typography sx={Styles.headerStyle}>Our Team</Typography>
              <OurTeam />
            </Stack>
            <Box id="investmentApproach" sx={{ paddingBottom: '20px',px:{xs:2,md:5} }}>
            <Typography sx={Styles.headerStyle}>Holistic Investment Approach</Typography>
              <HolisticInvestmentApproach />
            </Box>
          </Stack>
          <Box id="contactUs">
              <ContactUs />
          </Box>
          <Divider 
          sx={{
            paddingY:'10px',width:'100%',marginY:'20px',
            }}/>
          <Box>
          <Footer/>
          </Box>

      </Box>

      </Box>
        
    );
  }

  export default Navbar;

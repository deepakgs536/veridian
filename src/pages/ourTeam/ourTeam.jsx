import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import { alpha } from '@mui/material/styles';
import { Box } from '@mui/material';
import OurTeamCard from '../../components/ourTeamCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import TeamMember1 from '../../assets/teamMember1.svg';
import TeamMember2 from '../../assets/teamMember2.svg';
import TeamMember3 from '../../assets/teamMember3.svg';
import { useTheme } from '@emotion/react';

function OurTeam() {
  const swiperRef = useRef(null); // Create a ref for Swiper instance
  const [currentPage, setCurrentPage] = useState(0); // Track the current active page
  const [maxHeight, setMaxHeight] = useState(0); // State for max height
  const paragraphRefs = useRef([]); // Refs to paragraph sections
  const theme = useTheme();
  const teamMemberDetail = [
    {
      Name: 'Julian Jarvis',
      Designation: 'Chairman, Founder and CEO',
      Info1: "Julian is an experienced lawyer, businessman, and investor with over 25 years of experience in start-up, private, and public companies. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award-winning supplier to the international iGaming and betting industries.",
      Info2: "Julian is an experienced lawyer, businessman, and investor with over 25 years of experience in start-up, private, and public companies. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award-winning supplier to the international iGaming and betting industries.",
      Image: TeamMember1,
    },
    {
      Name: 'Peter Montegriffo KC',
      Designation: '',
      Info1: "Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar. He continues to advise on restructuring, mergers, and public listings. Peter was Gibraltar’s Minister for Trade and Industry.",
      Info2: "",
      Image: TeamMember2,
    },
    {
      Name: 'Grahame Jackson',
      Designation: '',
      Info1: "Grahame Jackson is a Fellow of the Chartered Institute of Taxation and has advised numerous international companies. He is a regular adviser on both domestic Gibraltar taxation and international taxation reform.",
      Info2: "Julian is an experienced lawyer, businessman, and investor with over 25 years of experience in start-up, private, and public companies. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award-winning supplier to the international iGaming and betting industries.",
      Image: TeamMember3,
    },
  ];

  const buttonStyles = {
    position: 'absolute',
    top: '50%',
    zIndex: 10,
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.background.white,
    fontSize: '18px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.dark,0.9), // Slightly darker grey on hover
    },
  };

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.realIndex); // Update current page when slide changes
  };

  useEffect(() => {
    // Function to calculate max height of paragraphs
    const updateMaxHeight = () => {
      const heights = paragraphRefs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights)); // Set max height from the refs
    };

    // Initial calculation
    updateMaxHeight();

    // Update max height on window resize
    window.addEventListener('resize', updateMaxHeight);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', updateMaxHeight);
  }, []); // Run only once after mount, or any changes in dependencies (here it's empty)

  return (
    <Box sx={{ position: 'relative' }}>
      <Swiper
        ref={swiperRef} // Pass the ref to access the Swiper instance
        loop={true}
        speed={700} // Set transition speed (700ms for smooth movement)
        spaceBetween={20}
        pagination={{ clickable: true }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide per view for xs screens
          },
          600: {
            slidesPerView: 1.15, // Slightly more than 1 slide on small screens
          },
        }}
        onSlideChange={handleSlideChange} // Update active slide when the slide changes
      >
        {teamMemberDetail.map((member, index) => (
          <SwiperSlide key={index}>
            <OurTeamCard
              TeamMemberName={member.Name}
              Designation={member.Designation}
              Info1={member.Info1}
              Info2={member.Info2}
              Image={member.Image}
              paraRef={(el) => (paragraphRefs.current[index] = el)} // Attach ref to each paragraph
              maxHeight={maxHeight} // Pass maxHeight to the card
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <Box
        onClick={() => swiperRef.current.swiper.slidePrev()} // Trigger previous slide
        sx={{
          ...buttonStyles,
          left: '18px',
          display: { xs: 'none', sm: 'flex' }, // Hide on xs screens
        }}
      >
        <ArrowBackIcon /> {/* Left Arrow */}
      </Box>
      <Box
        onClick={() => swiperRef.current.swiper.slideNext()} // Trigger next slide
        sx={{
          ...buttonStyles,
          right: '18px',
          display: { xs: 'none', sm: 'flex' }, // Hide on xs screens
        }}
      >
        <ArrowForwardIcon /> {/* Right Arrow */}
      </Box>

      {/* Dots for small screens (when arrows are hidden) */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' }, // Show dots on xs screens
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {teamMemberDetail.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: currentPage === index ? '35px' : '12px',
              height: '12px',
              borderRadius: currentPage === index ? '100px' : '50%',
              backgroundColor: currentPage === index ? '#dfd328' : '#006547',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'width 0.3s ease, background-color 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
            onClick={() => swiperRef.current.swiper.slideTo(index)} // Change page on dot click
          />
        ))}
      </Box>
    </Box>
  );
}

export default OurTeam;
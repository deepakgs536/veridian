import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import InvestmentApproachCard from '../../components/investmentApproachCard';
import FocusAndStrategyImage from '../../assets/focusAndStrategyImage.jpg';
import PortfolioImage from '../../assets/portfolioImage.jpg';
import CorporateSocialResponsibility from '../../assets/corporateSocialResponsibility.jpg';

function HolisticInvestmentApproach() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md')); // Determine screen size
  const details = [
    {
      Image: FocusAndStrategyImage,
      Header: 'Investment focus and strategy',
      ParaOne: 'Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long-term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.',
      ParaTwo: 'Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.'
    },
    {
      Image: PortfolioImage,
      Header: 'Portfolio',
      ParaOne: 'The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.',
      ParaTwo: 'Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently delivers best-in-class services to its partners worldwide with a dedication to creating games that players love time and time again.'
    },
    {
      Image: CorporateSocialResponsibility,
      Header: 'Corporate social responsibility',
      ParaOne: 'Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.',
      ParaTwo: ''
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <Box>
      {/* Swiper for xs screens */}
      {!isMd && (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          onSlideChange={(swiper) => handlePageChange(swiper.activeIndex)}
        >
          {details.map((detail, index) => (
            <SwiperSlide key={index}>
              <InvestmentApproachCard
                InvestmentImage={detail.Image}
                Header={detail.Header}
                ParaOne={detail.ParaOne}
                ParaTwo={detail.ParaTwo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Grid for md and larger screens */}
      {isMd && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr', // 3 columns for md+ screens
            gap: '20px',
            width: '100%',
            paddingBottom: '3%',
          }}
        >
          {details.map((detail, index) => (
            <InvestmentApproachCard
              key={index}
              InvestmentImage={detail.Image}
              Header={detail.Header}
              ParaOne={detail.ParaOne}
              ParaTwo={detail.ParaTwo}
            />
          ))}
        </Box>
      )}

      {/* Custom Pagination for xs */}
      {!isMd && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {Array.from({ length: details.length }).map((_, index) => (
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
              onClick={() => handlePageChange(index)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default HolisticInvestmentApproach;

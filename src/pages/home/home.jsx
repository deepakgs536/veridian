import { Box, Typography } from "@mui/material";
import React from "react";
import DownArrow from "@mui/icons-material/TurnRight";
import useStyles from './styles';
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();
  const Styles = useStyles();
  return (
    <Box sx={Styles.boxStyle}>
      {/* Transparent Overlay Image Left */}
        {/* Headline */}
        <Typography
          sx={Styles.company}
        >
          INVESTMENT MANAGEMENT
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={Styles.quotes}
        >
          Empowering Investments with Expertise 
          and Strategy
        </Typography>

        {/* Call to Action */}
        <Box
          sx={Styles.knowMore}
          onClick = {()=> navigate("/#aboutUs")}
        >
          <Typography sx={Styles.knowMoreText}>
            Know more
          </Typography>
          <DownArrow sx={{ color: theme.palette.background.white, transform: "rotate(90deg)" }} />
        </Box>
    </Box>
  );
}




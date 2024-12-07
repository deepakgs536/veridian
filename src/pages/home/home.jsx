import { Box, Typography } from "@mui/material";
import React from "react";
import DownArrow from "@mui/icons-material/TurnRight";
import { Styles } from "./styles";
import { useTheme } from "@emotion/react";

export default function Home() {
  const theme = useTheme();
  return (
    <Box sx={Styles.boxStyle}>
      {/* Transparent Overlay Image Left */}
        {/* Headline */}
        <Typography
          sx={Styles.company}
        >
          Investment management
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
        >
          <Typography>
            Know more
          </Typography>
          <DownArrow sx={{ color: theme.palette.background.white, transform: "rotate(90deg)" }} />
        </Box>
    </Box>
  );
}




import { useTheme, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';

function Shadow({
  top = 'none',
  bottom = 0,
  right = 0,
  left = 'none',
  shadowColor,  // Default shadow color
  fadeColor,    // Default fade-out color (transparent)
  shadowRotate = null,  // Custom rotation angle (optional)
}) {
  const theme = useTheme();

  // Use shadowRotate if provided, otherwise apply the default rotation logic
  const rotation = shadowRotate || (left !== 'none' ? 'rotate(-45deg)' : 'rotate(45deg)');

  // Default values with alpha applied
  const defaultShadowColor = shadowColor || alpha(theme.palette.primary.dark, 1); // Full opacity shadow
  const defaultFadeColor = fadeColor || alpha(theme.palette.primary.dark, 0);  // Slight fade for better visibility

  return (
    <Box
      sx={{
        position: 'absolute',
        top: top === 'none' ? undefined : top,     // If 'top' is 'none', don't apply top style
        bottom: bottom,                             // Apply bottom value
        right: right,                               // Apply right value
        left: left === 'none' ? undefined : left,   // If 'left' is 'none', don't apply left style
        width: '100px',                             // Increase width for visibility
        height: '80%',                            // Increase height for visibility
        transform: rotation,                        // Apply either custom rotation or default rotation logic
        background: `linear-gradient(to bottom, ${defaultShadowColor}, ${defaultFadeColor})`, // Use both shadowColor and fadeColor props
        zIndex: 0,                                // Make sure it's above other content
        display: shadowRotate ? { xs: 'none', md: 'block' } : 'block', 
      }}
    />
  );
}

export default Shadow;


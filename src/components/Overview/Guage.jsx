import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Gauge = ({ value }) => {
  // Calculate the percentage value for CircularProgress
  const percentage = (value / 100) * 100;

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={percentage} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        
        
      >
        <Box fontSize="h7.fontSize" fontWeight="fontWeightBold" color="white">
          {value}
        </Box>
      </Box>
    </Box>
  );
};

export default Gauge;

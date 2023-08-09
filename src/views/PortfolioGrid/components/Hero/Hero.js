import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          Breisoft will revolutionize your project with professional execution,
          freeing up your invaluable time.
        </Typography>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Commitment that astounds, results that astonish
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;

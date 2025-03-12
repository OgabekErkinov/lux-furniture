import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';
import useStore from '../store/store';

const GiveQuestion = () => {
  const { t } = useTranslation();
  const {toggleModal} = useStore()
  const { xl, lg, md, sm } = useMedia();

  return (
    <Box width="90%" mx='auto' p={2}>
      <Stack alignItems="flex-start" spacing={2}>
        {/* Title */}
        <Typography 
          fontSize={xl ? '40px' : lg ? '36px' : md ? '28px' : sm ? '24px' : '20px'}
          fontWeight={600} 
          color="#000"  
          textAlign="left"
        >
          {t('givingQuestion.giveQuestion')}
        </Typography>

        {/* Button */}
        <Button 
          onClick={toggleModal} 
          sx={{ 
            width: '240px', 
            height: '60px', 
            borderRadius: '4px', 
            background: 'linear-gradient(to right bottom, rgb(3, 70, 12), rgb(0, 182, 15))',
            color: '#fff',
            fontSize: '18px',
            '&:hover': { background: 'linear-gradient(to right bottom, rgb(0, 182, 15), rgb(2, 73, 12))' }
          }}
        >
          {t('givingQuestion.buttonText')}
        </Button>
      </Stack>
    </Box>
  );
};

export default GiveQuestion;
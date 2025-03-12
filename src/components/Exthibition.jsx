import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';

const Exthibition = () => {
  const { t } = useTranslation();
  const { xs, sm, md, lg, xl } = useMedia();
  
  const furnitures = [
    '/mebellar/1.webp',
    '/mebellar/2.webp',
    '/mebellar/3.webp',
    '/mebellar/4.webp',
    '/mebellar/6.webp',
    '/mebellar/7.webp',
    '/mebellar/8.webp',
    '/mebellar/6.webp',
  ];

  return (
    <Box height="auto" width="90%" display="flex" flexDirection="column" alignItems="center" gap="12px">
      {/* Heading */}
      <Box width="50%" textAlign="center" mx="auto">
        <Typography color="#000000" fontSize="24px" fontWeight="600" width="70%">
          {t('furnitures-desc')}
        </Typography>
      </Box>

      {/* Images Section */}
      <Box height="auto" width="100%" display="grid" gap="12px" 
           gridTemplateColumns={xs ? '1fr' : sm ? '1fr 1fr' : md ? 'repeat(3,1fr)' : 'repeat(4,1fr)'}>

        {furnitures.map((image, idx) => (
          <Stack key={idx} height="660px" gap="8px" px="8px" pb="12px">
            <Box component="img" src={image} height={idx % 2 === 0 ? '45%' : '55%'} />
            <Box component="img" src={furnitures[idx + 1]} height={idx % 2 === 0 ? '55%' : '45%'} />
          </Stack>
        ))}

      </Box>
    </Box>
  );
};

export default Exthibition;

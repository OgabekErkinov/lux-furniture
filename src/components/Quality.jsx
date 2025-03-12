import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';

const Quality = () => {
  const { t } = useTranslation();
  const offers = t('qualitySection.offers', { returnObjects: true });
  const { xs, sm, md, lg, xl } = useMedia();

  const Component = ({ title, image }) => (
    <Box width="100%" height="220px" bgcolor="#94C11F4D" borderRadius="10px">
      <Stack height="100%" width="100%" p="12px">
        <Typography fontSize="18px" color="#000000" height="25%">
          {title}
        </Typography>
        <Box component="img" src={image} height="75%" width="100%" />
      </Stack>
    </Box>
  );

  return (
    <Box height="auto" width="90%" mx='auto' id="guarantees" display="flex" justifyContent="flex-end">
      <Stack height="auto" width="100%" maxWidth="1200px">
        {/* Heading Section */}
        <Box height="auto" width="90%" my="0.5rem">
          <Stack height="auto" width="100%" alignItems="center">
            <Typography
              fontSize={xl ? '40px' : lg ? '36px' : md ? '28px' : '22px'}
              fontWeight="400"
              color="#000000"
            >
              {t('qualitySection.heading')}
            </Typography>
            <Typography fontSize="18px" color="grey" textAlign="left" width="100%">
              {t('qualitySection.helperText')}
            </Typography>
          </Stack>
        </Box>

        {/* Offers Grid Section */}
        <Box height="auto" width="100%" display="grid" gap="0.2rem"
          gridTemplateColumns = {xs ? '1fr' : sm ? 'repeat(2,1fr)' : md ? 'repeat(3,1fr)' : 'repeat(6,1fr)'}>
          {Array.isArray(offers) &&
            offers.map((item, idx) => {
              return <Component title={item?.title} image={item?.image} key={idx} />;
            })}
        </Box>
      </Stack>
    </Box>
  );
};

export default Quality;

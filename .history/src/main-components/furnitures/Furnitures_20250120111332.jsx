import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Heading from './Heading';
import useScreenSizes from '../../hooks/ScreenSizes';

const Furnitures = () => {
  const {smScreen, mdScreen, lgScreen} =  useScreenSizes()
  const { t } = useTranslation();
  const furnitures = t('furnituresSection', { returnObjects: true });
  const components = furnitures.components || []; 

  return (
    <Box width="90%" my="6rem">
      <Stack gap="2rem">
        <Heading furnitures={furnitures}/>
        
        {/*.................components......................................... */}

        <Box display="grid" gap="1rem"
             gridTemplateColumns={smScreen ? '1fr' : mdScreen ? "repeat(2,  1fr)" : "repeat(3, auto)"}
          >
          {components.map((component, idx) => (
            <Box
              key={idx}
              bgcolor="#94C11F"
              borderRadius="10px"
              height="auto"
              display="flex"
              flexDirection="column"
              justifyContent="space-between">
              <Typography variant="h6" fontWeight="500" px='5px'>
                {component.title}
              </Typography>
              <Box
                component="img"
                src={component.image}
                alt={component.title}
                height="200px"
                width='100%'
                borderRadius="10px"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Furnitures;

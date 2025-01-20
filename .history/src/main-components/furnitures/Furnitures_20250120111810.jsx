import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Heading from './Heading';
import useScreenSizes from '../../hooks/ScreenSizes';
import Furniture from './Furniture';

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
             gridTemplateColumns={smScreen||mdScreen ? '1fr' : lgScreen ? "repeat(2, 1fr)" : "repeat(3, auto)"}
          >
          {components.map((component, idx) => {
            return (
              <Furniture/>
            )
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default Furnitures;

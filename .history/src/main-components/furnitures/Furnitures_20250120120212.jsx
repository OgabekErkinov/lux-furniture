import { Box, Stack } from '@mui/material';
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
    <Box width="90%" height='30rem' my="3rem">
      <Stack height='100%' width='100%' >
         <Heading furnitures={furnitures}/>

        <Box display="grid" gap="0.5rem" width='100%' height='auto'
             gridTemplateColumns={smScreen||mdScreen ? '1fr' : lgScreen ? "repeat(2, 1fr)" : "repeat(3, auto)"}
             gridTemplateRows={smScreen||mdScreen ? 'auto' : lgScreen ? '5rem' : '6rem'}>
             {components.map((component, idx) => {
                         return (
                           <Furniture furniture={component} key={idx}/>
                                )
             })}
        </Box>
      </Stack>
    </Box>
  );
};

export default Furnitures;

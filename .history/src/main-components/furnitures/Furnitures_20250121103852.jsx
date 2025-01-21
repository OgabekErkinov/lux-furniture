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
    <Box width="100%" height='auto' my="3rem" p='0.5rem'>
      <Stack height='100%' width='auto' >
         <Heading furnitures={furnitures}/>

        <Box display="grid" gap="1rem" width='100%' height='auto'
             gridTemplateColumns={smScreen||mdScreen ? 'auto' : lgScreen ? "repeat(2, auto)" : "repeat(3, auto)"}
             gridTemplateRows={smScreen||mdScreen ? 'auto' : lgScreen ? 'auto' : 'auto'}>
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

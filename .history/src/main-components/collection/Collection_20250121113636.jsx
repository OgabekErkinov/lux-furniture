import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useScreenSizes from '../../hooks/ScreenSizes';

const Collection = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const { t } = useTranslation();

    const components = t('collection.components', { returnObjects: true });
    return (
        <Box width='98%' height='auto' my='5rem'>
            <Stack height="100%" width="100%">
                <Box width="100%" color='#000000' textAlign='center'>
                    <Typography width={smScreen || mdScreen ? '100%' : '80%'} mx = 'auto' 
                                fontSize={xlgScreen ? '42px' : lgScreen ? '32px' : mdScreen ? '24px' : '20px'}>
                                    {t('collection.heading')}
                    </Typography>
                </Box>
                <Box width="90%" height="80%" mx='auto' display="flex" flexDirection='column' gap='1rem'>
                    <Box component="img" src={components[0]} height={smScreen || mdScreen ? '15rem' : '20rem'} width="100%" borderRadius='12px' />
                    <Box height='100%' width='100%' display='grid' gridTemplateColumns='1fr 1.3fr' gap='1rem'>
                       <Box component="img" src={components[1]} height={smScreen || mdScreen ? '15rem' : '20rem'} width="100%" borderRadius='12px'/>
                       <Box component="img" src={components[2]} height={smScreen || mdScreen ? '15rem' : '20rem'} width="100%" borderRadius='12px'/>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Collection;

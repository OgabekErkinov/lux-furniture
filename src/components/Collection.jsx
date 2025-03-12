import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';

const Collection = () => {
    const { xs, sm, md } = useMedia();
    const { t } = useTranslation();

    // Example image URLs
    const images = [
        "/collection/1.webp",
        "/collection/2.webp",
        "/collection/3.webp",
        "/collection/4.webp",
        "/collection/5.webp",
        "/collection/6.webp",
        "/collection/7.webp",
        "/collection/8.webp",
    ];

    return (
        <Box width='100%' height='auto' my='5rem' textAlign='center'>
            {/* Title */}
            <Typography width={sm ? '70%' : '65%'} mx='auto' 
                        fontSize={xs ? '18px' : sm ? '24px' : md ? '36px' : '36px'} fontWeight='600'>
                {t('collection.heading')}
            </Typography>
            
            {/* Image Grid */}
            <Box width='90%' mx='auto' display='grid' 
                gridTemplateColumns={xs ? '1fr' : 'repeat(4, 1fr)'}
                gap='1rem' 
                justifyContent='center' mt='2rem'>
                {/* Column 1 */}
                <Box position='relative'>
                    <Box component='img' src={images[0]} height='20rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover' }} />
                    <Box component='img' src={images[1]} height='15rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover', mt: '1rem' }} />
                </Box>
                {/* Column 2 */}
                <Box position='relative' top='3rem'>
                    <Box component='img' src={images[2]} height='15rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover' }} />
                    <Box component='img' src={images[3]} height='20rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover', mt: '1rem' }} />
                </Box>
                {/* Column 3 */}
                <Box position='relative'>
                    <Box component='img' src={images[4]} height='20rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover' }} />
                    <Box component='img' src={images[5]} height='15rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover', mt: '1rem' }} />
                </Box>
                {/* Column 4 */}
                <Box position='relative' top='3rem'>
                    <Box component='img' src={images[6]} height='15rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover' }} />
                    <Box component='img' src={images[7]} height='20rem' width='100%' borderRadius='24px' sx={{ objectFit: 'cover', mt: '1rem' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Collection;

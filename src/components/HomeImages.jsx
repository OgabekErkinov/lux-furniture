import React, { useEffect } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { uploadImages } from '../constants/constantas';
import { handleDownload } from '../libs/handleDownload';
import Guaranties from './Guaranties';
import useMedia from '../hooks/useMedia';

const HomeImages = () => {
    const { t } = useTranslation();
    const { xs, sm, md, lg, xl } = useMedia();
  
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  
    return (
      <Box id="home" width="100%" height='auto' px='12px'>
        <Box width="100%" height='auto' display="grid" gap="12px" gridTemplateColumns={xs|| sm ? '1fr': '1fr 1.5fr' }>

          {/* Text Section */}
          <Box height={xs||sm ? '65vh' : '70vh'} width={xs ? "100%" : sm ? "90%" : "100%"} mx="auto" color='black'>
            <Stack height = '100%' alignItems='start' justifyContent='space-between'>
              <Box display="flex" alignItems="center" gap="8px" data-aos="fade-right">
                <Box width="40px" bgcolor="black" height="2px"></Box>
                <Typography fontSize="20px">{t('home.helperText')}</Typography>
              </Box>
              
              <Typography fontWeight="500" fontSize={{ xs: '32px', sm: '42px' }} 
                          data-aos="fade-right" data-aos-delay="200">
                <span style={{ color: 'green', fontWeight: '500' }}>{t('home.heading.first')}</span>{' '}
                {t('home.heading.second')}
              </Typography>
              
              <Typography fontSize="18px" lineHeight="28px" data-aos="fade-right" data-aos-delay="400">
                {t('home.mainText')}
              </Typography>
              
              {/* Download Button */}
              <Button disableTouchRipple data-aos="zoom-in" data-aos-delay="400" 
                      onClick={() => handleDownload(uploadImages)}>
                <Stack bgcolor="green" color="#FFFFFF" width="250px" height="60px" justifyContent="center" 
                       borderRadius="10px">
                  <Typography variant="h4" fontWeight="600" fontSize="16px">
                    {t('home.downloadCatalog')}
                  </Typography>
                  <Typography fontSize="10px">{t('home.buttonText')}</Typography>
                </Stack>
              </Button>

            </Stack>
          </Box>
  
          {/* Image Section */}
          <Box display="flex" flexDirection={xs||sm ? "column" : "row"} height="auto" px="12px" gap="8px">
            <Box component="img" src="/home1.webp" height={xs ? "40vh" : sm ? '60vh' : '70vh'} 
                 width={xs ? "100%" : sm ? "90%" : "60%"} mx="auto"
                 borderRadius="8px" data-aos="zoom-in"></Box> {/* main left image */}
                 
            <Box display="flex" flexDirection="column" height="auto" 
                 width={xs ? "100%" : sm ? "90%" : "40%"} gap="8px" mx="auto"> {/* main right part */}
                  
              <Box height="auto" width="100%" display="flex" flexDirection={xs ? "column" : "row"} gap="12px">
                <Box component="img" src="/home2.jfif" height={xs||sm ? "30vh" : "25vh"} 
                     width={xs ? "100%" : sm ? "60%" :"70%"} 
                     borderRadius="8px" ml={xs||sm ? "none" : "auto"} data-aos="fade-left" />

                <Box display={xs||sm ? "block" : "none"} width={sm ? "40%" :'100%'} 
                     height={xs ? "15vh" : "100%"}> 
                  <Guaranties screen={'small'} />
                </Box>

              </Box>

              <Box component="img" src="/home3.webp" height={xs ? "30vh" : sm ? "50vh" : "45vh"} width="100%" 
                   borderRadius="8px" data-aos="fade-up" />
            </Box>
          </Box>

        </Box>
      </Box>
    );
};

export default HomeImages;
import { Box, Stack, Typography } from '@mui/material'
import {Swiper, SwiperSlide} from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from 'react-i18next';
import Product from './Product';
import useScreenSizes from '../../hooks/ScreenSizes';

const CatalogPage = () => {
    const {t} = useTranslation()
    const {xlgScreen, lgScreen, mdScreen, smScreen} = useScreenSizes()
    const products = t('category.products', {returnObjects : true})
    const images = ['/categoryPage/category1.png', '/categoryPage/category2.png', '/categoryPage/category3.png', '/categoryPage/category4.png', ]
  return (
    <Box height='auto' width = '100%'>
        <Stack height='auto' width  = '100%'>
            <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                      }}
            style={{width : '90%'}}>
                {
                    images?.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx} style={{ height: '25rem',
                                width: '100%', 
                                borderRadius : '10px',
                                overflow: 'hidden',
                                position : 'relative'
                                           }}> 
                                 <Box component='img' height='100%' width='100%' src={item} position='absolute' zIndex={1}/>  
                                 <Box height='100%' width='100%' bgcolor='rgba(24, 24, 24, 0.16)' position='absolute' zIndex={2}>
                           <Box height='100%' width='100%' display='flex' justifyContent='flex-start' alignItems='flex-start'>
                              <Typography color='rgba(22, 19, 19, 0.78)' fontSize='24px' fontWeight='600' m='24px 0 0 24px' height='auto'>
                                 {t('catalog.swiperHeading')}
                              </Typography>
      
                           </Box>
                                 </Box>   
                            </SwiperSlide>
                        )
                    })
                }
    
            </Swiper>
            <Box height='auto' width='90%' mx='auto' my='1rem' display='grid' gridTemplateColumns={smScreen ? '1fr' : mdScreen ? 'repeat(2,1fr)': lgScreen ? 'repeat(3,1fr)' : 'repeat(4, 1fr)'} flexWrap='wrap' gap='12px'>
                {
                    products?.map((product, idx) => {
                       return ( <Product product={product} key={idx}/>)
                    })
                }

            </Box>
            


        </Stack>

    </Box>
  )
}

export default CatalogPage

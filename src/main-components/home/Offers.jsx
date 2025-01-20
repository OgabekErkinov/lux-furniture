import { Box, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'


const Offers = () => {
  const {t} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const textSize = smScreen ? '16px' : mdScreen ? '16px' : '18px'
  return (
    <Box width='100%' height={xlgScreen ? '5rem' : '100%'}>
          <Box height='100%' width='100%' color='#000000' display='grid' 
               gridTemplateColumns={xlgScreen|| lgScreen ? 'repeat(3, 1fr)' : '1fr'}
               gridTemplateRows={xlgScreen||lgScreen ? '1fr' : '1fr 1fr 1fr'}>

             <Box display='flex' gap='0.5rem' alignItems='center' justifyContent='center' 
                  width='100%' data-aos = 'fade-down'>
                 <Box component='img' src='/checkmark.svg' height={smScreen ? '16px' : '24px'} 
                      width={smScreen ? '16px' : '24px'}/>
                 <Typography fontSize={textSize}>{t('home.guarantyTime')}</Typography>
             </Box>

             <Box display='flex' gap='0.5rem' alignItems='center' justifyContent='center' 
                  width='100%' data-aos = 'fade-down' data-aos-delay = '200'>
               <Box component='img' src='/checkmark.svg' height={smScreen ? '16px' : '24px'} 
                    width={smScreen ? '16px' : '24px'}/>
               <Typography fontSize={textSize}>{t('home.deliveryCost')}</Typography>
             </Box>

             <Box display='flex' gap='5px' alignItems='center' justifyContent='center' 
                  width='100%' data-aos = 'fade-down' data-aos-delay = '400'>
               <Box component='img' src='/checkmark.svg' height={smScreen ? '16px' : '24px'} 
                    width={smScreen ? '16px' : '24px'}/>
               <Typography fontSize={textSize}>{t('home.payWhen')}</Typography>
             </Box>

          </Box>
    </Box>
  )
}

export default Offers
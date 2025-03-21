import { Box, Link, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import useScreenSizes from '../../hooks/ScreenSizes'

const SocialNetworks = () => {
  const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
 
    const {t} = useTranslation()
  return (
    <Box height={xlgScreen ? '5rem' : 'auto'} width='100%' display='flex' alignItems='center'>
        <Stack height='100%' width='100%' direction={smScreen ? 'column' : !xlgScreen ?  'row' : 'column'} alignItems='center' justifyContent='center' gap='0.5rem'>
           <Typography fontSize={smScreen ? '12px' : mdScreen ? '14px' : '16px'} textAlign={smScreen ? 'center' : mdScreen ? 'start' : 'center'}>{t('onlineAsk')}</Typography>
           <Stack direction='row' gap={smScreen ? '4px' : '12px'} justifyContent='center'>
               <Link href = '#' sx = {{height : 'auto', width : '100%'}}>
                  <FaWhatsapp color="green" size={!smScreen ? '48px' : '20px'}/>
              </Link>
              <Link href = '#' sx = {{height : 'auto', width : 'auto'}}>
                 <FaTelegram color="#20aabd" size={!smScreen ? '48px' : '20px'}/> 
              </Link>
           </Stack>
        </Stack> 
    </Box>
  )
}

export default SocialNetworks
import { Box, Link, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import useScreenSizes from '../../hooks/ScreenSizes'

const SocialNetworks = ({bbottom}) => {
  const {smScreen, mdScreen, xlgScreen} = useScreenSizes()
 
    const {t} = useTranslation()
  return (
    <Box height={xlgScreen ? '5rem' : 'auto'} width='100%' display={xlgScreen|| bbottom ? 'flex' : 'none'} alignItems='center'>
        <Stack height='100%' width='100%' direction={smScreen ? 'column' : !xlgScreen ?  'row' : 'column'} alignItems='center' justifyContent='center' gap='0.5rem'>
           {
            xlgScreen && <Typography fontSize='14px'
                                     textAlign='center'>
                                {t('onlineAsk')}
                         </Typography>
           }
           <Stack direction='row' gap={smScreen ? '4px' : '12px'} justifyContent='center'>
               <Link height='100%' width='100%' href = 'https://chinar.uz' target = '_blank'>
                  <FaWhatsapp color="green" size={!smScreen ? '36px' : '20px'}/>
              </Link>
              <Link href = 'https://t.me/@Only_2008' target = '_blank' height='100%' width='100%'>
                 <FaTelegram color="#20aabd" size={!smScreen ? '36px' : '20px'}/> 
              </Link>
           </Stack>
        </Stack> 
    </Box>
  )
}

export default SocialNetworks
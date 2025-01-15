import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import useScreenSizes from '../../hooks/ScreenSizes'

const SocialNetworks = () => {
  const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
 
    const {t} = useTranslation()
  return (
    <Box height='5rem' width='100%'>
        <Stack height='100%' width='100%' direction={smScreen ? 'column' : !xlgScreen ?  'row' : 'column'} alignItems='center' justifyContent='center' gap='0.5rem'>
           <Typography fontSize={smScreen ? '12px' : mdScreen ? '14px' : '16px'} textAlign='start'>Ask a question, we are online.</Typography>
           <Stack direction='row' gap={smScreen ? '4px' : '12px'} justifyContent='center'>
              <FaWhatsapp color="green" size={!smScreen ? '48px' : '20px'}/>
              <FaTelegram color="#20aabd" size={!smScreen ? '48px' : '20px'}/> 
           </Stack>
        </Stack> 
    </Box>
  )
}

export default SocialNetworks
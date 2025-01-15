import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import useScreenSizes from '../../hooks/ScreenSizes'

const SocialNetworks = () => {
  const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
 
    const {t} = useTranslation()
  return (
    <Box height='5rem' width='100%'>
    <Stack height='100%' width='100%' direction={!xlgScreen ? 'row' : 'column'} alignItems='center' justifyContent='center' gap='0.5rem'>
          <Typography fontSize={smScreen ? '8px' : '20px'} textAlign='center'>{t("onlineAsk")}</Typography>
          <Stack direction='row' gap='12px'>
            <FaWhatsapp color="green" size={'36px'}/>
            <FaTelegram color="#20aabd" size={'36px'}/> 
          </Stack>
    </Stack> 
</Box>
  )
}

export default SocialNetworks
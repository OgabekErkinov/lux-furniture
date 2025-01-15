import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const SocialNetworks = () => {
 
    const {t} = useTranslation()
    console.log(t("onlineAsk"))
  return (
    <Box height='5rem' width='100%' display={{xs : 'none', sm : 'block'}}>
    <Stack height='100%' width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
          <Typography fontSize='20px' textAlign='center'>{t()}</Typography>
          <Stack direction='row' gap='12px'>
            <FaWhatsapp color="green" size={'36px'}/>
            <FaTelegram color="#20aabd" size={'36px'}/> 
          </Stack>
    </Stack> 
</Box>
  )
}

export default SocialNetworks
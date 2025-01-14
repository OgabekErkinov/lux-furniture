import { Box, Stack, Typography } from '@mui/material'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const SocialNetworks = () => {
  return (
    <Box height='5rem' width='12rem' display={{xs : 'none', sm : 'block'}}>
    <Stack height='100%' width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
          <Typography fontSize='' textAlign='center'>Задайте вопрос, мы онлайн</Typography>
          <Stack direction='row' gap='8px'>
            <FaWhatsapp color="green" size={'24px'}/>
            <FaTelegram color="#20aabd" size={'24px'}/> 
          </Stack>
    </Stack> 
</Box>
  )
}

export default SocialNetworks
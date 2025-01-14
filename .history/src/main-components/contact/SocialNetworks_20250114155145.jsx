import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const SocialNetworks = () => {
  return (
    <Box height={{sm : '50%', md : '100%'}} width={{sm : '50%', md : '20%'}} display={{xs : 'none', sm : 'block'}}>
    <Stack height='100%' width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
          <Typography fontSize={{xs : '8px', md : '12px'}} textAlign='center'>Задайте вопрос, мы онлайн</Typography>
          <Stack direction='row' gap='8px'>
            <FaWha color="green" size={'24px'}/>
            <FaTelegram color="#20aabd" size={'24px'}/> 
          </Stack>
    </Stack> 
</Box>
  )
}

export default SocialNetworks
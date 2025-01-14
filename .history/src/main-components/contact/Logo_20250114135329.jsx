import { Box, Stack, Typography } from '@mui/material'
import { logoUrl } from "../../constants/constantas"
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const Logo = () => {
  return (
    <Stack direction='row' height='auto' width='auto' gap='12px'>
            <Box component='img' src={logoUrl} height='5rem' width='14rem'/> 
                    <Typography height='auto' width='5rem' fontSize={{xs : '10px', sm : '12px'}}>
                            Производство плетенной мебели премиун класса в Ташкенте
                    </Typography>
            </Stack>
  )
}

export default Logo
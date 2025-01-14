import { Box, Stack, Typography } from '@mui/material'
import { logoUrl } from "../../constants/constantas"
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const Logo = () => {
  return (
    <Stack direction='row' height='auto' width='auto' gap='12px'>
            <Box component='img' src={logoUrl} height='5rem' width='14rem'/>
                <Stack direction='row' alignItems='center' gap='1rem'>
                    <Typography height='auto' width={{sm : '8rem'}} fontSize={{xs : '10px', sm : '12px'}}>
                            Производство плетенной мебели премиун класса в Ташкенте
                    </Typography>
                    <Stack direction='row' width='4rem' gap='0.5rem' display={{xs : 'block', sm : 'none'}}>
                        <FaWhatsapp color="green" size={'24px'}/>
                        <FaTelegram color="#20aabd" size={'24px'}/> 
                    </Stack>
                </Stack>
            {/* ............................................................................................... */}
            </Stack>
  )
}

export default Logo
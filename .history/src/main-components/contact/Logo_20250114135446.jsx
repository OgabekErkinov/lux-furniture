import { Box, Stack, Typography } from '@mui/material'
import { logoUrl } from "../../constants/constantas"


const Logo = () => {
    const {} = 
  return (
    <Stack direction='row' alignItems='center' height='auto' width='auto' gap='12px'>
            <Box component='img' src={logoUrl} height='5rem' width='15rem'/> 
                    <Typography height='auto' width='7rem' fontSize={{xs : '10px', sm : '12px'}}>
                            Производство плетенной мебели премиун класса в Ташкенте
                    </Typography>
            </Stack>
  )
}

export default Logo
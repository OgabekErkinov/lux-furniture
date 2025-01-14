import { Box, Stack, Typography } from '@mui/material'
import { logoUrl } from "../../constants/constantas"
import useScreenSizes from '../../hooks/ScreenSizes'


const Logo = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const logoDescDisplay = xlgScreen ? 'block' : 'none'
    const logoHeightSize = xlgScreen ? '5rem' : lgScreen ? '4rem' : '3rem'
  return (
    <Stack direction='row' alignItems='center' height='auto' width='auto' gap='12px'>
            <Box component='img' src={logoUrl} height={logo} width='15rem'/> 
            <Typography height='auto' width='7rem' display={logoDescDisplay} fontSize={{xs : '10px', sm : '12px'}}>
                    Производство плетенной мебели премиун класса в Ташкенте
            </Typography>
            </Stack>
  )
}

export default Logo
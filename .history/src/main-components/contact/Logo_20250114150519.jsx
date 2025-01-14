import { Box, Stack, Typography } from '@mui/material'
import { logoUrl } from "../../constants/constantas"
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'


const Logo = () => {
    const {t} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const logoDescDisplay = xlgScreen ? 'block' : 'none'
    const logoHeightSize = xlgScreen ? '5rem' : lgScreen ? '4rem' : '3rem'
    const logoWidthSize = xlgScreen ? '15rem' : lgScreen ? '12rem' : '9rem'
  return (
    <Stack direction='row' alignItems='center' height='auto' width='auto' gap='12px'>
            <Box component='img' src={logoUrl} height={logoHeightSize} width={logoWidthSize}/> 
            <Typography height='auto' width='7rem' display={logoDescDisplay} fontSize='12px'>
                    {t('logoDescription')}
            </Typography>
            </Stack>
  )
}

export default Logo
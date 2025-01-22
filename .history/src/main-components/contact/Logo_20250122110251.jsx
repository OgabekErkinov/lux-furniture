import { Box, Link, Stack, Typography } from '@mui/material'
import { logoUrl } from "../../constants/constantas"
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'
import LazyLoading from '../../helper-components/loading/LazyLoading'


const Logo = () => {
    const { t } = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const logoDescDisplay = xlgScreen ? 'block' : 'none'
    const logoHeightSize = xlgScreen ? '6rem' : lgScreen ? '4rem' : '3rem'
    const logoWidthSize = xlgScreen ? '18rem' : lgScreen ? '12rem' : '9rem'
  return (
    <Stack direction='row' alignItems='center' height='auto' width='auto' gap='12px'>
           {
            <Link>
            </Link>
            logoUrl ? <Box component='img' src={logoUrl} height={logoHeightSize} width={logoWidthSize}/> : <LazyLoading/>
           } 
            <Typography height='auto' width='7rem' display={logoDescDisplay} fontSize='12px'>
               {t('logoDescription')}
            </Typography>
    </Stack>
  )
}

export default Logo
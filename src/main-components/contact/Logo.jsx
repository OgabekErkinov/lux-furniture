import { Box, Link, Stack, Typography } from '@mui/material'
import { logoUrl } from "../../constants/constantas"
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'
import LazyLoading from '../../helper-components/loading/LazyLoading'


const Logo = () => {
    const { t } = useTranslation()
    const {lgScreen, xlgScreen} = useScreenSizes()
    const logoDescDisplay = xlgScreen ? 'block' : 'none'
    const logoHeightSize = xlgScreen ? '4rem' : '3rem'
    const logoWidthSize = xlgScreen ? '14rem' : lgScreen ? '10rem' : '8rem'
    return (
        <Stack direction='row' alignItems='center' height='auto' width='auto' gap='12px'>
           
            <Link href = '/' height='auto' width='auto'>
              {
               logoUrl ? <Box component='img' src={logoUrl} height={logoHeightSize} width={logoWidthSize}/> : <LazyLoading/>
              }
            </Link>
            
            <Typography height='auto' width='6rem' display={logoDescDisplay} fontSize='12px'>
               {t('logoText')}
            </Typography>
        </Stack>
  )
}

export default Logo
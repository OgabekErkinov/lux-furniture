import { Box, Stack, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'


const WorkTime = () => {
  const {t} = useTranslation()
  const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box height='100%' width='100%' display={xlgScreen}>
        <Stack height='100%' width='100%' alignItems='flex-end' justifyContent='center' gap='4px'>
            <Typography fontSize={smScreen ? '12px' : '16px'} >{t('callUs')}</Typography>
            <Typography fontWeight='600'  
                        fontSize={smScreen ? '8px' : mdScreen  ? '10px' : lgScreen ? '16px' : '20px'}>
                        +998 71 500 00 00
            </Typography>
        </Stack>
    </Box>
  )
}

export default WorkTime
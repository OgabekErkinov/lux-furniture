import { Box, Stack, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'


const WorkTime = () => {
  const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box height='100%' width='100%'>
        <Stack height='100%' width='100%' alignItems='flex-start' justifyContent='center' gap='4px'>
            <Typography fontSize={smScreen ? '8px' : '12px'} >Звоните: 10:00 - 20:00</Typography>
            <Typography fontWeight='600' fontSize={smScreen ? '6px' : mdScreen  ? '12px' : '16px'}>+998 71 500 00 00</Typography>
        </Stack>
    </Box>
  )
}

export default WorkTime
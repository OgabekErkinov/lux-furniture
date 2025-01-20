import { Box, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'

const Heading = ({furnitures}) => {
    const {smScreen, mdScreen, lgScreen} = useScreenSizes()
  return (
    <Box mb="1rem" width='100%' height={}>
        <Typography variant="h4" fontWeight="700" color='#000000' fontSize={smScreen ? '18px' : mdScreen ? '24px' : '36px'}
                    width={smScreen||mdScreen ? '100%' : lgScreen ? '80%' : '50%'}>
            {furnitures.heading}
        </Typography>
        <Typography color="textSecondary" my='1rem'>{furnitures.helperText}</Typography>
    </Box>
  )
}

export default Heading
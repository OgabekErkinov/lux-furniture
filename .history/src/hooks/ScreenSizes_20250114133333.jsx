import { useMediaQuery } from '@mui/material'

const ScreenSizes = () => {
  const smScreen = useMediaQuery('min-width : 300px')
  const mdScreen = useMediaQuery('min-width : 480px')
  const lgScreen = useMediaQuery('min-width : 640px')
  const xlgScreen = useMediaQuery('min-width : 960px')

  return {smScreen, mdScreen, lgScreen, xlgScreen}
}

export default ScreenSizes
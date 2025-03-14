import { useMediaQuery } from '@mui/material'

const useScreenSizes = () => {
  const smScreen = useMediaQuery('(min-width: 300px ) and (max-width : 479px)')
  const mdScreen = useMediaQuery('(min-width: 480px) and (max-width : 639px')
  const lgScreen = useMediaQuery('(min-width: 640px) and (max-width : 959px)')
  const xlgScreen = useMediaQuery('(min-width: 960px)')

  return {smScreen, mdScreen, lgScreen, xlgScreen}
}

export default useScreenSizes
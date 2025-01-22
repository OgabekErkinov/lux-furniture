import { Box } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'
import ImagesFurnitures from './ImagesFurnitures'
import Offers from './Offers';
import LeftSection from './LeftSection';


const Home = () => {
    const {lgScreen, xlgScreen} = useScreenSizes()
  
  return (
    <Box id width='98%' height='auto' px='32px' m=' auto' display='grid' gridTemplateColumns='1fr' 
         rowGap='5%' justifyContent='center' color='black' gridTemplateRows='1fr'>

        <Box height='auto' width='100%' display='grid' gap='1rem' justifyContent='center'
             gridTemplateColumns={xlgScreen|| lgScreen ? '1fr 1.5fr' : '1fr'}>
             {/* ........................................................... */}
             <LeftSection/>
             <ImagesFurnitures/>
             {/* ........................................................... */}
        </Box>  
    </Box>
  )
}

export default Home
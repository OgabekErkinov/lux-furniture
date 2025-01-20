import { Box } from "@mui/material"
import Aos from "aos"
import 'aos/dist/aos.css';
import i18next from '../../translator/configTranslator'
import { useEffect } from "react"
import useScreenSizes from '../../hooks/ScreenSizes'
import { homeImages } from '../../constants/constantas'
import Offers from "./Offers";


const ImagesFurnitures = () => {
  const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
      useEffect(() => {
        Aos.init({
          duration : 1500
        })
      }, [])
  return (
    <Box height='100%' width='98%' display='grid' 
         gridTemplateColumns={smScreen || mdScreen ? '1fr' : '1.6fr 1fr'} gap='2%' justifyContent='center'>
        <Box component='img' src={homeImages.img1} height={xlgScreen ? '100%' : '90%'} width='100%' 
             borderRadius='0.5rem' data-aos = 'zoom-in'/>
             
        <Box height={xlgScreen ? '100%' : '90%'} width='100%' display='grid' gridTemplateRows={smScreen || mdScreen ? '1fr' : '1fr 3fr'}
             gridTemplateColumns={smScreen || mdScreen ? '1fr 1.2fr' : '1fr'} gap='5%'>
        
        {/* .....first box in top................................................................. */}

           <Box height='100%' width='100%' display='grid' gridTemplateColumns={smScreen || mdScreen ? '1fr' : '1fr 4fr 0fr'}
                gridTemplateRows={smScreen||mdScreen ? '0fr 1fr 1fr' : '1fr'}>
                  <Box></Box>
                     <Box component='img' src={homeImages.img2} height='100%' width='100%' borderRadius='0.5rem' 
                            data-aos = 'fade-left'/>
                      <Box height='100%'>
                        {smScreen||mdScreen && <Offers/>}
                      </Box>
                  </Box>
                  
        {/* ........second box in bottom........................................................... */}
                  <Box component='img' src={homeImages.img3} height='100%' width='100%' borderRadius='0.5rem'
                          data-aos = 'fade-up'/>

        </Box>
    </Box>
  )
}

export default ImagesFurnitures
import React from 'react'

const ImagesFurnitures = () => {
  return (
    <Box height='100%' width='98%' display='grid' gridTemplateColumns={smScreen || mdScreen ? '1fr' : '2fr 1fr'} gap='5%' 
                 justifyContent='center'>

                <Box component='img' src={homeImages.img1} height='100%' width='100%' borderRadius='0.5rem'
                     data-aos = 'zoom-in'/>
                <Box height='100%' width='100%' display='grid' gridTemplateRows={smScreen || mdScreen ? '1fr' : '1fr 3fr'} gap='5%'>
                   <Box height='100%' width='100%'>
                      {smScreen || mdScreen && <Box display='grid' gridTemplateColumns='1fr'>
                        
                        </Box>}
                      <Box component='img' src={homeImages.img2} height='100%' width='70%' borderRadius='0.5rem' ml='auto'
                           data-aos = 'fade-left'/>
                      </Box>
                    
                      <Box component='img' src={homeImages.img3} height='100%' width='100%' borderRadius='0.5rem'
                          data-aos = 'fade-up'/>

                </Box>
           </Box>
  )
}

export default ImagesFurnitures
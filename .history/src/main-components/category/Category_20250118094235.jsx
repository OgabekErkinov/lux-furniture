import { Box, Typography, Stack} from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const Category = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
    const categories = t('categorySection.categories', {returnObjects : true})
    const images = ['/category/complekt.png','/category/osma.png','/category/sofakreslo.png','/category/lounger.png']
  return (
    <Box width='96%' height='30rem' px='12px' color='black'>
      <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center' gap='1rem'>

        {/* .................categories heading............................................... */}
        <Box width={smScreen ? '80%' : mdScreen ? '60%' : lgScreen ? '60%' : '50%'} height='40%' display='flex' flexDirection='column' justifyContent='space-evenly' mx='auto' >
            <Typography variant='h4' fontSize={xlgScreen ? '40px' : lgScreen ? '28px' : '20px'} 
                        textAlign='center' fontWeight='600'>
                        {t('categorySection.heading')}
            </Typography>
            <Typography textAlign='center' fontSize='12px'>{t('categorySection.helperHeading')}</Typography>
        </Box>

        {/* ........categories with images ................................................... */}

        <Box height = '50%' width = '100%' textAlign='center'>
           <Box width='90%' height='100%' mx='auto' display='grid' gridTemplateColumns={smScreen || mdScreen ? 'repeat(2,1fr)' : 'repeat(4,1fr)'} gap='1rem'>
           {
                categories.map((category, idx) => {
                    return ( 
                      <Box height='100%' width='100%' position = 'relative' key={idx} borderRadius='0.5rem'
                           sx={{backgroundImage : `url(${category.image})`, backgroundSize : 'cover', backgroundPosition : 'center'}}>
                         <Stack height='100%' width='100%' bgcolor='rgba(92, 91, 92, 0.1)' justifyContent='flex-start' >
                            <Box display='flex' width='98%' height='10%'>
                               <Typography>{category?.name}</Typography>
                               
                            </Box>
                         </Stack>      
                      </Box>
                         
                    )
                })
            }

           </Box>


        </Box>

      </Box>
    </Box>
    
  )
}

export default Category

import { Box, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'

const Category = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box>
        
    </Box>
    <Box id = 'category' width='100%' height='5rem' px='12px' color='black' my='1rem' 
                         display='grid' gridTemplateColumns='1fr' gridTemplateRows='1fr 2fr' >
        <Box width='60%' display='grid' gridTemplateRows='2fr 1fr' justifyContent='center' mx='auto' gap='5px'>
            <Typography variant='h4' fontSize={xlgScreen ? '40px' : lgScreen ? '32px' : '20px'} 
                        textAlign='center' fontWeight='600'>
                    Производим 4 основных категории мебели
            </Typography>
            <Typography textAlign='center' fontSize='12px'>более 200 видов продуктов во всем ассортименте</Typography>
        </Box>

        {/* ........categories with images ................................................... */}
        <Box width='100%' height = '100%' display='grid' gridTemplateColumns={smScreen ? '1fr' : mdScreen ? '1fr 1fr' : 'repeat(4, 1fr)'} gap='10px'>
            <Box height='100%' width='100%' >
                <Box component='img' src='/category/complekt.png' height='100%' width='100%' borderRadius='10px' />
                {/* <Box  position='absolute' top='5px' left='5px' zIndex='2' width={smScreen ? '30px' : '12px'} >
                    <Box width='100%' display='grid' gridTemplateColumns='1fr 1fr' gap='10px' mx='auto'>
                       <Typography color='#FFFFFF' fontSize={smScreen ? '6px' : '12px'}>Комплекты</Typography>
                       <Typography bgcolor='green' fontSize={smScreen ? '6px' : '12px'}>15 продуктов</Typography>
                    </Box>         
                </Box> */}
            </Box>
            <Box height='100%' width='100%' borderRadius='10px'>
                <Box component='img' src='/category/osma.png' height='100%' width='100%' borderRadius='10px'/>
            </Box>
            <Box height='100%' width='100%' borderRadius='10px'>
                <Box component='img' src='/category/sofakreslo.png' height='100%' width='100%' borderRadius='10px'/>
            </Box>
            <Box height='100%' width='100%' borderRadius='10px'>
                <Box component='img' src='/category/lounger.png' height='100%' width='100%' borderRadius='10px'/>
            </Box>
        </Box>

    </Box>
  )
}

export default Category

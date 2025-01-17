import { Box, Button, Typography } from "@mui/material"
import useScreenSizes from "../../hooks/ScreenSizes"
import { categoryItems } from "../../constants/constantas"

const Catalog = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box width='100%' height='10rem' display='grid' gridTemplateRows='1fr 3fr'>
        
    {/*.....heading section .............................................. */}
    <Box width='100%' height='100%' display='grid' gridTemplateRows='1fr 1fr' justifyContent='center'>

    {/* .....heading........................................................ */}
        <Typography variant="h4" fontWeight='700' fontSize={smScreen ? '24px' : mdScreen ? '28px' : '36px'}>
             Каталог готовых изделий
        </Typography>
        <Typography fontSize='18px'>которые можно купить здесь и сейчас</Typography>

    </Box>

    {/* ............change category ........................................ */}
    <Box width='100%' height='100%' display='grid' gridTemplateColumns='repeat(4, 1fr)'>
        {
            categoryItems.map((item, idx) => {
                return (
                    <Box height='2rem' width='100%' key={idx}>
                        <Button sx={{height : '100%', width : '100%'}}>
                            <Typography color="black">{item.name}</Typography>
                        </Button>
                    </Box>
                )
            })
        }

    </Box>

    </Box>

    
  )
}

export default Catalog

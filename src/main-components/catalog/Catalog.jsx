import { Box, Button, Typography, Stack } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import ChangeCategory from "./ChangeCategory"
import Products from "./Products"
import useScreenSizes from "../../hooks/ScreenSizes"
import { useNavigate } from "react-router-dom"

const Catalog = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
    const catalogies = t('catalog.catalogies', {returnObjects : true})
    const [currentCatalog, setCurrentCatalog] = useState(catalogies[0].name)
    const [currentProducts, setCurrentProducts] = useState(catalogies[0].products)
    const navigate = useNavigate()
    const handleNavigate = () => {
      navigate('/catalog')
      window.scrollTo(0,0)
    }

    const handleClick = (ctlg) => {
        setCurrentCatalog(ctlg.name)
        setCurrentProducts(ctlg.products)
    }
  return (
    <Box width = '100%' height = 'auto' id = 'catalog' mb='1rem'>
      <Box width='100%' height='100%' display='grid' gridTemplateRows='auto auto auto auto' rowGap='2rem'>

        {/* heading */}
          <Box width='100%' height='100%' display='grid' gridTemplateRows='1fr 1fr' justifyContent='center' 
               color='#000000' textAlign='center' rowGap='0.5rem' >
               <Typography variant="h4" fontWeight='700' fontSize={smScreen ? '20px' : mdScreen ? '24px' : '32px'}
                           data-aos = 'fade-up'>
                  { t('catalog.heading')}
               </Typography>
              <Typography fontSize='10px' data-aos = 'fade-up'>{t('catalog.helperHeading')}</Typography>
          </Box>


        <ChangeCategory handleClick={handleClick} currentCatalog={currentCatalog}/>
        <Products products={currentProducts}/>
        <Stack width='100%' alignItems='center' gap='12px' mx='auto'>
            <Box component='img' src="/gocatalog.png" height='60vh' width='100%' borderRadius='12px'/>
            <Button onClick={handleNavigate}
                     disableTouchRipple sx={{'&:hover' : {bgcolor : 'green'}, 
                                             bgcolor : 'green', color : '#ffffff', width : '12rem'}}>
              {t('catalog.goCatalog')}</Button>
        </Stack>
    </Box> 

    </Box>
    
  )
}

export default Catalog

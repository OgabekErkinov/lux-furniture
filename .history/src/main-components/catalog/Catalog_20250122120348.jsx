import { Box} from "@mui/material"
import useScreenSizes from "../../hooks/ScreenSizes"
import Heading from "./Heading"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import ChangeCategory from "./ChangeCategory"
import Products from "./Products"

const Catalog = () => {
    const {t} = useTranslation()
    const catalogies = t('catalogSection.catalogies', {returnObjects : true})
    const [currentCatalog, setCurrentCatalog] = useState(catalogies[0].name)
    const [currentProducts, setCurrentProducts] = useState(catalogies[0].products)

    const handleClick = (ctlg) => {
        setCurrentCatalog(ctlg.name)
        setCurrentProducts(ctlg.products)
    }
  return (
    <Box width = '100%' height = 'auto' id = 'catalog'>
      <Box width='100%' height='100%' display='grid' gridTemplateRows='auto auto auto auto' rowGap='2rem'>
        <Heading/>
        <ChangeCategory handleClick={handleClick} currentCatalog={currentCatalog}/>
        <Products products={currentProducts}/>
        <Box></Box>
    </Box> 

    </Box>
    
  )
}

export default Catalog

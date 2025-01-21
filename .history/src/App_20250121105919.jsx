import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import useScreenSizes from "./hooks/ScreenSizes"
import '@fontsource/playfair-display';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/playfair-display/900.css';
import Contact from "./main-components/contact/Contact"
import Navbar from "./main-components/navbar/Navbar"
import Home from "./main-components/home/Home"
import Category from "./main-components/category/Category"
import Catalog from "./main-components/catalog/Catalog"
import About from "./main-components/about/About"
import Furnitures from "./main-components/furnitures/Furnitures"
import Collection from "./main-components/collection/Collection"
import DownloadSection from "./main-components/downloadSection/DownloadSection"
import Offers from "./main-components/home/Offers";


function App() {
  const theme = createTheme({
    typography : {
      fontFamily : "Playfair Display, serif"
    }
  })
  const {lgScreen, xlgScreen} = useScreenSizes()

  return (
     <ThemeProvider theme={theme}>
        <Stack height='auto' width='100%' alignItems='center' px='1rem' spacing={2} gap='2rem'>
            <Box height={xlgScreen ? '10rem' : '40vh'} width='100%'></Box>
            <Contact/>
            {/* <Navbar isNavbar={xlgScreen}/> */}
            {/* <Home/> */}
            {/* {(xlgScreen||lgScreen) && <Offers/>} */}
            {/* <Category/> */}
            <Catalog/>
            {/* <About/> */}
            {/* <Furnitures/> */}
            {/* <Collection/> */}
            {/* <DownloadSection/> */}
       </Stack>
    </ThemeProvider>
    
  )
}

export default App

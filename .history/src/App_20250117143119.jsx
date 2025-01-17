import { Box, Stack } from "@mui/material"
import useScreenSizes from "./hooks/ScreenSizes"
import Contact from "./main-components/contact/Contact"
import Navbar from "./main-components/navbar/Navbar"
import Home from "./main-components/home/Home"
import Category from "./main-components/category/Category"
import Catalog from "./main-components/catalog/Catalog"


function App() {
  const {xlgScreen} = useScreenSizes()

  return (
    <Stack height='auto' width='100%' alignItems='center'>
      <Contact/>
      <Navbar isNavbar={xlgScreen}/>
      <Home/>
      <Category/>
      <Box height='5rem' width='100%' bgcolor='red' display='block'></Box>
      {/* <Catalog/> */}
    </Stack>
  )
}

export default App

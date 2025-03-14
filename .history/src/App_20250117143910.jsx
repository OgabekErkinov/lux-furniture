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
    <Stack height='auto' width='100%' alignItems='center' spacing={2}>
      <Contact/>
      <Navbar isNavbar={xlgScreen}/>
      <Home/>
      <Category/>
      {/* <Catalog/> */}
    </Stack>
  )
}

export default App

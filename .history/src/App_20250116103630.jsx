import { Stack } from "@mui/material"
import useScreenSizes from "./hooks/ScreenSizes"
import Contact from "./main-components/contact/Contact"
import Navbar from "./main-components/navbar/Navbar"

function App() {
  const {xlgScreen} = useScreenSizes()

  return (
    <>
    <Stack>
      <Contact/>
      <Navbar isNavbar={xlgScreen}/>

    </Stack>
    
    </>

    
  
  )
}

export default App

import { Stack } from "@mui/material"
import useScreenSizes from "./hooks/ScreenSizes"
import Contact from "./main-components/contact/Contact"
import Navbar from "./main-components/navbar/Navbar"

function App() {
  const {xlgScreen} = useScreenSizes()

  return (
    <Stack height='auto' width='100%'>
      <Contact/>
      <Navbar isNavbar={true}/>
      <Home
    </Stack>
  )
}

export default App

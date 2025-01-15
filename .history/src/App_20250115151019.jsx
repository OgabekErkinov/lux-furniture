import useScreenSizes from "./hooks/ScreenSizes"
import Contact from "./main-components/contact/Contact"
import Navbar from "./main-components/navbar/Navbar"

function App() {
  const {lgScreen} = useScreenSizes()

  return (
    <>
    <Contact/>
    <Navbar isNavbar={}/>
    </>

    
  
  )
}

export default App

import useScreenSizes from "./hooks/ScreenSizes"
import Contact from "./main-components/contact/Contact"
import Navbar from "./main-components/navbar/Navbar"

function App() {
  const {xlgScreen} = useScreenSizes()

  return (
    <>
    <Tack
    <Contact/>
    <Navbar isNavbar={xlgScreen}/>
    </>

    
  
  )
}

export default App

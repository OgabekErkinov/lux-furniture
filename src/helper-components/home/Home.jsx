
import useScreenSizes from "../../hooks/ScreenSizes"
import Main from "../../main-components/main/Main"
import Offers from "../../main-components/main/Offers"
import Catalog from "../../main-components/catalog/Catalog"
import About from '../../main-components/about/About'
import Furnitures from '../../main-components/furnitures/Furnitures'
import Collection from '../../main-components/collection/Collection'

const Home = () => {

    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <>
      <Main/>
      {(xlgScreen||lgScreen) && <Offers/>}
      <Catalog/>
      <About/>
      <Furnitures/>
      <Collection/>
    
      
      
    </>
  )
}

export default Home

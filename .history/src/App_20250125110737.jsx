import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState, useRef} from "react"; 
import useScreenSizes from "./hooks/ScreenSizes";
import Contact from "./main-components/contact/Contact";
import Navbar from "./main-components/navbar/Navbar";
import Home from "./main-components/home/Home";
import Category from "./main-components/category/Category";
import Catalog from "./main-components/catalog/Catalog";
import About from "./main-components/about/About";
import Furnitures from "./main-components/furnitures/Furnitures";
import Collection from "./main-components/collection/Collection";
import DownloadSection from "./main-components/downloadSection/DownloadSection";
import Offers from "./main-components/home/Offers";
import PartnerSection from './main-components/partners/PartnerSection';
import QualitySection from "./main-components/quality/QualitySection";
import DeliverySection from "./main-components/delivery/DeliverySection";
import QuestionsSections from "./main-components/questions/QuestionsSections";
import GiveQuestion from "./main-components/givingQuestion/GiveQuestion";
import GiveQuestionModal from "./main-components/modals/GiveQuestionModal"; 
import {Portal} from '@mui/material'

function App() {
  const boxRef = useRef(null)
  const theme = createTheme({
    typography : {
      fontFamily : "Playfair Display"
    }
  });
  const {smScreen,mdScreen,lgScreen, xlgScreen} = useScreenSizes();

  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal ochiqmi yo yopiqmi

  const toggleModal = () => setIsModalOpen(!isModalOpen); 

  return (
    <ThemeProvider theme={theme}>
      <Stack height='auto' maxWidth={} alignItems='center' px='1rem' spacing={1} ref = {boxRef}>
          <Box height={smScreen ? '4rem' : mdScreen ? '5rem' :  lgScreen ? '5rem' : '7rem'} width='100%'></Box>
          <Contact bbottom={'1px solid rgba(0, 0, 0, 0.2)'}/>
          {/* <Navbar isNavbar={xlgScreen}/> */}
          <Home/>
          {/* {(xlgScreen||lgScreen) && <Offers/>}
          <Category/>
          <Catalog/>
          <About/>
          <Furnitures/>
          <Collection/>
          <DownloadSection/>
          <PartnerSection/>
          <QualitySection/>
          <DeliverySection/>
          <QuestionsSections/>
          <GiveQuestion toggleModal={toggleModal} />
          <Contact bbottom=''/> */}

          
          {isModalOpen && 
                <Portal container = {boxRef.current}>
                    <GiveQuestionModal closeModal={toggleModal} />
                </Portal>
          }
      </Stack>
    </ThemeProvider>
  );
}

export default App;

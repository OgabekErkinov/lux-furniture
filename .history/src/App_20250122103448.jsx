import { Box, createTheme, Stack, ThemeProvider, Portal } from "@mui/material";
import { useState } from "react"; 
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

function App() {
  const theme = createTheme({
    typography : {
      fontFamily : "Playfair Display, serif"
    }
  });

  const { lgScreen, xlgScreen } = useScreenSizes();

  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal ochiqmi yoki yopiqmi

  const toggleModal = () => setIsModalOpen(!isModalOpen);  // Modal holatini o'zgartirish

  return (
    <ThemeProvider theme={theme}>
      <Stack height="auto" width="100%" alignItems="center" px="1rem" spacing={2} gap="2rem">
        <Box height={xlgScreen ? '10rem' : '40vh'} width="100%"></Box>
        <Contact />
        <Navbar isNavbar={xlgScreen} />
        <Home />
        {(xlgScreen || lgScreen) && <Offers />}
        <Category />
        <Catalog />
        <About />
        <Furnitures />
        <Collection />
        <DownloadSection />
        <PartnerSection />
        <QualitySection />
        <DeliverySection />
        <QuestionsSections />

        {/* GiveQuestion tugmasini ko'rsatish */}
        <GiveQuestion toggleModal={toggleModal} />

        {/* Modalni shartli ravishda ko'rsatish */}
        {isModalOpen && (
          <Portal container={document.body}>
            <GiveQuestionModal closeModal={toggleModal} />
          </Portal>
        )}
      </Stack>
    </ThemeProvider>
  );
}

export default App;

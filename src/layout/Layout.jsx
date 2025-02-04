import { Outlet } from "react-router-dom";
import Contact from "../main-components/contact/Contact";
import Navbar from "../main-components/navbar/Navbar";
import DownloadSection from "../main-components/downloadSection/DownloadSection";
import PartnerSection from "../main-components/partners/PartnerSection";
import QualitySection from "../main-components/quality/QualitySection";
import DeliverySection from "../main-components/delivery/DeliverySection";
import QuestionsSections from "../main-components/questions/QuestionsSections";
import GiveQuestion from "../main-components/givingQuestion/GiveQuestion";
import { Box, Portal, Stack } from "@mui/material";
import GiveQuestionModal from "../main-components/modals/GiveQuestionModal";
import { useRef } from "react";
import useScreenSizes from "../hooks/ScreenSizes";
import i18next from "i18next";
import i18n from '../translator/configTranslator'

const Layout = ({ toggleModal, isModalOpen }) => {
    const boxRef = useRef(null);
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  
    return (
      <Stack height="auto" maxWidth="1440px" alignItems="center" px="1rem" spacing={1} gap="0.5rem" ref={boxRef}>
        <Contact bbottom="1px solid rgba(0, 0, 0, 0.2)" />
        <Box height={smScreen ? '4rem' : '5rem'} width='100%'></Box>
        <Navbar isNavbar={'true'} />
        <Outlet />
        <DownloadSection />
        <PartnerSection />
        <QualitySection />
        <DeliverySection />
        <QuestionsSections />
        <GiveQuestion toggleModal={toggleModal} />
        <Contact bbottom="" />
  
        {isModalOpen && (
          <Portal container={boxRef.current}>
            <GiveQuestionModal closeModal={toggleModal} />
          </Portal>
        )}
      </Stack>
    );
  };
  
  export default Layout;
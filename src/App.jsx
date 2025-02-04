import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState, useRef } from "react"; 
import { Route, Routes, useNavigate } from "react-router-dom";
import useScreenSizes from "./hooks/ScreenSizes";
import GiveQuestionModal from "./main-components/modals/GiveQuestionModal"; 
import { Portal } from '@mui/material';
import CatalogPage from "./helper-components/catalog/CatalogPage";
import Layout from "./layout/Layout";
import NotFound from "./helper-components/notFound/NotFound";
import Home from "./helper-components/home/Home";
import { Favorite } from "@mui/icons-material";
import FavouritesPage from "./helper-components/favourite/Favourite";

function App() {
  const boxRef = useRef(null);
  const navigate = useNavigate()
  const theme = createTheme({
    typography: {
      fontFamily: "Playfair Display"
    }
  });

  const { smScreen, mdScreen, lgScreen, xlgScreen } = useScreenSizes();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <ThemeProvider theme={theme}>
      <Stack height="auto" maxWidth="1440px" alignItems="center" px="1rem" spacing={1} gap="0.5rem" ref={boxRef}>
        <Routes>
          <Route path="/" element={<Layout isModalOpen={isModalOpen} toggleModal={toggleModal}/>}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>

        {isModalOpen && 
          <Portal container={boxRef.current}>
            <GiveQuestionModal closeModal={toggleModal} />
          </Portal>
        }
      </Stack>
    </ThemeProvider>
  );
}

export default App;

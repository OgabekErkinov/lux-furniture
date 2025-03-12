import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Box, Stack, Typography, Link, useMediaQuery, } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { languages } from "../constants/constantas";
import CustomMenu from "./MenuBar";
import useMedia from '../hooks/useMedia'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const isMobile = useMediaQuery("(max-width:640px)");
  const { t, i18n } = useTranslation();
  const {xs, sm, md, lg, xl} = useMedia()

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: "white", color: "black", boxShadow: "none", height:'80px', zIndex:'5' }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
          
          {/* Logo va Yozuv */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Link href="/">
              <Box component="img" src='/logo.png' sx={{ height: { xs: "40px", md: "60px" }, width: "auto" }} />
            </Link>
            <Typography
              fontSize='12px'
              fontWeight="bold"
              display={{ xs: "none", sm: "block" }}
              width='128px'
            >
              {t("logoText")}
            </Typography>
          </Stack>

          {/* Til tanlash */}
            <Stack direction="row" spacing={1}>
              {languages.map((language) => {
                if (language.name !== currentLanguage) {
                  return (
                    <Box
                      key={language.name}
                      component="img"
                      src={language.flag}
                      sx={{
                        width: { xs: "28px", md: "32px" },
                        height: { xs: "18px", md: "22px" },
                        cursor: "pointer",
                        borderRadius: "2px",
                      }}
                      onClick={() => handleLanguageChange(language.name)}
                    />
                  );
                }
              })}
            </Stack>

          {/* Ijtimoiy tarmoqlar, va telefon raqam */}
          <Stack direction="row" spacing={3} alignItems="center">
 
            {/* Ijtimoiy tarmoqlar */}
            <Stack alignItems='center' spacing={0.5}>
              <Typography display={xs || sm ? 'none' : 'block'} fontSize='16px' textAlign='center'>
                  {t('socialText')}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
              <Link href="https://chinar.uz" target="_blank">
                <FaWhatsapp color="green" size={isMobile ? "24px" : "24px"} />
              </Link>
              <Link href="https://t.me/@Only_2008" target="_blank">
                <FaTelegram color="#20aabd" size={isMobile ? "24px" : "24px"} />
              </Link>
            </Stack>
            </Stack>
            

            {/* Telefon raqam */}
            <Stack direction="column" alignItems="center" spacing={0.5}
              textAlign="center" display={isMobile ? 'none' : 'flex'}>
              <Typography fontSize={{ xs: "14px", md: "16px" }}>{t("callUs")}</Typography>
              <Typography fontWeight="700" fontSize={{ xs: "16px", md: "18px" }}>+998 71 500 00 00</Typography>
            </Stack>
          </Stack>

          {/* Mobil menyu tugmasi */}
          <IconButton edge="end" sx={{ display: { xs: "block", md: "none" } }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobil menyu */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 250, p: 2, background : 'linear-gradient(to bottom, rgb(1, 75, 1), rgb(0, 212, 0))' }}>
          
          {/* Yopish tugmasi */}
          <IconButton onClick={() => setMobileOpen(false)} sx={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>

          <Stack mt={3} spacing={2} alignItems="center">
             <Box 
        display='flex' 
        flexDirection='column' 
        alignItems='center' 
        justifyContent='center' 
        height='150px' 
        width='100%' 
        boxShadow='2px 1px 5px 1px rgba(3, 83, 16, 0.5)' 
        borderRadius='8px' 
        p={2}
        sx={{ transition: 'all 0.3s ease', '&:hover': { boxShadow: '0 4px 10px rgba(3, 83, 16, 0.7)' } }}
      >
        <Box component='img' src='/logo.png' height='60px' />
        <Typography 
          fontWeight='700' 
          fontSize='24px' 
          color='rgb(0, 196, 33)' 
          sx={{ marginTop: '8px' }}>
          Lux Furniture
        </Typography>
             </Box>
             <CustomMenu isVertical={true} />
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

import React from "react";
import { Box, MenuList, MenuItem, Typography, Link, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import useMedia from "../hooks/useMedia";
import useStore from '../store/store'

const MenuBar = ({ isVertical }) => {
  const { t } = useTranslation();
  const {toggleModal} = useStore()
  const { xs, sm, md} = useMedia();
  
  const menuItems = [
    "home",
    "catalog",
    "guarantees",
    "products",
    "about",
    "delivery",
    "contacts",
  ];

  const links = t("navLinks", { returnObjects: true });
  const customLink = (link) => link === 'home' ? '/' : `#${link}`

  return (
    <Box
      height="100%"
      width="100%"
      display={isVertical || !(xs || sm) ? 'block' : 'none'} 
    >
      <MenuList
        sx={{
          width: "100%",
          height: "auto",
          display: "grid",
          gridTemplateColumns: isVertical
            ? "1fr"
            : "repeat(auto-fit, minmax(100px, 1fr))",
          gap: 1,
          textAlign: "center",
        }}
      >
        {menuItems.map((item, idx) => (
          <MenuItem
            key={idx}
            sx={{
              transition: "0.5s",
              textAlign: "center",
              "&:hover": {
                bgcolor: "rgba(18, 65, 9, 0.2)",
                borderRadius: "5px",
                transition: "0.5s",
              },
            }}
          >
            {
              item != 'contacts' ? 
               <Link
                  href={customLink(item)}
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer",
                    width: "100%"}}>
                   <Typography
                      fontSize={md ? "22px" : "18px"}
                      color={isVertical ? "#ffffff" : "black"}
                       textTransform="capitalize" >
                       {links[item]}
                    </Typography>
                  </Link> : <Button disableFocusRipple disableTouchRipple onClick={()=> toggleModal()}>
                              <Typography
                                 fontSize={md ? "22px" : "18px"}
                                 color={isVertical ? "#ffffff" : "black"}
                                  textTransform="capitalize" >
                                    {links[item]}
                                </Typography>
                               </Button>
            }
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
};

export default MenuBar;

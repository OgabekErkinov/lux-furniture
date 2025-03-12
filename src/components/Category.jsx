import { Box, Button, Stack, Typography } from "@mui/material";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useMedia from "../hooks/useMedia";

const Category = () => {
  const { t } = useTranslation();
  const { xs, sm, md } = useMedia();
  const catalogs = t("catalog.catalogies", { returnObjects: true }) || [];
  const [currentCatalog, setCurrentCatalog] = useState(catalogs[0]?.name || "");
  const [currentProducts, setCurrentProducts] = useState(catalogs[0]?.products || []);
  const [isAosActive, setIsAosActive] = useState(true);

  useEffect(() => Aos.init({ duration: 1000 }), []);

  const handleClick = (ctlg) => {
    setCurrentCatalog(ctlg.name);
    setCurrentProducts(ctlg.products);
    setIsAosActive(false);
  };

  return (
    <Box width="100%" id="catalog" px={2} py={4}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" fontWeight={700} sx={{ fontSize: xs ? '16px' : sm ? '22px' : '28px', color: "black" }} {...(isAosActive && { "data-aos": "fade-down" })}>
          {t("catalog.heading")}
        </Typography>
        <Typography sx={{ fontSize: xs ? '12px' : sm ? '16px' : '20px', color: "gray" }} {...(isAosActive && { "data-aos": "fade-down" })}>
          {t("catalog.text")}
        </Typography>
      </Box>

       {/* change category buttons */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1} mb={4}>
        {catalogs.map((item, idx) => (
          <Button
            key={idx}
            onClick={() => handleClick(item)}
            sx={{
              height: "2rem",
              width: "140px",
              borderRadius: "12px",
              bgcolor: currentCatalog === item.name ? "rgb(75, 75, 75)" : "transparent",
              color: currentCatalog === item.name ? "#FFF" : "black",
              boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)',
              "&:hover": { bgcolor: "rgb(104, 104, 104)", color: "#FFF" },
              transition: "0.4s ease",
            }}
            {...(isAosActive && { "data-aos": "fade-down", "data-aos-delay": idx * 100 })}
          >
            <Typography fontSize="12px">{item.name}</Typography>
          </Button>
        ))}
      </Box>

      <Box width="100%">
        {currentProducts.length > 0 ? (
          <Box display="grid" gap={2} 
               sx={{ gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" } }}>
            {currentProducts?.map(({ image, name, color }, idx) => (
              <Box key={idx} {...(isAosActive && { "data-aos": "fade-down", "data-aos-delay": idx * 100 })} mx='auto' sx={{ height: "14rem", width: xs ? "320px":"100%", bgcolor: "grey.50", borderRadius: "12px", py: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: 1, "&:hover": { boxShadow: 3, transform: "scale(1.02)" }, transition: "0.3s ease-in-out" }}>
                <Box component="img" src={image} alt={name} sx={{ height: "60%", width: "80%", mx: "auto", borderRadius: "10px", objectFit: "contain" }} />
                <Stack sx={{ height: "30%", width: "90%", mx: "auto", justifyContent: "flex-end" }}>
                  <Typography fontSize="14px">{name}</Typography>
                  <Typography fontSize="12px" color="grey.600">{color}</Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ height: "18rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid grey.400" }}>
            <Typography color="text.secondary">{t("catalog.noProduct")}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Category;

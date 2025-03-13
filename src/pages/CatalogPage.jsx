import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import useMedia from "../hooks/useMedia";
import { useTranslation } from "react-i18next";

// ProductCard componenti
const ProductCard = ({ product, xs, sm }) => (
  <Box
    sx={{
      width: xs ? "100%" : sm ? "45%" : "22%", // Responsiv dizayn
      height: "40vh", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: 2,
      borderRadius: "12px",
      overflow: "hidden",
      bgcolor: "#fff",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: 4,
      },
    }}
  >
    <Box
      component="img"
      src={product.image}
      alt={product.name}
      sx={{
        height: "60%",
        width: "100%",
        objectFit: "contain", 
      }}
    />
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6" color="black" fontWeight={600}>
        {product.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" mt={1}>
        {product.color}
      </Typography>
    </Box>
  </Box>
);

const CatalogPage = () => {
  const { name } = useParams();
  const cleanName = name?.replace(":", "").trim(); // Name ni tozalash
  const { xs, sm } = useMedia(); // Media querylar
  const { t } = useTranslation();

  // Kategoriyalarni olish
  const categories = t("catalog.catalogies", { returnObjects: true });
  const category = categories.find((category) => category.name === cleanName);
  const products = category?.products || [];

  return (
    <Box width="100%" height="auto" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {/* Banner */}
      <Box width="90%" height="70vh" position="relative">
        <Box
          component="img"
          src={category?.banner}
          borderRadius="12px"
          alt="banner"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Product Grid */}
      <Box sx={{ width: "90%", mt: 3 }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h4" fontWeight={600}>
            Ready-made products catalog
          </Typography>
          <Typography variant="h6" color="text.secondary">
            which you can buy here and now
          </Typography>
        </Box>

        {/* Mahsulotlar ro'yxati */}
        {products.length > 0 ? (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
            {products.map((product, idx) => (
              <ProductCard key={idx} product={product} xs={xs} sm={sm} />
            ))}
          </Box>
        ) : (
          <Typography color="text.secondary">{t("catalog.noProduct")}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default memo(CatalogPage);

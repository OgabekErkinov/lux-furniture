import { Box, Typography } from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useMedia from "../hooks/useMedia";
import { Link, NavLink } from "react-router-dom";

const NavCatalog = () => {
  const { t } = useTranslation();
  const { xs, sm } = useMedia();
  const categories = t("catalog.catalogies", { returnObjects: true });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box id = 'catalog' textAlign="center" px={2} py={5} width="100%" >
      {/* Heading */}
      <Box width={xs || sm ? "100%" : "70%"} mx="auto" data-aos="fade-down">
        <Typography variant="h4" fontWeight={700} color="black" fontSize={xs ? "24px" : "32px"}>
          {t("catalog.heading2")}
        </Typography>
        <Typography fontSize={xs ? "14px" : "18px"} color="gray" mt={1}>
          {t("catalog.text2")}
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        mt={4}
        gap={2}
      >
        {categories.map((category, idx) => {
          return (
            <Box
            key={idx}
            sx={{
              width: xs ? "100%" : sm ? "48%" : "23%",
              position: "relative",
              height: "250px",
              background: `url(${category?.main}) center/cover no-repeat`,
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.03)" },
            }}
            data-aos="fade-down"
            data-aos-delay={idx * 100}
          >
            {/* Overlay */}
           <Link to={`/catalog/${category?.name}`}>
           <Box
              sx={{
                position: "absolute",
                zIndex:2,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(1, 2, 68, 0.25)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              {/* Text and Badge */}
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(5px)" },
                }}
              >
                <Typography
                  sx={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
                  fontSize={xs ? "16px" : "14px"}
                  color="white"
                  fontWeight={800}
                >
                  {category.name}
                </Typography>

                <Box
                  sx={{
                    background: "linear-gradient(to right, rgb(4, 160, 12), rgba(0, 61, 3, 0.73))",
                    color: "black",
                    px: 2,
                    borderRadius: "6px",
                  }}
                >
                  <Typography fontSize={{ xs: "14px", md: "16px" }} fontWeight={400}>
                    {category.products.length} products
                  </Typography>
                </Box>
              </Box>
            </Box>
           </Link>
          </Box>
          )
        })}
      </Box>
    </Box>
  );
};

export default NavCatalog;

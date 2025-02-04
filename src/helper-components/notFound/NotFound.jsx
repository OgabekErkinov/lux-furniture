import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Matnni to'g'ri olish uchun
  const heading = t("notFound.heading", { returnObjects: true });

  return (
    <Box
      height="100vh"
      width="100%"
      bgcolor="#FFFFFF"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <Stack
        spacing={2}
        alignItems="center"
        textAlign="center"
        maxWidth="600px"
      >
        <Typography fontSize="48px" fontWeight="700" color="#2E7D32">
          {heading[0]}
        </Typography>
        <Typography fontSize="28px" fontWeight="600" color="#212121">
          {heading[1]}
        </Typography>
        <Typography fontSize="16px" color="#424242">
          {t("notFound.text")}
        </Typography>
        <Button
          onClick={() => navigate("/")}
          sx={{
            bgcolor: "#2E7D32",
            color: "#FFFFFF",
            fontSize: "16px",
            px: "24px",
            py: "10px",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#1B5E20",
            },
          }}
        >
          {t("notFound.button")}
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFound;

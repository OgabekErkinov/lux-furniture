import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.2); }
`;

const Loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(240, 240, 240, 0.9)", // Oqish fon
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      <Box
        component="img"
        src="/logo.webp"
        alt="Lux Furnitures"
        sx={{
          width: 80,
          height: "auto",
          animation: `${scaleAnimation} 1.5s infinite alternate ease-in-out`,
        }}
      />
      <Typography
        variant="h5"
        sx={{
          mt: 2,
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Lux Furnitures
      </Typography>
    </Box>
  );
};

export default Loading;

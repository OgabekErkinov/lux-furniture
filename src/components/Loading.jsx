import { CircularProgress, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(255, 255, 255, 0.8)", // Yengil oq fon (agar kerak bo‘lsa)
        backdropFilter: "blur(5px)", // Orqa fonni biroz xira qilish
        zIndex: 9999, // Eng yuqorida bo‘lishi uchun
      }}
    >
      <CircularProgress size={60} color="primary" />
    </Box>
  );
};

export default Loading;

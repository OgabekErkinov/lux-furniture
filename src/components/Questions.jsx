import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";  
import useMedia from "../hooks/useMedia";

const Questions = () => {
  const { t } = useTranslation();
  const questions = t("questionsSection.questions", { returnObjects: true });
  const { xs, sm, md, lg, xl } = useMedia();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box height="auto" width="90%" mx='auto'>
      {/* Heading */}
      <Box height="auto" width="100%">
        <Typography 
          fontSize={xl ? "40px" : lg ? "36px" : md ? "28px" : sm ? "22px" : "20px"} 
          fontWeight="500"
          width="50%" 
          textAlign="center" 
          color="#000000" 
          mx="auto"
        >
          {t("questionsSection.heading")}
        </Typography>
      </Box>

      {/* Questions List */}
      <Box height="auto" width="100%" my="1rem">
        {Array.isArray(questions) && questions.map((question, idx) => (
          <Box key={idx} width="100%" my="0.5rem">
            <Button 
              disableElevation 
              disableTouchRipple
              fullWidth
              sx={{
                textAlign: "left",
                bgcolor: "linear-gradient(135deg, #67C15E 0%, #4E9F3D 100%)",
                color: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                '&:hover': { bgcolor: "linear-gradient(135deg, #4E9F3D 0%, #67C15E 100%)" }
              }} 
              onClick={() => toggleQuestion(idx)}
            >
              <Typography fontWeight="500" color="#000000" fontSize={sm ? "16px" : "22px"}>
                {question.question}
              </Typography>
              {/* Toggle Icon */}
              <Box height="40px" width="40px" borderRadius="50%" display="flex" justifyContent="center" 
                   alignItems="center" sx={{background : 'linear-gradient(to right bottom, rgb(2, 163, 50), rgb(17, 65, 29))'}}>
                <CloseOutlined
                  sx={{
                    height: "32px",
                    width: "32px",
                    transform: openIndex === idx ? "rotate(0deg)" : "rotate(45deg)",
                    transition: "transform 0.3s ease-in-out",
                    color: "#fff",
                  }}
                />
              </Box>
            </Button>
            {openIndex === idx && (
              <Box width="100%" mt="0.5rem" p="1rem" bgcolor="#f4f4f4" borderRadius="8px">
                <Typography fontSize={sm ? "14px" : md ? "16px" : "18px"} color="#333">
                  {question.answer}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Questions;

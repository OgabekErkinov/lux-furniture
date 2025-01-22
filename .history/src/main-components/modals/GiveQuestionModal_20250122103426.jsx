import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

const GiveQuestionModal = ({ closeModal }) => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bgcolor="rgba(0, 0, 0, 0.5)" // Modal fonini qora qilish
      zIndex={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bgcolor="white"
        width="80%"
        maxWidth="600px"
        borderRadius="8px"
        padding="20px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
      >
        <Stack direction="row" justifyContent="flex-end">
          <Button onClick={closeModal} style={{ color: '#000' }}>
            <CloseOutlined />
          </Button>
        </Stack>
        <Typography variant="h5" align="center">
          So'rov yuborish
        </Typography>
        {/* Boshqa modal kontenti */}
      </Box>
    </Box>
  );
};

export default GiveQuestionModal;

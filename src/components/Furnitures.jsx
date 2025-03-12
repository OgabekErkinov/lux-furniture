import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';

const Furnitures = () => {
  const { xs, sm, md, lg } = useMedia();
  const { t } = useTranslation();
  const furnitures = t('furnituresSection', { returnObjects: true });
  const components = furnitures.components || [];

  return (
    <Box width="100%" height="auto" my="3rem" p="0.5rem" id="products">
      <Stack height="100%" width="auto">
        
        {/* Heading Section */}
        <Box mb="1rem" width="100%" height="auto" px="1rem">
          <Typography
            variant="h4"
            fontWeight="700"
            color="#000000"
            fontSize={xs ? '18px' : md ? '24px' : '36px'}
            width={xs || sm ? '100%' : lg ? '80%' : '50%'}
          >
            {furnitures.heading}
          </Typography>
          <Typography color="textSecondary" my="1rem" fontSize={sm ? '16px' : '20px'}>
            {furnitures.helperText}
          </Typography>
        </Box>

        {/* Furniture Section */}
        <Box
          display="grid"
          gap="0.5rem"
          width="100%"
          height="auto"
          gridTemplateColumns={xs ? 'repeat(1, 1fr)' : sm || md ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'}
        >
          {components.map((component, idx) => (
            <Box
              key={idx}
              sx={{
                background: 'linear-gradient(to right bottom, rgba(3, 80, 2, 0.75), rgb(8, 60, 5))',
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.02)" },
              }}
              height="18rem"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography 
                variant="h6" fontWeight="500" fontSize="16px" 
                p="12px" height="50px" color="white"
              >
                {component.title}
              </Typography>
              <Box
                component="img"
                src={component.image}
                alt={component.title}
                height="200px"
                width="100%"
                borderRadius="10px"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Furnitures;

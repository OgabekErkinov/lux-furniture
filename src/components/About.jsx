import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useMedia from '../hooks/useMedia';
import { useEffect } from 'react';
import Aos from 'aos';

const About = () => {
  const { xs, sm, md } = useMedia();
  const { t } = useTranslation();
  const about = t('about.paragraph', { returnObjects: true });
  const components = t('about.components', { returnObjects: true });
  const images = ["/about/about3.webp", "/about/about4.webp"];

  useEffect(()=>{
    Aos.init()

    
  },[])

  return (
    <Box height="auto" width="80%" id="about">
      <Box height="100%" width="100%" display="flex" flexDirection='column' gap='8px'>

        {/* Heading and Components */}
        <Box width="100%" height="auto">
          <Box 
            display="grid" justifyContent="center" gap='8px'
            gridTemplateColumns={xs || sm ? '1fr' : md ? 'repeat(2, 1fr)' : 'repeat(3,1fr)'}
          >
            <Stack height="100%" width="90%" color="#000000" justifyContent="flex-start" gap="2rem">
              <Typography fontSize="28px" fontWeight="600">{about.title}</Typography>
              <Typography fontSize="13px">{about.paragraph}</Typography>
            </Stack>

            {components?.map((component, idx) => (
              <Box
                data-aos="fade-down" data-aos-delay={idx * 100}
                width="100%" height="15rem" overflow="hidden"
                borderRadius="12px" mx='auto' key={idx}
                sx={{
                  background: component?.image
                    ? `url(${component.image}) center/cover no-repeat`
                    : 'linear-gradient(to right bottom, rgba(2, 88, 2, 0.81), rgba(8, 100, 6, 0.86))',
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" }
                }}
              >
                <Stack 
                  height="100%" justifyContent="center" alignItems="center" p="1rem" 
                  bgcolor="rgba(37, 37, 37, 0.3)"
                >
                  <Box height="70%" width="100%" pl="1rem" display="flex" justifyContent="flex-start">
                    <Typography 
                      fontSize="60px" fontWeight="600" 
                      sx={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)", color: "white" }}
                    >
                      {component.result}
                    </Typography>
                  </Box>
                  <Box width="100%" height="20%">
                    <Typography fontSize="22px" color="white">{component.type}</Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Images */}
        <Box height="auto" width="100%">
          <Box
            height="auto" width="100%" display="grid" gap="1rem" justifyContent="space-between"
            gridTemplateColumns={xs ? '1fr' : 'repeat(2, 48%)'}
          >
            {images.map((image, idx) => (
              <Box
                component="img" src={image} data-aos="fade-up" data-aos-delay={idx * 200}
                height="20rem" width="100%" key={idx} borderRadius="12px"
                sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
              />
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default About;

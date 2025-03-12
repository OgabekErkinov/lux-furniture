import { Box, Stack, Typography } from "@mui/material";
import useMedia from "../hooks/useMedia";
import { useTranslation } from "react-i18next";

const Delivery = () => {
  const {md, xl, lg } = useMedia();
  const { t } = useTranslation();
  const components = t("deliverySection.elements", { returnObjects: true });

  return (
    <Box width="90%" mx="auto" py={2} id="delivery">
      <Stack gap="1rem">
        {/* Heading Section */}
        <Typography
          fontSize={xl ? "40px" : lg ? "36px" : md ? "28px" : "24px"}
          fontWeight="400"
          width={xl||lg||md ? "50%" : "90%"}
          textAlign="left"
        >
          {t("deliverySection.heading")}
        </Typography>

        {/* Delivery Components Section */}
        <Box
          display="grid"
          gap="1rem"
          gridTemplateColumns={xl || lg ? "repeat(2, 1fr)" : "1fr"}
        >
          {Array.isArray(components) &&
            components.map((item, idx) => (
              <Box
                key={idx}
                height="320px"
                borderRadius="10px"
                padding="1rem"
                sx={{
                  background: "linear-gradient(135deg, #007910 0%, #004d07 100%)",
                  color: "white",
                }}
              >
                <Stack height="100%" justifyContent="space-around" gap="1rem">
                  <Typography fontWeight="700" fontSize="24px">
                    {item.title}
                  </Typography>
                  <Typography fontSize="18px">{item.mainText}</Typography>
                </Stack>
              </Box>
            ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Delivery;
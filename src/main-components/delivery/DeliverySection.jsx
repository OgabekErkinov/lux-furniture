import { Box, Stack, Typography } from "@mui/material"
import Heading from "./Heading"
import useScreenSizes from "../../hooks/ScreenSizes"
import { useTranslation } from "react-i18next"

const DeliverySection = () => {
    const {xlgScreen, lgScreen} = useScreenSizes()
    const {t} = useTranslation()
    const components = t('deliverySection.elements', {returnObjects : true})
  return (
    <Box height='auto' width='90%' id = 'delivery'>
        <Stack height='auto' width='100%' gap='1rem'>
            <Heading/>
            <Box height='auto' width='100%' display='grid' gap='0.5rem'
                 gridTemplateColumns={(xlgScreen||lgScreen) ? 'repeat(2,1fr)' : '1fr'}>
                    {
                       Array.isArray(components) && components.map((item, idx) => {
                            return (
                                <Box width='auto' height='320px' bgcolor='rgba(0, 121, 16, 0.9)' borderRadius='10px' padding = '1rem' key={idx}>
                                    <Stack height='100%' width='100%' justifyContent='space-around' gap='1rem' pb='1rem'>
                                        <Typography fontWeight='700' fontSize='24px'>{item.title}</Typography>
                                        <Typography fontSize='18px'>{item.mainText}</Typography>
                                    </Stack>

                                </Box>
                            )
                        })
                    }


            </Box>


        </Stack>

    </Box>
  )
}

export default DeliverySection

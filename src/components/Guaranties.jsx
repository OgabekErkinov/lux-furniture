import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useMedia from "../hooks/useMedia";

const Guaranties = ({screen}) => {
    const { t } = useTranslation()
    const {xs, sm} = useMedia()
    const items = [
        { text: t('home.guarantyTime'), delay: 0 },
        { text: t('home.deliveryCost'), delay: 200 },
        { text: t('home.payWhen'), delay: 400 }
      ];
    const textSize = screen === 'small' ? '12px' : '18px'
    const display = screen != 'small' && (xs||sm) ? 'none' : 'block'
  return (
     <Box id="guarantees" width={!(xs||sm) ? '70%':'100%'} height={sm||xs ? "100%":"20vh"} display={display} >
        <Box height='100%' width='100%' color='#000000' display='grid' 
             gridTemplateColumns= {screen === 'small' && sm ? '1fr' : 'repeat(3,1fr)'}
             justifyContent='start'>
            {items.map(({ text }, index) => (
               <Box key={index} display='flex' alignItems='center' justifyContent='center' 
                    width='100%' data-aos='fade-down' data-aos-delay={index*100} gap='12px'>
                   <Box component='img' src='/checkmark.svg' height={screen === 'small' ? '16px' : '24px'} 
                        width={screen === 'small' ? '12px' : '24px'} />
                   <Typography fontSize={textSize}>{text}</Typography>
               </Box>
             ))}
        </Box>
     </Box>
  )
}

export default Guaranties

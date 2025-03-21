import { Box, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"



const Contact = () => {
     
  return (
    <Box height={{xs : 'auto', md : '120px'}} width='100%' padding='16px' 
         color='black' borderBottom='1px solid grey' boxSizing='border-box'>
        <Stack direction='row' height='auto' width='100%' alignItems='center' justifyContent='space-between'>
    {/* ............................website logo.......................................................... */}
       <Logo/>     
               
        
                
            
        {/* .......................................................................... */}
       <Stack direction={{sm : 'column', md : 'row'}} height='100%' width={{sm : '100%', md : '80%'}} 
              justifyContent='flex-end' gap='0.5rem'>
              {/*.............................social networks.............................  */}
            <Box height={{sm : '50%', md : '100%'}} width={{sm : '50%', md : '20%'}} display={{xs : 'none', sm : 'block'}}>
                <Stack height='100%' width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                      <Typography fontSize={{xs : '8px', md : '12px'}} textAlign='center'>Задайте вопрос, мы онлайн</Typography>
                      <Stack direction='row' gap='8px'>
                        <FaWhatsapp color="green" size={'24px'}/>
                        <FaTelegram color="#20aabd" size={'24px'}/> 
                      </Stack>
                </Stack> 
            </Box>
             {/*.............................work time and phone number...................  */}
            <Box height={{sm : '50%', md : '100%'}} width={{sm : '50%', md : '20%'}}>
                <Stack height='100%' width='100%' alignItems='center' gap='4px'>
                   <Typography fontSize={{xs : '10px', sm : '12px'}} >Звоните: 10:00 - 20:00</Typography>
                   <Typography fontWeight='600' fontSize={{xs : '10px', sm : '14px'}}>+998 71 500 00 00</Typography>
                </Stack>
            </Box>

       </Stack>
        </Stack>

    </Box>
    
  )
}

export default Contact

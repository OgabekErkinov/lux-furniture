import { Box, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"



const Contact = () => {
     
  return (
    <Box height='120px' width='100%' padding='16px' display='grid' gridTemplateColumns='1fe' 
         color='black' borderBottom='1px solid grey' boxSizing='border-box'>
        <Stack direction='row' height='auto' width='100%' alignItems='center' justifyContent='space-between'>
       <Logo/> 
       <Languages/>    
       <Stack direction={{sm : 'column', md : 'row'}} height='100%' width={{sm : '100%', md : '80%'}} 
              justifyContent='flex-end' gap='0.5rem'>
           <SocialNetworks/>
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

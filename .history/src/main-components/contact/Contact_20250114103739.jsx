import { Box, Stack, Typography } from "@mui/material"
import { logoUrl } from "../../constants/constantas"
import { FaTelegram, FaWhatsapp } from "react-icons/fa"



const Contact = () => {
     
  return (
    <Box height={{xs : 'auto', md : '120px'}} width='100%' padding='16px' 
         color='black' borderBottom='1px solid grey' boxSizing='border-box'>
        <Stack direction='row' height='auto' width='100%' alignItems='center' justifyContent='space-between'>
    {/* ............................website logo.......................................................... */}
            
               <Stack direction={{xs : 'column', sm : 'column', lg : 'row'}} 
                       height='auto' width={{xs : '5rem',sm : '50%', md : '20%'}} gap='12px'>
                    <Box component='img' src={logoUrl} height='4rem' width='8rem'/>
                    <Stack direction='row' alignItems='center' width={{xs : '100%', sm : '6rem'}} gap='1rem'>
                    <Typography height='auto' width='3rem' fontSize={{xs : '10px', sm : '12px'}}>
                            Производство плетенной мебели премиун класса в Ташкенте
                    </Typography>
                    <Stack direction='row' gap='0.5rem' display={{xs : 'block', sm : 'none'}}>
                        <FaWhatsapp color="green" size={'24px'}/>
                        <FaTelegram color="#20aabd" size={'24px'}/> 
                      </Stack>
                    </Stack>
        {/* ............................................................................. */}
                </Stack>
                
            
        {/* .......................................................................... */}
       <Stack direction={{sm : 'column', md : 'row'}} height='100%' width={{sm : '50%', md : '80%'}} 
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
            <Box height={{sm : '50%', md : '100%'}} width={{sm : '50%', md : '20%'}} display={{xs : 'block', md : 'none'}}>
                <Stack height='100%' width='100%' alignItems='center' gap='4px'>
                   <Typography fontSize='12px' >Звоните: 10:00 - 20:00</Typography>
                   <Typography fontWeight='600'>+998 71 500 00 00</Typography>
                </Stack>
            </Box>

       </Stack>
        </Stack>

    </Box>
    
  )
}

export default Contact

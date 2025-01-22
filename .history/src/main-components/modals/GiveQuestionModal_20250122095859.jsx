import { Box, Button, Input, Stack, Typography } from '@mui/material'
import { CloseOutlined } from '@mui/icons-material';
import { logoUrl } from '../../constants/constantas';
import { useTranslation } from 'react-i18next';
import useScreenSizes from '../../hooks/ScreenSizes'
import { useState } from 'react';
import axios from 'axios';

const GiveQuestionModal = ({closeModal}) => {
    const {t} = useTranslation()
    const modalTexts = t('givingQuestion.modal', {returnObjects : true})
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [questionText, setQuestionText] = useState('')
    const [alertMessage, setAlertMessage] = useState('')


    const handlePhoneNumber = (string) => {
        const filtredNumber =  string.replace(/\D/g,'').slice(0,12)
         if(filtredNumber.startsWith('998')){
            setPhoneNumber(`+${filtredNumber}`)
         }else{
            setPhoneNumber(`+998${filtredNumber.slice(0,9)}`)
         }
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
        const myId = "8158030030";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
        const messageContent = `Full Name: ${name}\nPhone Number: ${phoneNumber}\nQuestion: ${questionText}`;
    
        axios.post(url, {
            chat_id: myId,
            text: messageContent,
        })
        .then((response) => {
            alert(modalTexts.alertSuccess);
        })
        .catch((error) => {
            alert(modalTexts + error.message);
        });
    };
    
  return (
    <Box height='100vh' width='100vw' position='absolute' zIndex={2}>
        <Stack height='100%' width='100%'>

            <Box height = '10vh' width='100%' display='flex' justifyContent='flex-end' 
                 pr='2rem' sx={{backdropFilter : 'blur(10px)'}}>
                <Button sx={{height : '10vh', width : '10vh', position : 'absolute', zIndex : '3'}}
                        onClick={() => closeModal(false)}>
                     <CloseOutlined
                              sx={{ height: '100%', width: '100%', color: '#000000' }}/>
                </Button>
            </Box>

            <Box height='90vh' width='100%' display='flex' justifyContent='center'>
                <Stack height='100%' width={!(xlgScreen||lgScreen) ? '100%' : '70%'} minWidth='300px' alignItems='center' gap='0.5rem'>
                         <Box component='img' src={logoUrl} height='90px' width='280px'/>
                         <Stack height='auto' width='100%' my='1rem' alignItems='center'>
                             <Typography color='#000000' fontSize={(xlgScreen||lgScreen) ? '32px' : '24px'} textAlign='center' >{modalTexts.title}</Typography>
                             <Typography width={(xlgScreen||lgScreen) ? '60%' : '100%'} 
                                         textAlign='center' color='#000000' fontSize={(xlgScreen||lgScreen) ? '18px' : '12px'}>
                                             {modalTexts.titleHelper}
                             </Typography>
                         </Stack>
                   
                         <Stack width='300px' height='auto' alignItems='center' gap='1rem'>
                               <Input disableUnderline placeholder={modalTexts.name}
                                      sx={{height : '40px', width : '100%', 
                                boxShadow : '0 0 36px 0 rgba(68, 67, 67, 0.23)',
                                           borderRadius : '2px', px : '5px'}}
                                           value={name}/>
                     
                               <Input disableUnderline placeholder={"+998901234567"}
                                      sx={{height : '40px', width : '100%', 
                                           boxShadow : '0 0 36px 0 rgba(68, 67, 67, 0.23)',
                                           borderRadius : '2px', px : '5px'}}
                                           value={phoneNumber}
                                           onChange={(e) => handlePhoneNumber(e.target.value)}/>

                               <Input disableUnderline placeholder={modalTexts.yourQuestion}
                                      multiline rows={4} 
                                      sx={{
                                         width: '100%',
                                         boxShadow: '0 0 36px 0 rgba(68, 67, 67, 0.23)',
                                         borderRadius: '2px',
                                         px: '5px'}}/>

                         </Stack>

                         <Stack height='auto' width='100%' alignItems='center' my='1rem'>
                            <Box height='48px' width='300px' bgcolor='#94C11F' borderRadius='2px'>
                                <Button sx={{height : '100%', width : '100%'}} onClick={(e) => sendMessage(e)}>
                                    <Typography color='#ffffff'>{modalTexts.sendQuestion}</Typography>
                                </Button>
                            </Box>
                            <Box height='auto' width='100%' textAlign='center'>
                                <Typography color='#000000' fontSize='12px'>{modalTexts.sendDesc}</Typography>
                            </Box>

                         </Stack>
                    

                </Stack>

            </Box>

        </Stack>


    </Box>
  )
}

export default GiveQuestionModal

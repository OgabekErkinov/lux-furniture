import { Box, Button, Input, Stack, Typography } from '@mui/material'
import { CloseOutlined } from '@mui/icons-material';
import { logoUrl } from '../../constants/constantas';
import { useTranslation } from 'react-i18next';
import useScreenSizes from '../../hooks/ScreenSizes'

const GiveQuestionModal = ({closeModal}) => {
    const {t} = useTranslation()
    const modalTexts = t('givingQuestion.modal', {returnObjects : true})
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
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
                <Stack height='100%' width={!(xlgScreen||lgScreen) ? '100%' : '70%'} minWidth='300px' alignItems='center'>
                    <Box component='img' src={logoUrl} height='90px' width='280px'/>
                    <Typography color='#000000' fontSize='32px' textAlign='center' mt='0.5rem'>{modalTexts.title}</Typography>
                    <Typography width={!(xlgScreen||lgScreen) ? '50%' : '100%'} 
                                textAlign='center' color='#000000' fontSize='14px'>
                        {modalTexts.titleHelper}
                    </Typography>
                    <Stack width='100%' height='auto' alignItems='center'>
                      <Input disableUnderline placeholder={modalTexts.name}
                             sx={{height : '40px', minWidth : '300px', width : '60%', 
                                boxShadow : '0 0 3px 1px rgba(37, 37, 37, 0.47)',
                                borderRadius : '2px', px : '5px'}}/>

                    </Stack>
                    

                </Stack>

            </Box>

        </Stack>


    </Box>
  )
}

export default GiveQuestionModal

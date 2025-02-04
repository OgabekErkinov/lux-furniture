import { Box, Button, Input, Stack, Typography, TextField } from '@mui/material'
import React, { useState } from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'
import { handleDownload } from '../../libs/handleDownload'
import { uploadImages } from '../../constants/constantas'

const DownloadSection = () => {
    const { smScreen, mdScreen, lgScreen, xlgScreen } = useScreenSizes()
    const { t } = useTranslation()
    
    const [name, setName] = useState('')
    const [number, setNumber] = useState('+998')
    const [isError, setIsError] = useState({ name: false, number: false })

    
    const handleChangeNumber = (string) => {
        const sanitized = string.replace(/\D/g, '').slice(0, 12);
        if (sanitized.startsWith('998')) {
            setNumber(`+${sanitized}`);
        } else {
            setNumber(`+998${sanitized.slice(0, 9)}`);
        }
    };

    // Formani tekshirish va yuklab olishni boshlash
    const handleClick = () => {
        const isValidNumber = number.startsWith('+998') && number.length === 13;
        const isValidName = name.trim().length >= 3;

        setIsError({
            name: !isValidName,
            number: !isValidNumber
        });

        if (isValidNumber && isValidName) {
            handleDownload(uploadImages);
        }
    };

    return (
        <Box width='90%' height={xlgScreen ? '286px' : lgScreen ? '300px' : 'auto'} bgcolor='#FAFAFA'>
            <Box height='100%' width='100%' displayPrint='flex' position='relative'>

                <Stack height='100%' width={smScreen || mdScreen ? '100%' : '60%'} gap='0.5rem'
                    justifyContent='center' px='2rem'>
                    <Typography fontWeight='600' variant='h4' color='#000000'>{t('downloadSection.title')}</Typography>
                    <Typography color='#000000'>{t('downloadSection.helperText')}</Typography>

                    <Box display='grid' gridTemplateColumns={smScreen || mdScreen ? '1fr' : '1fr 1fr 1fr'} gap='0.5rem'
                        alignItems='center' justifyContent='center'>

                        
                        <TextField
                            placeholder={t('downloadSection.name')}
                            variant="outlined"
                            sx={{ width: '100%', height: '3rem' }}
                            error={isError.name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        
                        <TextField
                            placeholder="901234567"
                            variant="outlined"
                            sx={{ width: '100%', height: '3rem' }}
                            value={number}
                            error={isError.number}
                            onChange={(e) => handleChangeNumber(e.target.value)}
                        />

                        
                        <Box width='100%' height='3rem' p='5px' mx='auto' bgcolor='green' borderRadius='6px'>
                            <Button sx={{ height: '100%', width: '100%' }} onClick={handleClick}>
                                <Typography color='#ffffff'>{t('downloadSection.download')}</Typography>
                            </Button>
                        </Box>

                    </Box>
                </Stack>

                {/* Kitob rasmi */}
                <Box height={lgScreen ? '110%' : '140%'} width='50%' position='absolute' right='-5%' top={lgScreen ? '-10%' : '-20%'} zIndex='1'
                    display={smScreen || mdScreen ? 'none' : 'block'}>
                    <Box component='img' src='/book.png' height='100%' width='100%' />
                </Box>

            </Box>
        </Box>
    )
}

export default DownloadSection;

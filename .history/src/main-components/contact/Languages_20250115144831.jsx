import { Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useScreenSizes from '../../hooks/ScreenSizes'

const Languages = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t, i18n} = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState('en')
    const languages = [
        {
            name : 'uz',
            flag : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Uzbekistan.png/1200px-Flag_of_Uzbekistan.png'
        },
        {
            name : 'en',
            flag : 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png'
        },
        {
            name : 'ru',
            flag : 'https://img.freepik.com/free-vector/illustration-russia-flag_53876-27016.jpg'
        }
    ]
    const handleLanguage = (lang) => {
        setCurrentLanguage(lang)
        i18n.changeLanguage(lang)
    }
    
  return (
    <Box display='flex' justifyContent='center' gap='0.5rem' height='100%' alignItems='flex-end'>
            {
              languages.map((language, idx) => {
                if(language.name !== currentLanguage){
                return (
                          <Box component='img' src={language.flag} height={smScreen ? '1.5rem' : mdScreen ? '2rem' : '3rem'} 
                                                                   width={smScreen ? '2rem' : mdScreen ? '2.5rem' : '4rem'} 
                                                                   borderRadius='2px' onClick={()=>handleLanguage(language.name)} key={idx} />
                        
                )}
              })
            }
    </Box>
  )
}

export default Languages
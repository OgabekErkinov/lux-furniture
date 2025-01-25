import { Box } from '@mui/material'
import { useState } from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'
import { languages } from '../../constants/constantas.js'


const Languages = () => {
    const {t, i18n} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const [currentLanguage, setCurrentLanguage] = useState('en')
    
    const handleLanguage = (lang) => {
      setCurrentLanguage(lang)
      i18n.changeLanguage(lang)

    }
   
  return (
    <Box height='100%'  width='auto' ml={xlgScreen  ? '3rem' : lgScreen ? '4rem' : '3rem'}>
      <Box display='flex' justifyContent='space-between' alignItems='center' height='100%' width='100%'  gap='2px'>
            {
              languages.map((language, idx) => {
                if(language.name !== currentLanguage){
                return (
                    <Box component='img' src={language.flag} borderRadius='2px' key={idx}
                         height={!smScreen ? '36px' : '20px'}
                         width={!smScreen ? '36px' : '20px'}
                        onClick={() => handleLanguage(language.name)} />        
                       )} }) }
    </Box>
    </Box>

  )
}

export default Languages
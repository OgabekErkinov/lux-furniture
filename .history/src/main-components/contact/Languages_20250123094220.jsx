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
    <Box display='flex' justifyContent='center' gap='0.5rem' height='100%' width='100%' alignItems='center'>
            {
              languages.map((language, idx) => {
                if(language.name !== currentLanguage){
                return (
                    <Box component='img' src={language.flag} borderRadius='2px' key={idx}
                         height={smScreen ? '24px' : mdScreen ? '2rem' : lgScreen ? '2.5rem' : '3rem'} 
                         width={smScreen ? '2rem' : mdScreen ? '2.5rem' : lgScreen ? '3rem' : '4rem'} 
                        onClick={() => handleLanguage(language.name)} />        
                       )} }) }
    </Box>
  )
}

export default Languages
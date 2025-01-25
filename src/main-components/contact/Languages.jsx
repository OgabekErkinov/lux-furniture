import { Box } from '@mui/material'
import { useState } from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'
import { languages } from '../../constants/constantas.js'


const Languages = ({bbottom}) => {
    const {t, i18n} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const [currentLanguage, setCurrentLanguage] = useState('en')
    
    const handleLanguage = (lang) => {
      setCurrentLanguage(lang)
      i18n.changeLanguage(lang)

    }
   
  return (
    <Box height='100%'  width='80px'>
      <Box display={bbottom ? 'flex' : 'none'} justifyContent='center' alignItems='center' height='100%' width='100%'  gap='2px'>
            {
              languages.map((language, idx) => {
                if(language.name !== currentLanguage){
                return (
                    <Box component='img' src={language.flag} borderRadius='2px' key={idx}
                         height={!smScreen ? '28px' : '20px'}
                         width={!smScreen ? '36px' : '24px'}
                        onClick={() => handleLanguage(language.name)} />        
                       )} }) }
    </Box>
    </Box>

  )
}

export default Languages
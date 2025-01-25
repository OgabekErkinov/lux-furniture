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
    <Box
  )
}

export default Languages
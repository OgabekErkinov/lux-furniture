import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';


const Languages = () => {
  const {} = useTranslation()
    
    const [currentLanguage, setCurrentLanguage] = useState('en');
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
      console.log(i18n);  // Yana bir marta i18n'ni tekshiring
      if (i18n && i18n.changeLanguage) {
        i18n.changeLanguage(lang);  // Tilni o'zgartirish
      } else {
        console.error('i18n.changeLanguage mavjud emas');
      }
    };
  return (
    <Box display='flex' justifyContent='flex-end'>
            {
              languages.map((language, idx) => {
                if(language.name !== currentLanguage){
                return (
                    <Button key={idx} onClick={()=>handleLanguage(language.name)} sx={{height : '3rem', width : '4rem'}}>
                          <Box component='img' src={language.flag} height='100%' width='100%' borderRadius='2px' />
                    </Button>
                    
                )}
              })
            }
    </Box>
  )
}

export default Languages
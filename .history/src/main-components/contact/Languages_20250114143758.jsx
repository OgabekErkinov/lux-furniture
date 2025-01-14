import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Languages = () => {
    const {t, i18n} = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState('en')
    const languages = [
        {
            name : 'uz',
            flag : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLCRdyhZfj530pP-6i-Jccj_vWulB1Lf9aA&s'
        },
        {
            name : 'en',
            flag : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png'
        },
        {
            name : 'ru',
            flag : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEXQ1vOnJdFtduj75HWAMfOoJ6GRNxCkcaA&s'
        }
    ]
  return (
    <Box height='5rem' width='8rem'>
        <Stack direction='row'>
            {
              languages.map((language, idx) => {
                return (
                    if(language)
                    <Box component='img' src={language.flag} height='100%' width='100%' key={idx}/>
                )
              })
            }
            

        </Stack>

    </Box>
  )
}

export default Languages
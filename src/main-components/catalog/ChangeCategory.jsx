import { Box, Button, Typography } from '@mui/material'
import Aos from 'aos'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ChangeCategory = ({handleClick, currentCatalog}) => {
    const {t} = useTranslation()
    const catalogies = t('catalogSection.catalogies', {returnObjects : true})

    useEffect(()=>{
        Aos.init({
            duration : 1000
        })
    })

  return (
    <Box width='100%' height='100%' display='flex' flexWrap='wrap' justifyContent='center'>
        {
          catalogies.map((item, idx) => {
                return (
                    <Box height='2rem' width='150px' key={idx} data-aos = 'fade-up' data-aos-delay = {idx * 200}
                         borderRadius='12px'
                         bgcolor={currentCatalog === item.name ? 'grey' : 'transparent'}
                         >
                        <Button sx={{height : '100%', width : '100%'}} onClick={()=> handleClick(item)}>
                            <Typography color={currentCatalog === item.name ? '#FFFFFF' : '#000000'} fontSize='12px'>
                                {item.name}
                            </Typography>
                        </Button>
                    </Box>
                )
            })
        }

    </Box>
  )
}

export default ChangeCategory

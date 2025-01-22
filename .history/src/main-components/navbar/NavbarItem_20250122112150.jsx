import { Link, MenuItem, Typography } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const NavbarItem = ({item, url}) => {
  const {t} = useTranslation()
  const links = t('navLinks', {returnObjects : true})
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <MenuItem sx={{
      transition : '0.5s',
      textAlign : 'center',
      '&:hover' : {
        bgcolor : 'rgba(18, 65, 9, 0.2)',
        borderRadius : '5px',
        transition : '0.5s'
      }
    }}>
       <Link href = {url} sx={{textDecoration : 'none', cursor : 'pointer', width : '100%'}}>
         <Typography fontSize='2px' color='black' textTransform='capitalize' >{links[item]}</Typography>
       </Link>
    </MenuItem>
  )
}

export default NavbarItem
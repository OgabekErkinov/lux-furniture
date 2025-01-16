import { Link, MenuItem, Typography } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'

const NavbarItem = ({item, url}) => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <MenuItem>
       <Link href = {url} sx={{textDecoration : 'none', cursor : 'pointer'}}>
         <Typography fontSize={xlgScreen ? '32px' : '14px'} fontFamily='sans-serif' color='black' >{item}</Typography>
       </Link>
    </MenuItem>
  )
}

export default NavbarItem
import { Link, MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavbarItem = ({item, url}) => {
  return (
    <MenuItem>
       <Link href = {url} sx={{textDecoration : 'none'}}>
         <Typography >{item}</Typography>
       </Link>
    </MenuItem>
  )
}

export default NavbarItem
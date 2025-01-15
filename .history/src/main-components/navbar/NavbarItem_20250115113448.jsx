import { Link, MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavbarItem = ({item, url}) => {
  return (
    <MenuItem>
       <Link>
         <Typography>{item}</Typography>
       </Link>
    </MenuItem>
  )
}

export default NavbarItem
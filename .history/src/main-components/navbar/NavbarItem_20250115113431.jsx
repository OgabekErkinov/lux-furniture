import { Link, MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavbarItem = ({item}) => {
  return (
    <MenuItem>
       <Link></Link>
       <Typography>{item}</Typography>
    </MenuItem>
  )
}

export default NavbarItem
import { MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavbarItem = ({item}) => {
  return (
    <MenuItem>
       
       <Typography>{item}</Typography>
    </MenuItem>
  )
}

export default NavbarItem
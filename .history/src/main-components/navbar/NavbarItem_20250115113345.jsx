import { MenuItem } from '@mui/material'
import React from 'react'

const NavbarItem = ({item}) => {
  return (
    <MenuItem>
       {item}
    </MenuItem>
  )
}

export default NavbarItem
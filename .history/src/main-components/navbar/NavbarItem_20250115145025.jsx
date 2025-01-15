import { Link, MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavbarItem = ({item, url}) => {
    const {}
  return (
    <MenuItem>
       <Link href = {url} sx={{textDecoration : 'none', cursor : 'pointer'}}>
         <Typography fontSize='18px' color='black' >{item}</Typography>
       </Link>
    </MenuItem>
  )
}

export default NavbarItem
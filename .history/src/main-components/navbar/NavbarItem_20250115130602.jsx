import { Link, MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavbarItem = ({item, url}) => {
  return (
    <MenuItem>
       <Link href = {url} sx={{textDecoration : 'none', curso}}>
         <Typography fontSize='18px' color='black' >{item}</Typography>
       </Link>
    </MenuItem>
  )
}

export default NavbarItem
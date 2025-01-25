import { Box, MenuList } from '@mui/material'
import NavbarItem from './NavbarItem'


const Navbar = ({isNavbar, direct}) => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <Box height='100%' width='100%' display={isNavbar ? 'block' : 'none'}>
      <MenuList sx={{width : '100%', height : 'auto',
                     display : 'grid', gridTemplateColumns : direct ? '1fr' : 'repeat(8, 1fr)'}}>
        {
          navbarItems.map((item, idx) =>  {
            return (
                <NavbarItem item={item} url={`#${item}`} key={idx}/>
            )
          })
        }
    </MenuList>
    </Box>
  )
}

export default Navbar
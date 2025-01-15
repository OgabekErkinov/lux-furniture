import { MenuList } from '@mui/material'
import NavbarItem from './NavbarItem'


const Navbar = () => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <MenuList sx={{display : 'flex', width : '100%', justifyContent : 'space-evenly', my : '0.5rem'}}>
        {
          navbarItems.map((item, idx) =>  {
            return (
                <NavbarItem item={item} ur key={idx}/>
            )
          })
        }
    </MenuList>
  )
}

export default Navbar
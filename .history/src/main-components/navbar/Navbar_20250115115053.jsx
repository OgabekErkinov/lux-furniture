import { MenuList } from '@mui/material'
import NavbarItem from './NavbarItem'


const Navbar = () => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <MenuList>
        {
          navbarItems.map((item, idx) =>  {
            return (
                <NavbarItem/>
            )
          })
        }
    </MenuList>
  )
}

export default Navbar
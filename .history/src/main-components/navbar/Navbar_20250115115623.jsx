import { MenuList } from '@mui/material'
import NavbarItem from './NavbarItem'


const Navbar = () => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <MenuList sx={{displa}}>
        {
          navbarItems.map((item, idx) =>  {
            return (
                <NavbarItem item={item} key={idx}/>
            )
          })
        }
    </MenuList>
  )
}

export default Navbar
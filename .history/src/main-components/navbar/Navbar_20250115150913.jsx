import { MenuList } from '@mui/material'
import NavbarItem from './NavbarItem'


const Navbar = ({isNavbar, direction}) => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <MenuList sx={{display : isNavbar ? 'none' : 'flex', width : '75%', direction : direction, justifyContent : 'space-around', my : '0.5rem', mr : 'auto'}}>
        {
          navbarItems.map((item, idx) =>  {
            return (
                <NavbarItem item={item} url={`#${item}`} key={idx}/>
            )
          })
        }
    </MenuList>
  )
}

export default Navbar
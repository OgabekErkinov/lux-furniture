import { MenuList } from '@mui/material'
import NavbarItem from './NavbarItem'


const Navbar = ({isNavbar, direct}) => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <MenuList sx={{display : isNavbar ? 'flex' : 'none', width : '200%', height : 'auto', flexDirection : direct,  my : '0.5rem'}}>
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
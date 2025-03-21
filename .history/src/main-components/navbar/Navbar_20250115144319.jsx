import { MenuList } from '@mui/material'
import NavbarItem from './NavbarItem'


const Navbar = () => {
    const navbarItems = ['home', 'catalog', 'guarantees', 'products', 'about', 'delivery', 'vacancy', 'contacts']
  return (
    <MenuList sx={{display : 'flex', width : '100%', justifyContent : 'flex-start', my : '1rem', px : '0.5rem auto'}}>
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
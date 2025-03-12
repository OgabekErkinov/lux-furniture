import Guaranties from '../components/Guaranties'
import { Stack } from '@mui/material'
import Category from '../components/Category'
import HomeImages from '../components/HomeImages'
import useMedia from '../hooks/useMedia'
import NavCatalog from '../components/NavCatalog'
import About from '../components/About'
import Furnitures from '../components/Furnitures'

const Home = () => {
  const {xs, sm, md, lg, xl} = useMedia()
  return (
    <Stack spacing={0.5} height='auto' px={2} alignItems='center'>
      <HomeImages/>
      <Guaranties screen={'large'}/>
      <NavCatalog/>
      <Category/>
      <About/>
      <Furnitures/>
    </Stack>
  )
}

export default Home

import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../libs/theme'

const Providers = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <BrowserRouter>
      
          {children}
       
      </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default Providers

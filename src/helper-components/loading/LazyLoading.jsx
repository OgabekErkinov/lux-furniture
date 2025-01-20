import { Box } from '@mui/material'
import React from 'react'

const LazyLoading = () => {
  return (
    <Box height='100%' width='100%' sx={{
        bgcolor : 'grey',
        animation: "lazyLoad 1s ease-in-out",
        '@keyframes lazyLoad' : {
            "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        }
    }}>
    </Box>
  )
}

export default LazyLoading

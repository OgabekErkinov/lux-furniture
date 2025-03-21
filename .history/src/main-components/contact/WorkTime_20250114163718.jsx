import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const WorkTime = () => {
  return (
    <Box height='100%' width='100%'>
        <Stack height='100%' width='100%' alignItems='flex-end' gap='4px'>
            <Typography fontSize={{xs : '10px', sm : '12px'}} >Звоните: 10:00 - 20:00</Typography>
            <Typography fontWeight='600' fontSize={{xs : '10px', sm : '14px'}}>+998 71 500 00 00</Typography>
        </Stack>
    </Box>
  )
}

export default WorkTime
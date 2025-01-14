import React from 'react'

const WorkTime = () => {
  return (
    <Box height={{sm : '50%', md : '100%'}} width={{sm : '50%', md : '20%'}}>
              <Stack height='100%' width='100%' alignItems='center' gap='4px'>
                   <Typography fontSize={{xs : '10px', sm : '12px'}} >Звоните: 10:00 - 20:00</Typography>
                   <Typography fontWeight='600' fontSize={{xs : '10px', sm : '14px'}}>+998 71 500 00 00</Typography>
              </Stack>
          </Box>
  )
}

export default WorkTime
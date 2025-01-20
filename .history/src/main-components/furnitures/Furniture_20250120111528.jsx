import React from 'react'

const Furniture = () => {
  return (
    <Bo
              key={idx}
              bgcolor="#94C11F"
              borderRadius="10px"
              height="auto"
              display="flex"
              flexDirection="column"
              justifyContent="space-between">
              <Typography variant="h6" fontWeight="500" px='5px'>
                {component.title}
              </Typography>
              <Box
                component="img"
                src={component.image}
                alt={component.title}
                height="200px"
                width='100%'
                borderRadius="10px"
                style={{ objectFit: 'cover' }}
              />
            </Box>
  )
}

export default Furniture
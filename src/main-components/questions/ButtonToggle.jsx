import { CloseOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';


const ButtonToggle = ({ toggle }) => {
  return (
    <Box height="48px" width="48px" overflow='hidden' borderRadius='50%' m='10px' bgcolor='#67C15E' 
         display='flex' justifyContent='center' alignItems='center'>
        <CloseOutlined
          sx={{
            height: '42px',
            width: '42px',
            transform: toggle ? 'rotate(0deg)' : 'rotate(45deg)',
            transition: '0.4s',
            color: '#000000',
          }}
        />
    </Box>
  );
};

export default ButtonToggle;

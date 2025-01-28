import { CloseOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';


const ButtonToggle = ({ toggle, setToggle }) => {
  return (
    <Box height="48px" width="48px" overflow='hidden' borderRadius='50%' m='10px' bgcolor='#67C15E' display='flex' justifyContent='center'>
      <Button disableTouchRipple
        sx={{ height: '100%', width: '100%'}}
        onClick={() => setToggle(!toggle)}
      >
        <CloseOutlined
          sx={{
            height: '100%',
            width: '100%',
            transform: toggle ? 'rotate(0deg)' : 'rotate(45deg)',
            transition: '0.4s',
            color: '#000000',
          }}
        />
      </Button>
    </Box>
  );
};

export default ButtonToggle;

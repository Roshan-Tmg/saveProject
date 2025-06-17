import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  outline: 'none',
};

export default function AuthModal({open, handleClose}) {

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = () => {

        const path = location.pathname ==="/signup"?"/signin":"/signup";
        navigate(path);
    }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='text-center font-bold text-3xl pb-20'>
            Create Your Account
          </h1>
          {location.pathname ==="/signup"?<SignupForm/>:<SigninForm/>}

          <h1 className='text-center py-5 font-semibold text-lg text-gray-5'>
            {location.pathname ==="/signup"?"Already have Account":"Don't have an Account?"}
          </h1>
          <Button variant='outlined' onClick={handleNavigate}
          fullWidth size='large' sx={{
            borderRadius: "29px",
            py: "7px",
            color: "blue[500]",
            borderColor: "blue[500]",
          }}>
            {location.pathname ==="/signup"?"Sign In":"Create Account"}                 

          </Button>
        </Box>
      </Modal>
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: '4px',
};
const features = ["Unlimited access to all features",
    "Priority support",
    "Early access to new features",
    "Exclusive content and resources",
    "Discounts on future purchases",
    "Access to premium community events",
    "Personalized recommendations",
    "Ad-free experience",
    "Customizable settings and preferences",
    "Advanced analytics and reporting tools"];

export default function SubscriptionModel(handleClose, open) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);


    const [plan, setPlan] = React.useState('Anually');

    return (
        <div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-4'>
                            <IconButton onClick={handleClose} aria-label='delete'>
                                <CloseIcon />
                            </IconButton>

                        </div>
                        <div className='flex justify-center py-10'>
                            <div className='w-[80%] space-y-10'>
                                <div className='p-5 rounded-md flex items-center justify-between bg-state-400 shadow-lg'>
                                    <h1 className='text-xl-5'>
                                        to suscribe to unlock new features
                                    </h1>
                                    <img
                                        className='w-24 h-24'
                                        src='https://cdn.pixabay.com/photo/2024/' alt='Tick mark'
                                    />

                                </div>
                                <div className='flex justify-between border rounded-full px-5 py-3
                        border-gray-300'>

                                    <div>
                                        <span onClick={() => setPlan("Anually")} className='${plan === "Anually"? "text-black": "text-gray-500"}'>
                                            Anually
                                        </span>
                                        <span className='text-green-500 text-sm ml-5'>Save 12%</span>
                                    </div>
                                    <p onClick={() => setPlan("monthly")} className='${plan === "monthly"? "text-black": "text-gray-500"}'>
                                        Monthly
                                    </p>

                                </div>

                               <div className='space-y-3'>
                                    {features.map((item) => <div className='flex items-center space-x-5'>
                                        <FiberManualRecordIcon
                                            sx={{
                                                width: "7px",
                                                height: "7px",

                                            }}
                                        />
                                        <p className='text-xs'>{item}</p>
                                    </div>)}
                                </div>
                                                <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-5'>
                                                    <span className='line-through italic'>

                                                       रू 9,999.00 
                                                    </span>
                                                    <span className='px-5'>
                                                    रू 999.00 per month

                                                    </span>
                                                </div>
                            </div>

                        </div>


                    </div>
                </Box>
            </Modal>
        </div>
    );
}
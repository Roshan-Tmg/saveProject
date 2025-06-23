import React from 'react'
import { navigationMenu } from './NavigationMenu'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationICon from '@mui/icons-material/Notifications';
import ListAllIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/PendingActions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../Store/Auth/Action';



function Navigation() {
    const {auth} = useSelector(store=>store)
    const [anchorEl, setAnchorEl] = React.useState(null); 
    const dispatch = useDispatch();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const handlelogout = () => {
        // localStorage.removeItem('token');
        // navigate('/login');
        console.log("Logout");
        // Perform logout logic here
        handleClose();
        dispatch(logout());
    }
    return (
        <div className='h-screen sticky top-0 bg-white shadow-lg'>
            <div>
                <div className='py-5'>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter_bird_logo_2012.svg/24px-Twitter_bird_logo_2012.svg.png"
                        alt="Logo"
                        className="w-4 h-4 mx-auto"
                    />
                </div>
                <div className='space-y-6'>

                    {navigationMenu.map((item, idx) => (
                        <div
                            key={item.title || idx}
                            className='cursor-pointer flex items-center space-x-2 hover:bg-gray-100 rounded-md p-2'
                            onClick={() => item.title === "Profile" ? navigate(`/profile/${auth.user.id}`) : navigate(item.path)}
                        >
                            {item.icon}
                            <p className='text-sm font-semibold'>{item.title}</p>
                        </div>
                    ))}

                </div>
                <div className='py-10'>
                    <button className='bg-blue-500 text-white rounded-full px-4 py-2 w-full font-semibold hover:bg-blue-600 transition duration-200'>
                        Tweet
                    </button>
                </div>
                <div className='flex itelms-center justify-center'>
                    <div className='flex items-center space-x-3'>
                        <Avatar
                            alt='username'
                            src='https://images.unsplash.com/photo-1502685104226-e9df14d4d9d0?ixlib=rb-4.0.3&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
                        />
                        <div>
                            <p>{auth.user.fullName}</p>
                            <span className='opacity-70'>@{auth.user?.fullName.split(" ")
                            .join("_").toLowerCase()}</span>
                        </div>

                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handlelogout}>Logout</MenuItem>

                        </Menu>

                        <div>

                        </div>



                    </div>

                </div>
            </div>

            {/* <div className='flex itelms-center justify-center'>
                <div className='flex items-center space-x-3'>
                    <Avatar
                    alt='username'
                    src='https://images.unsplash.com/photo-1502685104226-e9df14d4d9d0?ixlib=rb-4.0.3&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
                    />
                    <div>
                        <span>Code with man</span>
                        <span className='opacity-70'>@codewith josh</span>
                    </div>
                          

                </div>

        </div> */}


        </div>
    )
}

export default Navigation

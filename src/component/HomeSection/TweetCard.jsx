import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function TweetCard() {
    const [anchorEl, setAnchorEl] = React.useState(null); // ✅ Correct for .jsx

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
        console.log("Delete Tweet");
        handleClose();
    }
    const navigate = useNavigate();

    const handleOpenReplyModel = () => {
        console.log("Open Reply Model");
        // handleClose();
    }
    const handleCreateRetweet = () => {
        console.log("Create Retweet");
        // handleClose();
    }
    const handlelikeTweet = () => {
        console.log("Like Tweet");
        // handleClose();
    }
    return (
        <div className=''>
            {/* <div className='flex items-center font-semibold'>
        <RepeatIcon  />
        <p>You retweeted</p>

      </div> */}
            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate('/profile/${5}')}
                    className='cursor-pointer'
                    alt='uesrname'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter_bird_logo_2012.svg/24px-Twitter_bird_logo_2012.svg.png'
                />
                <div className='w-full'>
                    <div className='flex jsutify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Coder bhai</span>
                            <span className='text-gray-600'>@codebhai .2m</span>
                            <img className='m1-2 w-5 h-5' 
                            src="https://media.istockphoto.com/id/1313547780/vector/profile-verification-check-marks-icons-vector-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=XDWxGC05gd-sTn_cBvlI2aG1onqOdiVdPb0IeFO-Q2M="  >
                                
                            </img>
                        </div>
                        <div>

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
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='cursor-pointer'>
                            <p className='mb-2 p-0'>Nice Content</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src="https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI="   ></img>
                        </div>
                        <div className='flex py-5 flex-wrap flex-row space-y-3'>
                            <div className='flex space-x-3  items-center text-gray-600'>
                                <ChatIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>

                            </div>
                            <div className='${true? "text-pink-600" : "text-gray-600"} flex space-x-3  
                                    items-center'>
                                <RepeatIcon
                                    onClick={handleCreateRetweet}
                                    className='cursor-pointer' />
                                <p>54</p>

                            </div>
                            <div className='${true? "text-pink-600" : "text-gray-600"} flex space-x-3  
                                    items-center'>
                                {true ? <FavoriteIcon
                                    onClick={handlelikeTweet}
                                    className='cursor-pointer' />
                                    : <FavoriteBorderIcon
                                        onClick={handlelikeTweet} />}
                                <p>54</p>

                            </div>
                            <div className='flex space-x-3 items-center text-gray-600'>

                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>100</p>
                            </div>
                            <div className='flex space-x-3 items-center text-gray-600'>


                            <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                           

                        </div>
                        

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TweetCard

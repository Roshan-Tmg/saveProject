import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';  
import NotificationIcon from '@mui/icons-material/Notifications';
import ListAllIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/PendingActions';

export const navigationMenu = [
  { title: 'Home', icon: <HomeIcon />, path: '/home' },
  { title: 'Explore', icon: <ExploreIcon />, path: '/explore' },
  { title: 'Notifications', icon: <NotificationIcon />, path: '/notifications' },
  { title: 'Lists', icon: <ListAllIcon />, path: '/lists' },
  { title: 'Communities', icon: <GroupIcon />, path: '/communities' },
  { title: 'Verified', icon: <VerifiedIcon />, path: '/verified' },
  { title: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { title: 'More', icon: <PendingIcon />, path: '/more' },
];

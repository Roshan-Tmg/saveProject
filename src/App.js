import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './component/Authentication/Authentication';
import HomePage from './component/homepage/HomePage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { gettUserProfile } from './Store/Auth/Action';
import { useNavigate } from 'react-router-dom';


function App() {
  const jwt = localStorage.getItem('jwt');
  const {auth} = useSelector(store=>store)
  const dispatch= useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt) {
        dispatch(gettUserProfile(jwt))
        navigate('/home');
    }
      

  },[auth.jwt])

  return (

    <div className="">
      <Routes>
        <Route path="/*" element={auth.user?<HomePage />:<Authentication/>} />
        
        </Routes>
       
    </div>
  );
}

export default App;

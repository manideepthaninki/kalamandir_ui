import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Amplify, { Auth } from 'aws-amplify';
import Routes from './components/Home/Routes';
import Test from './components/Test.js';
import {Grid} from '@material-ui/core';
import PromoExchangeItem from './components/promo_item_exchange/PromoExchangeItem';
import Dashboard from './components/Dashboard/Dashboard';
import ItemModal2 from './modals/Item_modal/ItemModal2';
import ItemModal from './modals/Item_modal/ItemModal';

import { Button } from '@material-ui/core'
import {useState} from 'react';
import LoginPage from './components/LoginPage/LoginPage';
Amplify.configure({
  Auth: {
    identityPoolId: 'eu-west-2:c8a9f2b6-5833-4c45-990b-472ec967355f',
    region: 'eu-west-2',
    identityPoolRegion: 'eu-west-2',
    userPoolId: 'eu-west-2_yduQXzqcP',
    userPoolWebClientId: '3fsce7b7947ric4af4mnn88l8h',
  },
  oauth: {
    domain: 'kalamandhir123.auth.eu-west-2.amazoncognito.com',
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'http://localhost:3000/oauth2/redirect',
    redirectSignOut: 'http://localhost:3000/',
    responseType: 'token'
  }
});


function App(props) {
  const [userLoggedIn, setUserLoggedIn] =useState(false);
  
  const [showModal,setShowModal]=useState(false)
  
  const handleClose=()=>{
    setShowModal(false)
  }
  const handleClickOpen=()=>{
    setShowModal(true)
  }
//   useEffect(()=>{
//     setUserLoggedIn(localStorage.getItem('userLogged'));
// },[])

  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Dashboard /> 
   

     
      
{/**
   <LoginPage /> 
   <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Open simple dialog
      </Button>
      <ItemModal  open={showModal} onClose={handleClose} />
      </div>  
*/}
     

  
    </div>
  );
}

export default App;

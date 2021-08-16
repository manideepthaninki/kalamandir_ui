import React,{useState} from 'react'
import {Auth} from 'aws-amplify';
import {Button} from '@material-ui/core';
const  Profile=()=> {

const [loggedInUser,setLoggedInUser] =useState(localStorage.getItem('authUser'))

    const handelSignOut=()=>{
       
        Auth.signOut();
        localStorage.setItem('userLoggedIn', false)
      }

     
      
    return (
        <div>
        <h1> PROFILE </h1>
<p>{loggedInUser}</p>
        <Button variant="outlined" color="primary"  style={{ marginTop: "20px" }} type="button" onClick={handelSignOut}>SignOUT</Button>

        </div>
    )
} 
export default Profile;

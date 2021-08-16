import React, {useState, Component } from 'react'
import PropTypes from 'prop-types'
import CreateUser from './create-user'
import {Button} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';


const UsersList=()=>{
    const [isCreateUsershow,setisCreateUsershow]=useState(false);
    const [isAlertShow,setisAlertShow]=useState(true);


   const createdUserHandler=()=>{
    setisCreateUsershow(true)
    }
    const onCloseHandlar=()=>{
        setisCreateUsershow(false)
    }
    const onFormSubmitHandler=()=>{
        setisCreateUsershow(false)
    }
    
    return(
<div>
<Button variant="primary" onClick={createdUserHandler}>
Create User
</Button>



UsersList...
{ isCreateUsershow && <CreateUser onFormSubmit={onFormSubmitHandler} />}

</div>

    );

}

export default UsersList
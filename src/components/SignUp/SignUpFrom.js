
import {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'


const SignUpForm=()=>{
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();
    
    
    const userNameHandler=(event)=>{
    
        setUserName(event.target.value)
    }
    
    const passwordHandler=(event)=>{
    
        setPassword(event.target.value)
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    console.log(userName)
    console.log(password)
    
    }
    return(
        <div>
        <div className="container " style={{ width: '20rem', height: '20rem' }}>
            <div className="card text-dark bg-light my-10" >
                <div className="card-title">SignUp</div>
                <div className="card-body">
                    <form  onSubmit={onSubmitHandler}>
                        <div className="row g-3" className="col-md-6">
                            <label for="username" className="form-label" className="required-field">UserName</label>
                            <input type="text" className="form-control" className="center-block" style={{ marginLeft: '3rem' }}
                                name="username"
                                id="username" 
                                value={userName}
                                onChange={userNameHandler}
                                />
                        </div>

                        <div className="row g-3" className="col-md-6" >
                            <label for="password" className="form-label" className="required-field">Email</label>
                            <input type="password" className="form-control" className="center-block" style={{ marginLeft: '3rem' }}
                                name="password"
                                id="password"
                                value={password}
                                onChange={passwordHandler}/>
                        </div>

                        <div className="row g-3" className="col-md-6" >
                            <label for="password" className="form-label" className="required-field">Password</label>
                            <input type="password" className="form-control" className="center-block" style={{ marginLeft: '3rem' }}
                                name="password"
                                id="password"
                                value={password}
                                onChange={passwordHandler}/>
                        </div>

                        <div className="row g-3" className="col-md-6" >
                            <label for="password" className="form-label" className="required-field">ConfirmPassword</label>
                            <input type="password" className="form-control" className="center-block" style={{ marginLeft: '3rem' }}
                                name="password"
                                id="password"
                                value={password}
                                onChange={passwordHandler}/>
                        </div>

                        <div className="col-md-3" style={{ marginLeft: "150px", marginTop: "10px" }}>
                            <Button type="submit" >Login</Button>
                        </div>
                         <p>To creat new account<a href="/www.google.com"> SignUp</a></p>

                    </form>
                </div>
            </div>
        </div>

    </div>
    )
}

export default SignUpForm;
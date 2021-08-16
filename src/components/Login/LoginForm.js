import { useState } from 'react'
import { Avatar, Grid, Paper, TextField, ButtonGroup, Button } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import {Auth} from 'aws-amplify';



const LoginForm = (props) => {

    const paperStyleForSignUp = { padding: 20, height: "68vh", width: "48vh", margin: "20px auto" };
    const paperStyleForLogin = { padding: 20, height: "50vh", width: "40vh", margin: "20px auto" };

    const avtarStyle = { backgroundColor: '#3535f5' }

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isLoginForm, setIsLoginForm]=useState(true);
    const [isSignUpForm, setIsSignUpForm]=useState(false);
    const [isConfirmEmailForm, setIsConfirmEmailForm]=useState(false)


    const userNameHandler = (event) => {

        setUserName(event.target.value)
    }

    const passwordHandler = (event) => {

        setPassword(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(isLoginForm){
            console.log(userName)
            console.log(password)
        }
        else if(isSignUpForm){

           setIsConfirmEmailForm((prevState)=>!prevState);
        }
        else{

        }
       

    }

    const switchFormModeHandler=()=>{
        setIsLoginForm((prevState)=>!prevState);
        setIsSignUpForm((prevState)=>!prevState);
    }

   const  connectWithGoogleHandler=()=>{
    Auth.federatedSignIn({provider:'Google'});
    
   }
    return (
        <Grid >

        {!isConfirmEmailForm?  
              <Grid>
            <Paper elevation={10} style={isLoginForm?paperStyleForLogin:paperStyleForSignUp}>


                <Grid align="center">
        
              
                    <Avatar style={avtarStyle}><LockIcon /></Avatar>

                    <h2>{isLoginForm ? 'POS Login':'SignUp'}</h2>


                    <form onSubmit={onSubmitHandler} autoComplete="off">

                        <TextField id="username" label="UserName" fullWidth required
                            value={userName}
                            onChange={userNameHandler}
                        />
                        {!isLoginForm ?<TextField id="password" label="Email" fullWidth required style={{ marginTop: "10px" }}
                        type="password"
                        value={password}
                        onChange={passwordHandler}
                    />:null}
                        <TextField id="password" label="Password" fullWidth required style={{ marginTop: "10px" }}
                            type="password"
                            value={password}
                            onChange={passwordHandler}
                        />
                        {!isLoginForm ?  <TextField id="password" label="Confirm Password" fullWidth required style={{ marginTop: "10px" }}
                            type="password"
                            value={password}
                            onChange={passwordHandler}
                        />:null}

                        

                        <Button variant="outlined" color="primary" fullWidth style={{ marginTop: "20px" }} type="submit">
                        {isLoginForm  ? 'Login':'SignUp'}
                          </Button>
                          
                         <Button type='button' fullWidth style={{ marginTop: "20px" ,color:'blue'}} onClick={connectWithGoogleHandler}>Connect with Google</Button>
                          <Button type='button'
                          disableRipple style={{textTransform: 'lowercase'}}
                          color="secondary" 
                          onClick={switchFormModeHandler}
                          >
                          {isLoginForm ? 'Create new account': 'Login with exits account'}
                          
                          </Button>
                    </form>
                    </Grid>
                    </Paper>
                    </Grid>:
                    
                    <Grid>
                    <Paper elevation={10} style={{ padding: 20, height: "25vh", width: "35vh", margin: "20px auto" }}>
                    <label for="name" >Verfy Code : </label>
                    <input style={{ width: "80px",marginRight:"10px" }}/>
                    <Button variant="outlined" color="primary"  style={{ marginTop: "20px" }} type="submit">
                      Cofirm
                          </Button>
                          </Paper>
                    </Grid>
                }
               
        </Grid>
    )
}

export default LoginForm;
import {
    Avatar, Grid, Paper,
    TextField, ButtonGroup, Button, Select,
    makeStyles, MenuItem, InputLabel, Typography, CardContent, Card, CardActions
} from '@material-ui/core'
import { BorderAll } from '@material-ui/icons';
import { ReactComponent as Design } from '../../assets/right_corner_design.svg'
import { ReactComponent as OtsiLogo } from '../../assets/otsi_logo.svg';
import {ReactComponent as BottomDesihn} from '../../assets/login_left_bottom_corner_design_.svg'
import mainLogo from '../../assets/LeftGraphic2.png'
import './LoginPage.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import GoogleButton from 'react-google-button';
import { Auth, Hub } from 'aws-amplify';
import { useState, useEffect,useRef } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode";





const useStyles = makeStyles({




    girdItem1: {
        height: '100vh'
    },
    girdItem2: {
        height: '100vh'    
    },
    image: {

        height: '900px',
        backgroundColor: '#119FDA'
    },


    loginForm: {
     
        width: '450px',
        height: '422px',
        marginLeft:'267px',
        marginTop:'-27px'
       
        
    },
    input: {

        width: '450px',
        height: '40px',
        marginTop: '16px',
        background: ' #F4F8F7 ',
        borderStyle: 'none'

    },
    text32: {
       
        color: '#07456B',
        font: 'Montserrat',
        opacity: 1
    },
    otsiLogo: {
       position:"absolute",
        top: 92,
        left: 863,
        width: 252,
        height: 103
    },
    design: {
        position:'relative' ,
        marginTop: '-164px',
    marginRight:' -1069px'
    },

    bottomDesign:{
        marginLeft: '-711px',
        marginTop: '-121px'
    },
    loginBtn: {
        marginTop: '16px',
        backgroundColor: '#119FDA',
        //  fontFamily:'Montserrat',
        color: '#FFFFFF'

    }
})
const LoginPage = (props) => {

    const classes = useStyles();

    const [user, setUser] = useState(null);
    const [userGroups, setUserGroups] = useState(null);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [selectedStore, setSelectedStore] = useState('');
    const [stores, setStores] = useState([]);
    const [loginClick,setLoginClick]=useState(false);
   

    useEffect(() => {
        if(loginClick){
            setLoginClick(false)
        const loginModel={
            "email":userName,
            "password":password,
            "storeName":selectedStore
        }
        axios.post('http://localhost:8002/auth/login',loginModel).then((res) => {

            if(res.data.statusCode === 200){
                props.history.push("/dasboard")
               const claims=jwt_decode(res.data.authResponce.idToken)          
               localStorage.setItem('loggedInUser',claims["cognito:username"])
              console.log('claims--------'+ claims["cognito:username"])
              }
            else{
                console.log(res)
                setUserName('')
                setSelectedStore('')
                setPassword('')
                toast.error(res.data.errorDescription)
                
            }
            console.log(res.data)
           // setStores(res.data)
            console.log("stores after login --->",stores)
        }).catch(err => { 
            setUserName('')
                setSelectedStore('')
                setPassword('')
                
            toast.error("Internal server error")

            console.log(err)
           
        })
        }
    },[loginClick,userName,password]);


    useEffect(() => {
        console.log("1111111111111111")
        axios.get('http://localhost:9093/user/getstores').then((res) => {
            console.log(res.data)
            setStores(res.data)
            console.log("stores --->",stores)
        }).catch(err => console.log(err))
    },[]);
    const connectWithGoogleHandler = () => {
        Auth.federatedSignIn({ provider: 'Google' });
    }
    const userNameHandler = (event) => {

        setUserName(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const storeHandler = (event) => {
        setSelectedStore(event.target.value)
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        setLoginClick(true)
      
        console.log(loginClick)
        console.log(userName)
        console.log(password)
    }
    
    return (
<div style={{display: "flex",  overflow: 'hidden'}}>
<Grid item lg={4} className={classes.girdItem1}>

<div className={classes.image} >
<div>
    <img src={mainLogo} />
</div>

<div style={{ position: 'absolute', top: 196, left: 66, right: 82 }}>

    <Typography style={{
       marginTop: '-93px',
        left: 0, width: 253, height: 37, color: '#FFFFFF', opacity: 1, fontSize: '26px', textAlign: 'left',    fontFamily: '-webkit-pictograph'

    }}  >
        Application Title
    </Typography>


    <Typography variant="body2" style={{
        marginTop:'25px',lineHeight: '26px',
        width: 390, height: 130, color: '#FFFFFF', size: '8px',
        opacity: 1, textAlign: 'left', letterSpacing: '0px', font: 'Montserrat'
    }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries

    </Typography>


    <Button size="small" style={{ position: 'absolute', left: 0, borderRadius: 26, width: 160, height: 36, top:155, border: '1px solid #FFFFFF' }}>
        <p style={{ position: 'absolute', left: 35, top: 7, size: 10, color: '#FFFFFF' }}>Know More</p>
    </Button>


</div>
</div>

</Grid>
<Grid item lg={8} className={classes.girdItem2}>
<Design className={classes.design} />

<OtsiLogo className={classes.otsiLogo} />

<div  className={classes.loginForm} >
<h2 className={classes.text32}>POS Login</h2>

<form onSubmit={formSubmitHandler}>
<div  >

    <TextField id="username" className={classes.input} label="UserName"
        InputLabelProps={{
            style: { padding: "0px 41px 1px;", marginTop:"-9px",marginLeft:'51px', fontSize: '12px' }
        }}
        
        value={userName}
        onChange={userNameHandler}
    />
    <PermIdentityIcon color="disabled"
    style={{ position: 'absolute', left: '787px', top: '321px', width: 20, height: 20 }} />
</div>
<div style={{ position: 'relative' }}>
    <TextField label="Password" className={classes.input}
        InputLabelProps={{
            style: { padding: "0px 41px 1px;",marginTop:"-9px",marginLeft:'51px',fontSize: '12px' }
        }}

        type="password"
        id="password"
        value={password}
       
        onChange={passwordHandler}

    />
    <LockOutlinedIcon color="disabled" style={{ position: 'absolute', left: '9px', top: '24px', width: 20, height: 20, opacity: 1 }} />

</div>
<div style={{ position: 'relative', display: 'inline-block' }}>


    <Select label="Store" className={classes.input}

        value={selectedStore} onChange={storeHandler}
    >

    
        {stores.map((store) => {
          return  <MenuItem  key={store.id} value={store.storeName}>{store.storeName}</MenuItem>  
          
        })}

      
    </Select>
    <StorefrontOutlinedIcon color="disabled" style={{ position: 'absolute', left: '9px', top: 25, width: 20, height: 20, opacity: 1 }} />

    <InputLabel id="demo-simple-select-label"
        style={{ position: 'absolute', left: '42px', top: '30px', fontSize: '12px' }}
    >Store</InputLabel>
</div>
<Button type='submit' variant="contained" className={classes.loginBtn} fullWidth disabled={!userName ||!selectedStore || !password}>
    Login
</Button>

</form>
                     </div>
{/*<BottomDesihn className={classes.bottomDesign}/>
 */}
</Grid>
</div>
       
    )
}
export default LoginPage;
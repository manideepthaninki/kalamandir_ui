import React, { useState ,useEffect} from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import  OtsiLogo2  from '../../../assets/OtsiSideLogo12.png';
import  UserPic  from '../../../assets/user2.png';
import { ReactComponent as CheckList } from '../../../assets/Check List.svg';
import BorderAllRoundedIcon from '@material-ui/icons/BorderAllRounded';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";
import { ReactComponent as MenuListIcon } from '../../../assets/menuListIcon.svg';




const SideNavebar=() =>{
    const sideNavBarData=[
        {
            title:'Create Delivery slip',
            path:'/',
            icon:<MenuListIcon style={{width:'14px',height:'14px'}} />,
            className:'nav-listItem'
    },
    {
        title:'New Sale',
        path:'/',
        icon:<MenuListIcon style={{width:'14px',height:'14px'}} />,

        className:'nav-listItem'
},
{
    title:'Promo Item Exchange',
    path:'/',
    icon:<MenuListIcon style={{width:'14px',height:'14px'}} />,

    className:'nav-listItem'
},  {
    title:'Generate Return Slip',
    path:'/',
    icon:<MenuListIcon style={{width:'14px',height:'14px'}} />,

    className:'nav-listItem'
},  {
    title:'Create Customer',
    path:'/',
    icon:<MenuListIcon style={{width:'14px',height:'14px'}} />,

    className:'nav-listItem'
},
{
    title:'Tag Customer To GV',
    path:'/',
    icon:<MenuListIcon style={{width:'14px',height:'14px'}} />,

    className:'nav-listItem'
},
{
    title:'POS Day Close',
    path:'/',
    icon:<MenuListIcon style={{width:'14px',height:'14px'}} />,

    className:'nav-listItem'
} ]
const [loggedInUser, setLoggedInUser]=useState("");
let history=useHistory();

useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'));
},[])

    return (


<div style={{}}>
    

     <div style={{width:'100%',display: 'flex'}}>
     <img  src={OtsiLogo2} alt="otsiSideLogo" style={{  width: '57px',height: '23px'}}/> 

     </div>



    
     <div  style={{height:'auto',marginTop:'24px'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'24px',width:'100%'}}>
           <img  src={UserPic} alt="userPic" style={{   width: '79px',height: '79px'}}/> 
         </div>
         <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <p style={{   color:'#FFFFFF',opacity: 1}}>{loggedInUser}</p>
         </div>
     </div>   




     <div  style={{height:'auto',marginTop:'16px'}}>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <CheckList style={{ width: '43px',height: '48px'}} />
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'12px'}}>
      <p style={{color:'#FFFFFF',opacity:0.7,fontFamily:'-webkit-pictograph',font:'normal normal normal 12px/15px Montserrat',
      fontFamily:'unset]',marginBottom:'0px'}}>
      Cash Memo & Delivery Slips</p>
      </div>

     
      <div style={{color:'#0077A8',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <i class="fas fa-arrow-alt-circle-left"></i>
     <Link style={{textDecoration: 'none'}}onClick={()=>{history.goBack(); }}>Back</Link>
     </div>

  </div> 


{/**


        <div >
        <CheckList style={{ position:'absolute', top:238, left:82,width: '43px',height: '48px'}} />
        <p style={{ position:'absolute', top:291, left:30,width: '138px',height: '30px',color:'#FFFFFF',opacity:0.7,fontFamily:'-webkit-pictograph',font:'normal normal normal 12px/15px Montserrat',fontFamily:'unset]'}}>
        Cash Memo & Delivery Slips</p>
        </div>

*/}


        


        <div style={{ position:'absolute',top:338, left:8,width:'192px',height:'32px'}}>
        <ul style={{ listStyle: 'none',alignItems:'center'}}>
        {sideNavBarData.map((item,index)=>{
           return(   
            <li
            id={window.location.pathname == item.path ?"active":""}
            key={index} style={{padding: '0px 0px 11px 0px'}}>
            <Link to={item.path} style={{color: '#f8f9fa' , textDecoration: 'none',display:'flex',flexDirection:'row'}}>
           <div style={{opacity: 0.7,flex:'10%',placeItems:'start',marginLeft:"-40px"}}>{item.icon} </div> 
            <div style={{marginTop:'5px',fontSize:'12px',color:'#FFFFFF',opacity: 0.7,letterSpacing: '0px',flex:'80%' ,display:'grid',placeItems:'start'    }}>{item.title}</div>
            </Link>
            </li>) 
        })}
        </ul>
        
        </div>


 </div>
    )
}

export default SideNavebar;

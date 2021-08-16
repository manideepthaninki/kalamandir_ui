import { Typography } from '@material-ui/core';
import React from 'react'
import DressIcon from '../../assets/dress.png';
import MoreVertIcon from '../../assets/MoreVertIcon.png';
 const DisplayDevliverySlipIteams=(props)=> {
    return (
        <>
    
        
      {props.data.filter((item)=>{
       return Object.keys(item).length != 0
      }).map((row,key)=>(

<div style={{height:'59px',width:'100%',position:'relative',marginLeft:'23px'}}>

<div style={{height:'59px',width:'39px',position: 'absolute',left:0}}>
<img  src={DressIcon} alt="otsiSideLogo" style={{  width: '39px',height: '59px'}}/> 
</div>

<div style={{height:'47px',width:'186px',position: 'absolute',left:'92px'}}>
<Typography style={{color:'#1E1E1E',opacity: 1,textAlign:'left',fontSize:'16px'}}><b>{row.itemDesc}</b></Typography>
<Typography style={{opacity: 0.8,textAlign:'left',fontSize:'14px'}}>Single Unit</Typography>
</div>

<div style={{height:'43px',width:'55px',position: 'absolute',left:'353px'}}>
<Typography style={{opacity: 0.8,textAlign:'left',fontSize:'14px'}}>MRP</Typography>
<Typography style={{color:'#1E1E1E',opacity: 1,textAlign:'left',fontSize:'16px'}}><b>₹{row.mrp}</b></Typography>
</div>

<div style={{height:'43px',width:'39px',position: 'absolute',left:'481px'}}>
<Typography style={{opacity: 0.8,textAlign:'left',fontSize:'14px'}}>Pieces</Typography>
<Typography style={{color:'#1E1E1E',opacity: 1,textAlign:'left',fontSize:'16px'}}><b>{row.qty}</b></Typography>
</div>

<div style={{height:'43px',width:'116px',position: 'absolute',left:'570px'}}>
<Typography style={{opacity: 0.8,textAlign:'left',fontSize:'14px'}}>Discount type</Typography>
<Typography style={{color:'#1E1E1E',opacity: 1,textAlign:'left',fontSize:'16px'}}><b>{row.discountType}</b></Typography>
</div>

<div style={{height:'43px',width:'116px',position: 'absolute',left:'736px'}}>
<Typography style={{opacity: 0.8,textAlign:'left',fontSize:'14px'}}>Promo Discount</Typography>
<Typography style={{color:'#1E1E1E',opacity: 1,textAlign:'left',fontSize:'16px'}}><b>{row.promoDisc}₹</b></Typography>
</div>

<div style={{height:'43px',width:'55px',position: 'absolute',left:'920px'}}>
<Typography style={{opacity: 0.8,textAlign:'left',fontSize:'14px'}}>Total</Typography>
<Typography style={{color:'#1E1E1E',opacity: 1,textAlign:'left',fontSize:'16px'}}><b>{row.netAmount}₹</b></Typography>
</div>

<div style={{height:'47px',width:'39px',position: 'absolute',left:'1097px'}}>
<img  src={MoreVertIcon} alt="MoreVertIcon" style={{  width: '39px',height: '47px'}}/> 
</div>

</div>

        
      ))
    
    }  

        </>
    )
}
export default DisplayDevliverySlipIteams;

import { Dialog, DialogContent, DialogTitle,Divider, Typography,makeStyles,InputLabel ,Input,MenuItem,TextField} from '@material-ui/core'
import React,{useState} from 'react';
import { Form, Modal, Button, Col } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import './ItemModal.css'
import DressIcon from "../../assets/dress.png";
import BarcodeIcon from "../../assets/barcode.png";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    input: {

        width: '354px',
        height: '40px',
        marginTop: '9px',
        background: ' #F4F8F7 ',
        borderStyle: 'none',
left:'1px',
    },   
  }));

const ItemModal=(props)=> {
    const classes = useStyles();
  
    const {open,onClose,item,addHandler}=props;

const handleClose=()=>{
    onClose()
}
const submitHandler=()=>{
    addHandler(item)
    
}

    return (
        <div >
       
    
       
          <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} 
          style={{height:'637px',width: '394px',left:'523px',overflow:'hidden',position:'absolute'}}
          PaperProps={{
            style: {
                margin: '0px 0px 0px 0px', 
                position: 'relative',
                 overflow: 'hidden'
            }
            
          }}
          
          >
          <div style={{padding:'20px 20px 20px 20px', overflow:'hidden',height:'637px',width: '394px',}}>
          
          <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{height:'100px', padding:'20px 20px 20px 20px'}}>
          <button id = "x" style={{
            position: 'absolute',
            background: '#fcfbfb05',
            color: '#100f0f',
            top: '6px',
            right: '6px',
            border: 'none',

          }}>
            X
        </button>
          <div style={{height:'68px',width:'354'}}>
          <img src={BarcodeIcon} alt="BarcodeIcon" style={{ position: 'absolute', left: '20px', height: '51px', width: '51px' }} />
          <Typography style={{ position: 'absolute', left: '85px', height: '15px', width: '56px',fontSize:'12px' }}>Bar Code</Typography>
          <Typography style={{ position: 'absolute', left: '85px',top:'55px', height: '24px', width: '152px',fontSize:'20px' }}>{item.barcode}</Typography>
          </div>
          </DialogTitle>
        
          <Divider />
        
          <DialogContent style={{height:'637px',padding:'20px 20px 20px 20px'}}>
          
          <img src={DressIcon} alt="DressIcon" style={{ position: 'absolute', left: '10px',top: '122px', height: '118px', width: '79px' }} />
          <div style={{position:'relative'}}>
          <Typography style={{height:'18px',width:'155px',fontSize:'14px',left:'57px',position:'absolute'}}>{}item.itemDesc</Typography>
          <Typography style={{height:'18px',width:'155px',fontSize:'14px',top:'22px',left: '57px',position:'absolute'}}>Single Unit</Typography>
          <Typography style={{height:'21px',width:'50px',fontSize:'25px',top:'38px',left: '55px',position:'absolute'}}><b>MRP</b></Typography>
          <Typography style={{height:'21px',width:'50px',fontSize:'25px',top:'38px',left: '136px',position:'absolute'}}><b>{item.mrp}₹</b></Typography>
          </div>
          
          

    <div style={{ position: 'relative', display: 'inline-block',left:'-20px',top:'92px' }}>
    <Select label="Store" className={classes.input} disabled={true}>
    <MenuItem   value='pecies'>Pecies</MenuItem> 
    <MenuItem   value='pecies'>Meters</MenuItem>       
    </Select>
    <InputLabel id="demo-simple-select-label"
      style={{ position: 'absolute', left: '17px', top: '23px', fontSize: '12px' }}>Picese</InputLabel>
    </div>

    <div style={{ position: 'relative', display: 'inline-block',left:'-43px',top:'94px',width: '354px' }} >
    <TextField type='number' min="1" pattern="^[0-9]" id="Promo Discount" label="Qty" 
    style={{background: ' #F4F8F7 ',borderStyle: 'none',width: '387px',marginLeft:'27px',
    marginTop: '9px'}}
    InputLabelProps={{style: {padding: "0px 41px 1px;", marginTop:"0px",marginLeft:'3px', fontSize: '14px'} }}
    value={item.qty}
    
    /> 
    </div>

    <div style={{ position: 'relative', display: 'inline-block',left:'-43px',top:'94px',width:'354px' }} >
    <TextField id="SMID" label="SM ID" style={{background: ' #F4F8F7 ',borderStyle: 'none',width: '387px',
    marginLeft:'27px',marginTop: '9px'}}
    InputLabelProps={{style: {padding: "0px 41px 1px;",marginTop:"1px",marginLeft:'1px',fontSize: '14px'} }}
    value={item.salesMan}
    
    /> 
    </div>

    

{/**
<div style={{ position: 'relative', display: 'inline-block',left:'-43px',top:'94px',width:'354px',background: ' #F4F8F7 ' }} >
    <Input defaultValue="Hello world" inputProps={{style: {padding: "0px 41px 1px;",marginTop:"-9px",marginLeft:'51px',marginTop: '9px',width: '387px',fontSize: '12px'}, 'aria-label': 'description' }} />
</div>

*/}
    

    <div style={{ position: 'relative', display: 'inline-block',left:'-20px',top:'94px' }}>
    <Select label="DisCountType" className={classes.input}>
    <MenuItem   value='pecies'>Pecies</MenuItem> 
    <MenuItem   value='pecies'>Meters</MenuItem>       
    </Select>
    <InputLabel id="demo-simple-select-label"
      style={{ position: 'absolute', left: '17px', top: '23px', fontSize: '12px' }}>Discount Type</InputLabel>
    </div>

    

    <div style={{ position: 'relative', display: 'inline-block',left:'-43px',top:'94px',width:'354px' }} >
    <TextField id="Promo Discount" label="Promo Discount" style={{background: ' #F4F8F7 ',borderStyle: 'none',width: '387px',
    marginLeft:'27px',marginTop: '9px'}}
    InputLabelProps={{style: {padding: "0px 41px 1px;", marginTop:"-1px",marginLeft:'4px', fontSize: '14px'} }}
       value={item.promoDisc}
    />
    
</div>

    
    <Typography style={{height:'25px',width:'50px',fontSize:'21px',top:'490px',left: '114px',position:'absolute'}}><b>Total</b></Typography>
    <Typography style={{height:'25px',width:'100px',fontSize:'21px',top:'490px',left: '200px',position:'absolute'}}><b>{item.netAmount} ₹</b></Typography>
    <Button variant="contained" color="primary" 
    style={{background: '#119FDA 0% 0% no-repeat padding-box',position:'absolute',top:'524px',left:'22px',width:'352px'}}
    
    onClick={submitHandler}
    >ADD</Button>

          </DialogContent>
          </div> 
          </Dialog>  
         
        </div>
    )
}
export default ItemModal;

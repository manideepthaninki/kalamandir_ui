import React from 'react'
import { Grid, TextField, Button, Divider, makeStyles,Select,MenuItem } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import  './PromoExchangeItem.css';
import TableForDeliverySlip from '../../common_utils/TableForDeliverySlip/TableForDeliverySlip';

const useStyles = makeStyles({
div1: { height: '100vh', width: '100%', backgroundColor: '#F1F5F9', padding: '20px 20px 20px 20px'},
input1: {width: '268px', height: '40px', border: '1px solid #CCCCCC',borderRadius: '3px',background:'#FFFFFF 0% 0% no-repeat padding-box'},
input2:{marginLeft: '25px', width: '268px', height: '40px', border: '1px solid #CCCCCC',borderRadius: '3px'},
button1: {marginLeft: '15px', width: '89px', height: '40px',background: '#119FDA 0% 0% no-repeat padding-box'},
button2: {marginLeft: '230px', width: '299px', height: '40px',background: '#119FDA 0% 0% no-repeat padding-box'},
table2:{lineHeight:'5px',marginTop:'10px'},
table3:{lineHeight:'5px',marginTop:'-9px'}

})

function createData(id,barCode, gross, qty, promoDisc, manualDisc,netAmount) {
  return {id, barCode, gross, qty, promoDisc, manualDisc,netAmount };
}

const rows = [
  createData(1, 'br11111111', 6.0, 24, 4.0,23,45),
  createData(2, 'br25777627', 9.0, 37, 4.3,23,667),
  createData(3, 'br25777627', 16.0, 24, 6.04,646,4),
  createData(4, 'br25777627', 16.0, 24, 6.0,49,615),
  createData(5, 'br25777627', 16.0, 24, 6.0,15,125),
  createData(6, 'br25777627', 16.0, 24, 6.0,54,44),
  createData(7, 'br25777627', 16.0, 24, 6.0,455,55),
  
];

const PromoExchangeItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.div1}>
      <div style={{ position: 'absolute' }}>


      <Select label="Store" className={classes.input1} placeholder='RT Number'>
        <MenuItem  >100</MenuItem>  
        <MenuItem  >101</MenuItem>  

        <MenuItem  >102</MenuItem>  
    </Select>
       {/** <input type='select' className={classes.input1} placeholder='RT Number'></input>*/} 

        <input className={classes.input2} placeholder='DS Number'></input>
        <Button variant="contained" color="primary" className={classes.button1}>
          ADD
        </Button>
        <Button variant="contained" color="primary" className={classes.button2}>
          Tag Customer CTL+6      </Button>
      </div>




      <div style={{ position: 'absolute', marginTop: '90px' }}>
        <Button variant="contained" color="primary" style={{
          marginLeft: '15px', width: '100px', height: '32px',
          background: '#119FDA 0% 0% no-repeat padding-box'
        }}>
          <span style={{
            marginTop: '-5px',
            height: '18px',
            width: '84px',
            fontSize: '14px',
            fontFamily: 'normal normal normal 14px/18px Montserrat',
            textAlign: 'center'
          }}>Cash  </span>
        </Button>
        <Button variant="contained" color="primary" style={{
          marginLeft: '15px', width: '100px',
          height: '32px', background: '#119FDA 0% 0% no-repeat padding-box'
        }}>
          Card
        </Button>
      </div>



      <Grid container style={{ marginTop: '132px', height: '304px' }} >

        <Grid item lg={3} style={{
          backgroundColor: 'rgb(242 203 149 / 43%)', height: '204px', borderBlock: '1px groove black'
          , borderRightStyle: 'groove', borderBottom: 'none'
        }}></Grid>



        <Grid item lg={9} style={{ backgroundColor: 'white', height: '204px', borderBlock: '1px groove black', borderBottom: 'none',overflow:'auto' }}>
        
        <TableForDeliverySlip data={rows}/>

        </Grid>
        <Grid item lg={3} style={{position:'relative', backgroundColor: 'rgb(242 203 149 / 43%)', height: '120px', borderRightStyle: 'groove', borderBlock: '1px groove black' }}>


<div style={{position:'absolute',lineHeight:'5px',textAlign: 'start',    fontFamily: '-webkit-pictograph',top:'10px'
}}>
<p><b>Net </b></p>
<p><b>Recived </b></p>
<p><b>Balance </b></p>
<p><b>Return Cash </b></p>
</div>
<div style={{position:'absolute',lineHeight:'5px',fontFamily: '-webkit-pictograph',fontSize: '13px',top:'10px',left:'240px'}}>
<p><b>₹0.00</b></p>
<p><b>₹0.00</b></p>
<p><b>₹0.00</b></p>
<p><b>₹0.00</b></p>
</div>
{/**

<table className={classes.table2} >

            <tr>
              <td><p><b>Net </b></p></td> <td><p><b>0.00</b></p></td>
            </tr>
            <tr>
            <td><p><b>Recived </b></p></td> <td><p><b>0.00</b></p></td>
            </tr>
            <tr>
            <td><p><b>Balance </b></p></td> <td><p><b>0.00</b></p></td>
            </tr>
            <tr>
            <td><p><b>Return Cash </b></p></td><td><p><b>0.00</b></p></td>
            </tr>


          </table>

*/}
          

        </Grid>

        <Grid item lg={4} style={{ position:'relative',backgroundColor: 'white', height: '120px', borderRightStyle: 'groove', borderBlock: '1px groove black' }}>
        
        
        <div style={{position:'absolute',lineHeight:'5px',textAlign: 'start',    fontFamily: '-webkit-pictograph',top:'10px'
      }}>
      <p><b>Customer Info : </b></p>
      <p>Phone Number :</p>
      <p>Customer Name : </p>
      <p>Avalible Loyalty Points : </p>
      </div>
      <div style={{position:'absolute',lineHeight:'5px',fontFamily: '-webkit-pictograph',fontSize: '13px',top:'33px',left:'200px'}}>
      
      <p>9493926067</p>
      <p>Manideep T</p>
      <p>10</p>
      </div>
        </Grid>

        <Grid item lg={5} style={{position:'relative', backgroundColor: 'white', height: '120px', borderBlock: '1px groove black' }}>
        <div style={{position:'absolute',lineHeight:'3px',textAlign: 'end',    fontFamily: '-webkit-pictograph',top:'10px',left:'220px'
      }}>
      <p>Gross Amount : </p>
      <p>Promo Discount :</p>
      <p>Manual Discount : </p>
      <p>Round Off : </p>
      <p><b>Net Payable : </b></p>
      <p>Tax Amount : </p>
      </div>
        
        
        
        </Grid>

      </Grid>



      <div style={{ position: 'relative', marginTop: '33px' }}>
        <Button variant="contained" color="primary" style={{
          marginLeft: '1098px', width: '138px', height: '32px',
          background: '#119FDA 0% 0% no-repeat padding-box'
        }}>
          Creat Cash
        </Button>
      </div>
    </div>
  )
}
export default PromoExchangeItem;

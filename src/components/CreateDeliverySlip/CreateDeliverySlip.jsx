import React, { useEffect, useState } from "react";
import { FormControl, OutlinedInput, TextField, Modal, Typography, Divider,Button,makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from 'axios'
import { Grid } from "@material-ui/core";
import BarcodeIcon from "../../assets/barcode/barcode_icon.png";
import { CreateDeliverySlipStyles } from "./CreateDeliverySlip.styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DisplayDevliverySlipIteams from '../../common_utils/table-delivery-slip/DisplayDevliverySlipIteams';
import { toast } from 'react-toastify';
import BarCodeSymbol from '../../assets/barCodeSymbol.png'
import ItemModal from '../../modals/Item_modal/ItemModal.js'
import PrinterIcon from '../../assets/printer.png'
import MoreVertIcon from '../../assets/MoreVertIcon.png';

function createData(id, barCode, itemDesc, mrp, gross, qty, promoDisc, manualDisc, netAmount) {
  return { id, barCode, itemDesc, mrp, gross, qty, promoDisc, manualDisc, netAmount };
}

const rows = [
  createData(1, 'br11111111', 'strawberry-midi-dress', 299, 24, 4.0, 23, 45),
  createData(2, 'br25777627', 'trouser', 399, 37, 4.3, 23, 667),
  createData(3, 'br25777627', 'jeans', 599, 24, 6.04, 646, 4),
  createData(4, 'br25777627', 'checks shirt', 1555, 24, 6.0, 49, 615),
  createData(5, 'br25777627', 'sweatshirts', 3999, 24, 6.0, 15, 125),
  createData(6, 'br25777627', 'v neck t-shirts', 2999, 24, 6.0, 54, 44),
  createData(7, 'br25777627', 'v neck t-shirts', 3259, 24, 6.0, 455, 55),
  createData(1, 'br11111111', 'rpund neck t-shirts', 4999, 24, 4.0, 23, 45),
  createData(2, 'br25777627', 'saree', 899, 37, 4.3, 23, 667)


];






export default function CreateDeliverySlip() {
  const classes = CreateDeliverySlipStyles();


  const [barCode, setBarCode] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [barCodeData, setBarCodeData] = useState({});
  const [barCodeDataList, setBarCodeDataList] = useState([{}]);
  const [createDS, setCreateDS]=useState(false);
  const [showModal, setShowModal]=useState(false);
  const [salesManId, setSalesManId]=useState('');
  const [dsNumber, setDsnumber]=useState('');
  const [showDsDetails,setShowDsDetails]=useState(false);
  const [isRememberClicked, setIsRememberClicked] =useState(true);

  useEffect(() => {
    const waitForInput = setTimeout(() => {
      if (barCode) {
        getBarCodeData(barCode)
        
      }
    }, 3000)
    return () => clearTimeout(waitForInput)
  }, [barCode])

useEffect(() => {
  if(createDS){
    createDeliverSlip();
    setCreateDS(false);
    setSalesManId('');
  }
}, [createDS])

  const createDeliverSlip=async ()=>{
    const filteredBarcodes=filterbarCodeDataList();
    const dsObject={
      "qty":1,
      "type":"cloth",
      "salesMan":5218,
      "barcode":filteredBarcodes
  }
await axios.post(`http://aba4c32bb17e.ngrok.io/newsale/createdeliveryslip`,dsObject)
              .then((res)=>{
                if (res.data.statusCodeValue == 200) {
                  setShowTable(false);
                  setDsnumber(res.data.body.number)
                  setShowDsDetails(true);
                  toast.success(res.data.body.message);
                  
                }else{
                  setShowDsDetails(false)
                  toast.error(res.data.body);
                }
              })
            .catch(()=>{
              setShowDsDetails(false)
              toast.error('Internal server error');
            })
  }
  const getBarCodeData = async (barCode) => {
    await axios.get(`http://aba4c32bb17e.ngrok.io/newsale/getbarcodedetails?barCode=${barCode}`)
    .then((responce)=>{
      if (responce.data.statusCodeValue == 200) {
        setBarCodeData(responce.data.body)
        setBarCodeData(prevState=>({...prevState,salesMan:salesManId}))
        setBarCode('');
        setShowModal(true)       
      } else {
        toast.error(responce.data.body);
      }
    })
    .catch((error)=>{
      toast.error('Internal server error');
    })
   
  }

const createHandaler=()=>{
setCreateDS(true);
}

const handleModalClose = () => {
    console.log("closeeeeeee")
    setShowModal(false)
  }

const addHandler=(barcode)=>{
  setBarCodeDataList(barCodeDataList => [...barCodeDataList, barcode])
  handleModalClose();
  setShowTable(true);
  setBarCodeData({})
  if(!isRememberClicked){
setSalesManId('');
  }

  console.log("in add handler")
}

const filterbarCodeDataList=()=>{
  console.log('4')
  let list=barCodeDataList.filter((barCodeItem)=>{
    return Object.keys(barCodeItem).length != 0})
    console.log('6')
    console.log(list)
  return list;
}

const checkBoxHandler=()=>{
  setIsRememberClicked(!isRememberClicked);
  if(isRememberClicked){
    setSalesManId('');
  }
}




  return (
    <div className={classes.container}>

      <div>
        <Grid item container direction="row">
          <Grid item container lg={2} direction="column"className={classes.inputGridPadding}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
              // onChange={handleChange}
              // label="Age"
              >
                <MenuItem value={10}>pieces</MenuItem>
                <MenuItem value={20}>meters</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item container lg={3} direction="column" className={classes.inputGridPadding}>
            <FormControl variant="outlined">
              <OutlinedInput
                style={{ background: "white", color: "#1E1E1E" }}
                id="barcode"
                disabled={!salesManId}
                value={barCode}
                onChange={(e) => { setBarCode(e.target.value) }}
                //value={values.weight}

                // defaultValue="Type / Scan Barcode"
                placeholder="Type / Scan Barcode"
                endAdornment={
                  <InputAdornment position="end">
                    <img
                      alt="BarcodeIcon"
                      src={BarcodeIcon}
                      className={classes.barcodeicon}
                    />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                labelWidth={0}
              />
            </FormControl>
            {!salesManId && <p style={{color:'red'}}>Required SalesMan Id</p>}
          </Grid>
          <Grid item container lg={3} direction="column" className={classes.inputGridPadding} >
            <FormControl variant="outlined">
              <OutlinedInput style={{ background: "white", color: "#1E1E1E" }} placeholder="Sales Man" labelWidth={0} 
              value={salesManId}
              onChange={(e)=>{setSalesManId(e.target.value)}}
              />
            </FormControl>
          </Grid>
          {/* <Grid
        item
        container
        lg={2}
        direction="column"
        alignItems="center"
        className={classes.inputGridPadding}
      >
        <label style={{ fontSize: "12px", color: "#1E1E1E" }}>
          Remember Sales Man
          <FormControlLabel
            control={
              <Checkbox
                //checked={state.checkedB}
                //onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
          />
        </label>
      </Grid> */}
          {/* <Grid
        item
        container
        lg={2}
        direction="column"
        className={classes.inputGridPadding}
      >
        <p style={{ color: "#878787", margin: "0" }}>
          Date
          <span style={{ color: "#1E1E1E", marginLeft: "5px" }}>
            01 July 2021
          </span>
          <i style={{ position: "absolute" }}>
            <ArrowDropDownIcon />
          </i>
        </p>
      </Grid> */}

          <Grid item container lg={2} direction="column" className={classes.inputGridPadding} >
            <FormControl variant="outlined">
              <OutlinedInput style={{ background: "white", color: "#1E1E1E" }} placeholder="Qty" labelWidth={0}/>
            </FormControl>
          </Grid>

          <Grid item container lg={2} direction="column" alignItems="center" className={classes.inputGridPadding}>
            <label style={{ fontSize: "12px", color: "#1E1E1E" }}>
              Remember Sales Man
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={state.checkedB}
                    //onChange={handleChange}
                    defaultChecked
                    name="checkedB"
                    color="primary"
                    value={isRememberClicked}
                    onChange={checkBoxHandler}
                  />
                }
              />
            </label>
          </Grid>

        </Grid>
      </div>
      <div className={classes.content}>

     
        <div style={{ position: 'relative', height: '54px', width: '1193px' }}>


{
  showDsDetails?
  <div style={{ position: 'absolute', height: '44px', width: '404px', display: 'flex', alignItems: 'center' }}>

            <Typography style={{ position: 'absolute', height: '19px', width: '98px' }}>DC Number</Typography>
            <Typography style={{ position: 'absolute', left: '118px', height: '19px', width: '105px' }}>{dsNumber}</Typography>
            <img src={BarCodeSymbol} alt="BarCodeSymbolo" style={{ position: 'absolute', left: '301px', height: '41px', width: '148px' }} />
            <div style={{ position: 'absolute', left: '466px', height: '40px', width: '85px' }}>
            <Typography >Time</Typography>
            <Typography ><b>12:09:06</b></Typography>
            <img src={PrinterIcon} alt="printer" style={{ position: 'absolute', left: '582px',top:'4px', height: '37px', width: '37px' }} />
            <img  src={MoreVertIcon} alt="MoreVertIcon" style={{ position: 'absolute', width: '39px',height: '47px',top:'0px',left:'666px'}}/> 

            </div>

          </div> :null
        
        }
         
        { showTable ?
          <>
          <Button variant="contained" color="primary" style={{position: 'absolute',widht:'89px',background:'#119FDA',height:'40px',right:'136px'}} onClick={createHandaler}>Create</Button>
          <Button variant="contained" color="primary" style={{position: 'absolute',widht:'126px',background:'#119FDA',height:'40px',right:'-24px'}}>Create&Print</Button>
          </>
             :null}
         
          </div> 
         
          <Divider style={{ background: 'black' }} />
          <ItemModal  open={showModal} onClose={handleModalClose} addHandler={addHandler} item={barCodeData}/>

        <div>
          {showTable ? <DisplayDevliverySlipIteams data={barCodeDataList} /> : <h3 className={classes.contentInfo}>No Delivery Slips added</h3>}
        </div>
      </div>
    </div>
  );
}

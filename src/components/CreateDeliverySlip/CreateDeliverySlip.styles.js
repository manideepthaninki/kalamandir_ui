import { makeStyles } from "@material-ui/core";


export const CreateDeliverySlipStyles=makeStyles((theme)=>({


    inputGridPadding:{padding:"0 3px!important"},
    barcodeicon:{
        width:"25px",
        height:"25px"},
        content:{margin:"10px 0 0 0",padding:"10px",border:"1px solid #CCCCCC",borderRadius:"10px 10px 0px 0px",background:"#ffffff",height:"660px",overflow:"auto",position:"relative"},
 container:{background:"#F1F5F9",padding:"15px"},
     contentInfo:{position:"absolute",top:"20%",left:"40%",color:"#cccccc",fontWeight:"normal",fontSize:"24px"},
     formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
   
}));




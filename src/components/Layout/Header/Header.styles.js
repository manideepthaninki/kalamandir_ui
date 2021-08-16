import { makeStyles } from "@material-ui/core";
  

export const useHeaderStyles=makeStyles(()=>({

    headerBlock:{margin: "41px 41px 0 49px",position:"relative"},

    welcomeText:{fontSize:"24px",color:"#ffffff",margin:"0 413px 5px 0"},

    userInfo:{fontSize:"14px",color:"#64BAE8",fontWeight:"normal",margin:"5px 833px 19px 0"},

    breadCrumb:{
        padding:"0",display:"flex"
    },
    breadCrumbLi1:{listStyleType:"none",color:"#119FDA"},
    
    breadCrumbLi2:{listStyleType:"none",color:"#ffffff",marginLeft:"5px"},



    iconBlock:{position:"absolute",top:"25px",right:"10px"},
    headericonStyle : {
       
        height : '28px',
        width : '28px' ,
       
    },

}
));

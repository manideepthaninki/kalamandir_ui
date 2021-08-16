import React from 'react'
import PromoExchangeItem from './promo_item_exchange/PromoExchangeItem.js'
import {
    Avatar, Grid, Paper,
    TextField, ButtonGroup, Button, Select,
    makeStyles, MenuItem, InputLabel, Typography, CardContent, Card, CardActions
} from '@material-ui/core'

const Test=()=> {
    return (
        <div style={{display: "flex",  overflow: 'hidden'}}>

      
        <Grid item lg={2} style={{height:'100vh',backgroundColor: "#0F172A",padding:' 24px 8px 24px 8px'}}>
    
        
        </Grid>
            <Grid item lg={10} style={{height:'100vh',backgroundColor: "#64BAE8"}}>
            <div style={{height:'159px',backgroundColor: "#1E293B"}}><h1>Header</h1></div>
         
           <PromoExchangeItem />
          
            </Grid>
        </div>
    )
}
export default Test;
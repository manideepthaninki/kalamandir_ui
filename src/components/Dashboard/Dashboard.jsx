import React from "react";
import { Grid } from "@material-ui/core";
import { useDashboardStyles } from "./Dashboard.styles";

import SideNavebar from "../Layout/sideNavBar/SideNavebar";
import Header from '../Layout/Header/Header';
import Routes from "../Home/Routes";
const Dashboard = () => {
  const classes = useDashboardStyles();
  return (
    <div className={classes.root}>
      <Grid item container direction="row" className={classes.root}>


        <Grid item lg={2} style={{ height: '100vh', backgroundColor: "#0F172A", padding: ' 24px 16px 24px 16px' }}>
          <SideNavebar />
        </Grid>

        {/*****Headre starts */}
        <Grid item container lg={10} direction="column" >

          <div>

            <div>
              <Grid item container direction="row">
                <div className={classes.headerContainer}>
                  <Header />
                </div>
              </Grid>
            </div>
            <diV >
              <Routes />

            </diV>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;

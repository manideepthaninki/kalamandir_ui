import React from "react";
import { useHeaderStyles } from "./Header.styles";
import HeaderIcon from "../../../assets/images/header_icon.svg";

export default function Header() {
  const classes = useHeaderStyles();
  return (
    <>
      {/* Header Block */}

      <div className={classes.headerBlock}>
        {/* <img alt="HeaderIcon" src={HeaderIcon} className={classes.icon} /> */}
        <div style={{ positon: "absolute", width: "75%" }}>
          <h3 className={classes.welcomeText}>
            Welcome back, Sri Hari Datha Pavan Kumar!
          </h3>
          <h5 className={classes.userInfo}>PSO User</h5>
          <ul className={classes.breadCrumb}>
            <li className={classes.breadCrumbLi1}>
              Cash Memo & Delivery Slips /
            </li>
            <li className={classes.breadCrumbLi2}>Create Delivery Slip</li>
          </ul>
        </div>
        <div className={classes.iconBlock}>
          <img
            alt="HeaderIcon"
            src={HeaderIcon}
            className={classes.headericonStyle}
          />
        </div>
      </div>
    </>
  );
}

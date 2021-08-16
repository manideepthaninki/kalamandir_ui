import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import { height } from "@material-ui/system";
import React, { useState } from "react";
import { Form, Modal, Button, Col } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import BarcodeIcon from "../../assets/barCodeSymbol.png";
import GownIcon from "../../assets/dress.png";

// import "./ItemModal.css";

const ItemModal2 = (props) => {
  const { open, onClose } = props;
  const [showModal, setShowModal] = useState(false);

  const handleClickOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{
            height: "100px",
            overflow: "hidden",
            padding: "20px 20px 20px 20px",
          }}
        >
          <Grid item container direction="row">
            {/* <input
              style={{ height: "50px", width: "354px", marginTop: "10px" }}
            /> */}
            <Grid item container md={1} direction="column">
              <img
                alt="BarcodeIcon"
                src={BarcodeIcon}

                // className={classes.barcodeicon}
              />
            </Grid>
            <Grid item container md={9} direction="column">
              <h6>
                Barcode <br /> 5987889899221
              </h6>
            </Grid>
          </Grid>
        </DialogTitle>

        <Divider />

<DialogContent
          style={{ height: "100%", padding: "10px 10px 10px 10px" }}
        >
                    
          <div>
            <Grid item container direction="row">
              <Grid item container md={3} direction="column">
                <img
                  alt="GownIcon"
                  src={GownIcon}

                  // className={classes.barcodeicon}
                />
              </Grid>
              <Grid item container md={9} direction="column">
                <h6>strawberry-midi-dress</h6>
                <h6> Single Unit </h6>
                <h5>MRP 1800</h5>
              </Grid>
            </Grid>
          </div>
          <div>
            <input
              style={{ height: "40px", width: "354px", marginTop: "10px" }}
            />
            {/* <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
                // onChange={handleChange}
                // label="Age"
              >
                <MenuItem value={10}>pieces</MenuItem>
                <MenuItem value={20}>meters</MenuItem>
              </Select>
            </FormControl> */}
          </div>
          <div>
            <input
              style={{ height: "40px", width: "354px", marginTop: "10px" }}
            />
          </div>
          <div>
            <input
              placeholder="Sales Man Name"
              style={{ height: "40px", width: "354px", marginTop: "10px" }}
            />
          </div>
          <div>
            <input
              style={{ height: "40px", width: "354px", marginTop: "10px" }}
            />
          </div>
          <div>
            <input
              placeholder="Promo Discount"
              style={{ height: "40px", width: "354px", marginTop: "10px" }}
            />
          </div>
                                
          <div>
                      <h4>Total 3600</h4>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ItemModal2;


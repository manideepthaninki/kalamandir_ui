import { Form, Modal, Button, Col } from 'react-bootstrap'
import React, { useState } from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader'
import createUsers from './createUsers.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForm from '../../custom-hooks/useForm';
import validate from '../../custom-hooks/FormValidations';





const CreateUser = (props) => {

    const { handleChange, handleSubmit, user, errors,dateHandler,dobDate } = useForm(validate, props.onFormSubmit);
    const [showModal, setshowModal] = useState(props.isShow);
    return (
        <div>
            <>
                <Modal show={true} onHide={false} size='sm'>
                    <ModalHeader >
                        <Modal.Title>New User</Modal.Title>
                        <span className='close-btn' onClick={props.onFormSubmit}>+</span>

                    </ModalHeader>
                    <Modal.Body >

                        <div className="container ">
                            <div className="card text-dark bg-light my-10" >
                                <div className="card-body">


                                    <form className="row g-3" onSubmit={handleSubmit}>
                                        <div className="col-md-6">
                                            <label for="mobile" className="form-label" className="required-field">Mobile No</label>
                                            <input type="text" className="form-control"
                                                name="mobileNo"
                                                id="mobile"
                                                value={user.mobileNo}
                                                onChange={handleChange}
                                            />
                                            {errors.mobileNo && <p>{errors.mobileNo}</p>}
                                        </div>
                                        <br></br>
                                        <div className="col-md-6">
                                            <label for="name" class="form-label" className="required-field">Name</label>
                                            <input className="input" type="text" class="form-control"
                                                name="name"
                                                id="name"
                                                value={user.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && <p>{errors.name}</p>}

                                        </div>

                                        <div className="col-md-6">
                                            <div><label for="pass" className="form-label" className="required-field">Gender</label>
                                            </div>
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={handleChange}>
                                                <label >
                                                    <input type="radio" name="gender" id="option1" value="male" /> Male
                                              </label>
                                                <label >
                                                    <input type="radio" name="gender" id="option2" value="female" /> Female
                                             </label>
                                                {errors.gender && <p>{errors.gender}</p>}

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label for="gst" className="form-label" className="required-field">GST Number</label>
                                            <input type="text" className="form-control"
                                                name="gstNumber"
                                                id="gst"
                                                value={user.gstNumber}
                                                onChange={handleChange}
                                            />
                                            {errors.gstNumber && <p>{errors.gstNumber}</p>}

                                        </div>

                                        <div className="col-md-6">
                                            <label for="add" className="form-label">Address</label>
                                            <textarea type="text" className="form-control"
                                                name="address"
                                                id="add"
                                                value={user.address}
                                                onChange={handleChange} />

                                        </div>

                                        <div className="col-md-6">
                                            <label for="dob" className="form-label" >DOB</label>
                                            <DatePicker 
                                            name="dob"
                                            id="dob"
                                            dateFormat="yyyy-MM-dd"
                                            selected={dobDate} 
                                            onChange={dateHandler} />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="mob2" className="form-label">Alternate Mobile 2</label>
                                            <input type="text" className="form-control"
                                                name="alternateMobile2"
                                                id="mob2"
                                                value={user.alternateMobile2}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="annversary" className="form-label">Anniversary</label>
                                            <input type="text" className="form-control" 
                                                name="annversary"
                                                id="annversary"
                                                value={user.annversary}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-md-3" style={{marginLeft :"50px"}}>
                                            <Button type="submit" >Submit</Button>
                                        </div>
                                        <div className="col-md-3"  style={{marginLeft :"125px"}}>
                                            <Button  variant="danger" onClick={props.onFormSubmit}>Cancel</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    )
}

export default CreateUser;
import React from 'react';
import {Form , Col, Row } from 'react-bootstrap' 
import "bootstrap/dist/css/bootstrap.min.css"
function Input(props){
    let formControl ="form-control";
    if (props.touched && !props.valid){
        formControl = 'form.control control-error';     
        // if touched and invalid then error msg 
    }
    return(
        <div className="form-group">
            <Form.Group as={Row}>
            <Form.Label column sm={0.7} htmlFor={props.name} className="form-label">
                {props.title}</Form.Label>
                <Col sm={6}>
                <Form.Control 
                 id={props.name}
                className={formControl}
                name={props.name}
                type={props.inputType}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                />
                </Col>
                {props.errorMsg ?
                
            <div style={{color:"red", marginBottom:"15px", fontSize:""}}>
            {props.errorMsg}</div> : null
            }
           </Form.Group>
        </div>
    )
}
export default Input
import React, { Component } from 'react';
import {Link,Outlet} from 'react-router-dom'
import Validate from './Validate';

import Input from './Input';
// import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Button from './Button'
// import Textarea from './Textarea';
import {Form} from 'react-bootstrap'
export default class Main extends Component {
    constructor() {
        super();
        this.state={
            formIsValid: false,
            formControls:{
                name:{
                    name:'name',
                    // type:'text',
                    value:'',
                    valid:false,
                    errorMsg:'',
                    touched:false,
                    validationRules:{
                    minLength :6,
                  //  maxLength:10,
                   isRequired:true,
                   isAlpha:true
                    }
                },
                age:{
                        name:'age',
                        // type:'number',
                        value:'',
                      valid:false,
                        errorMsg:'',
                        touched:false,
                        validationRules:{
                        minLength :2,
                       maxLength:3,
                       isRequired:true,
                       isNumber:true
                }},
                      
                            email:{
                                name:'email',
                                // type:'email',
                                value:'',
                               valid:false,
                                errorMsg:'',
                                touched:false,
                                validationRules:{
                                minLength :8,
                               maxLength:30,
                               isRequired:true,
                               isEmail:true
                             } },
                                gender:{
                                    // type:'radio',
                                    value:'',
                                    name:'gender',
                                    valid:false,
                                    errorMsg:'',
                                    touched:false,
                                    validationRules:{
                                isRequired:true,
                                  } ,
                                  options: [
                                    { value: 'male', displayValue: 'Male' },
                                    { value: 'female', displayValue: 'Female'},
                                    { value: 'other', displayValue: 'Other'},
                                  ]
                
                                
                                },
                                  
                                 
                                  terms: {
                                     
                                    type: 'checkbox',
                                    value: [],
                                    placeholder: 'type',
                                    name:'terms',
                                    valid: false,
                                    errorMsg: '',
                                    touched: false,     
                                    validationRules: {
                                        isRequired: true,
                                    },
                                    options: [
                                      { value: 'terms', displayValue: 'I agree all terms and conditions' },
                                     
                                    ]
                                  },
                                  
            }
        }
    }
                          
                              changeHandler = event => {
    
                                const name = event.target.name;
                                console.log("Name : "+name);
                          
                                const updatedControls = {
                                  ...this.state.formControls
                                };
                          
                                const updatedFormElement = {
                                  ...updatedControls[name]
                                };
                          
                                let value;
                                let selectedOptions;
                                let newValArray; 
                                if (updatedControls[name].value instanceof Array &&
                                    updatedControls[name].type === 'select' &&
                                    updatedControls[name].multiple !== undefined &&
                                    updatedControls[name].multiple
                                    )
                                  {
                                    selectedOptions = event.target.selectedOptions;
                                    newValArray = [...selectedOptions].map(option => option.value);
                                    value = newValArray;
                                    console.log("MultiSelect - Value : "+value)
                                  }
                                  else 
                                  {
                                    value = event.target.value;
                                    if (updatedControls[name].value instanceof Array &&
                                    updatedControls[name].type === 'checkbox') {
                                      console.log("Before Checkbox Value : "+value)
                                      if(updatedControls[name].value.indexOf(value) > -1) {
                                      newValArray = 
                                      updatedControls[name].value.filter(s => s !== value)
                                      } else {
                                      newValArray = [...updatedControls[name].value, value];
                                      }
                                    value = newValArray;
                                    console.log("Checkbox Value : "+value)
                                    }
                                    else
                                    {
                                    value = event.target.value
                                    console.log("Value : "+value)
                                    }
                                  }
                                 
                                  updatedFormElement.value = value;
                                  updatedFormElement.touched = true;
                            
                                  let ValidationResult = Validate(value, updatedFormElement.validationRules);
                                  console.log(ValidationResult)
                                  updatedFormElement.valid = ValidationResult.valid;
                                  if ((!updatedFormElement.valid) && updatedFormElement.touched)
                                  {
                                    updatedFormElement.errorMsg = ValidationResult.errorMsg
                                  }
                                  else {
                                    updatedFormElement.errorMsg = ''
                                  }
                            
                                  updatedControls[name] = updatedFormElement;
                            
                                  let formIsValid = true;
                                  for (let inputIdentifier in updatedControls) {
                                    formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
                                  }
                            
                                  this.setState({
                                    formControls: updatedControls,
                                    formIsValid: formIsValid
                                  });
                            
                              }
                              
                              
                              formSubmitHandler = () => {
                                const formData = {};
                                for (let formElementId in this.state.formControls) {
                                    formData[formElementId] = this.state.formControls[formElementId].value;
                                }
                                
                                     console.dir(formData);
                                    alert(`   Name: ${ formData.name} 
                                              Age: ${formData.age}
                                              Email: ${formData.email}
                                           
                                            Gender: ${formData.gender}
                                           <h2> Welcome to Today News </h2>
                                              `)
                              }
                              
    
  render() {
    
    return (
    
    
      <Form className="container-fluid">
              <Input type={'text'}
                     title={'Name'}
                     name={'name'}
                     placeholder={this.state.formControls.name.placeholder}
                     value={this.state.formControls.name.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.name.touched}
                     valid={this.state.formControls.name.valid}
                     errorMsg={this.state.formControls.name.errorMsg}
          />
          <Input type={'number'}
          title={'Age'}
          name={'age'}
          placeholder={this.state.formControls.age.placeholder}
          value={this.state.formControls.age.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.age.touched}
          valid={this.state.formControls.age.valid}
          errorMsg={this.state.formControls.age.errorMsg}
/>
         

          <Input 
          type={'email'}
          title={'Email'}
          name={'email'}
          placeholder={this.state.formControls.email.placeholder}
          value={this.state.formControls.email.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.email.touched}
          valid={this.state.formControls.email.valid}
          errorMsg={this.state.formControls.email.errorMsg}
  />
  <Radio  title={'Gender'}
  name={'gender'}
  handleChange={this.changeHandler}
  value = {this.state.formControls.gender.value}
  options={this.state.formControls.gender.options}
  touched={this.state.formControls.gender.touched}
  valid={this.state.formControls.gender.valid}
  errorMsg={this.state.formControls.gender.errorMsg}
/> 


<Checkbox  title={''}
  name={'terms'}
  handleChange={this.changeHandler}
  value = {this.state.formControls.terms.value}
  options={this.state.formControls.terms.options}
  touched={this.state.formControls.terms.touched}
  valid={this.state.formControls.terms.valid}
  errorMsg={this.state.formControls.terms.errorMsg}
/> 



 
          <Link to="/news" >
            <button
             disabled={!this.state.formIsValid}
            onClick={this.formSubmitHandler}
            
          >Submit</button></Link> 
          {/* <Link to="/news" >
          
           <Button 
              onClick = {this.formSubmitHandler}
              type = {'primary'} 
              title = {'Submit'} 
              style={buttonStyle}
              disabled={!this.state.formIsValid}
          />
         </Link>  */}
          <Button 
            onClick= {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> 
          <Outlet/>
         </Form>
    
    
    );

  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

            
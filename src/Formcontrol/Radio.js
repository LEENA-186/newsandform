import React from 'react'

function Radio (props){
    return (
        <div className="form-group">
           <label htmlFor={props.name} className="form-label">{props.title}</label> 
           <div className="radio-inline">
      {props.options.map((option,index) => {
        return (
          <label key={index} className="radio-inline">
        <input
        id = {props.name}
        name={props.name}
        type="radio" 
        onChange={props.handleChange}
        value={option.value}
        checked={ props.value === option.value }
        />{option.displayValue}
        </label>
        )
              })}
                      </div>
                      {props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null}
                      </div>
    )
}
export default Radio
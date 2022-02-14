function Checkbox(props){
    let formControl ="checkbox-inline";
    if (props.touched && !props.valid)
    // if touched and invalid 
    {
     formControl = "checkbox-inline control-error";
    //  then checkboxes are placed inline and display error msg 
    }
    return(
    <div className="form-group">
        <label htmlFor={props.name} className="form-label">
            {props.title}</label>
     <div className="formControl">
      {props.options.map((option,index)=>{
          return(
              <label key={index} className="checkbox-inline">

              <input 
               id={props.name}
                name={props.name}
                type="checkbox"
               value={option.value}
                onChange={props.handleChange}
                checked={props.value.indexOf(option.value)>-1}/>
                {/* if the index of element in an array not found then -1 only if the provided index is 0 the whole array will be searched */}
                {option.displayValue}
                </label>
        
                )
      })}
</div>
{props.errorMsg ? <p style={{color:"red"}}>{props.errorMsg}</p>:null}

{/* if error is there then display error msg in red else return null  */}

    </div>
    )
}
export default Checkbox
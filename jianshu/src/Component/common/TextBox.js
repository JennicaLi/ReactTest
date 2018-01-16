import React from 'react'
import '../index.css'

function TextBox(props){
    function handleChange(e){

        props.changeFunc(e.target.value,e.target.name);

    }
    return (
        <div className="div-bor">
            <i className={props.iconClass}> </i>
            <input type="text" className="input-text" value="" placeholder={props.placeholder} name={props.name} onChange={(e)=>handleChange(e)}/>

        </div>
    )
}

export default TextBox;

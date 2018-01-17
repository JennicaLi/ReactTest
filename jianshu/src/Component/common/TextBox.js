import React from 'react'
import '../index.css'

function TextBox(props){
    function handleChange(e){

        props.changeFunc(e.target.value,e.target.name);

    }
    if(props.isPwd) {
        return (
            <div className="div-bor">
                <i className={props.iconClass}> </i>
                <input type="password" className="input-text" placeholder={props.placeholder} name={props.name}
                       onChange={(e) => handleChange(e)}/>
            </div>
        )
    }
    else {
        return (
            <div className="div-bor">
                <i className={props.iconClass}> </i>
                <input type="text" className="input-text" placeholder={props.placeholder} name={props.name}
                       onChange={(e) => handleChange(e)}/>
            </div>
        )
    }
}

export default TextBox;

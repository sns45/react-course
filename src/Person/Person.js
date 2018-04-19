import React from 'react';


const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hi! I am {props.name}. My age is {props.age} </p>
            <p>{props.children}</p>
            <input type = "text" value = {props.name} onChange = {props.change}/>
        </div>
    )
}

export default person;
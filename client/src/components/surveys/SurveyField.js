import React from 'react';

export default ({ input, label }) => {   //props.input has parameter
    return (
        <div>
            <label>{label}</label>
            <input {...input} />  
        </div>
    )
}
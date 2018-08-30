import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {   //props.input has parameter
    //console.log(meta);
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/> 
            <div className="red-text" style={{ marginBottom: '20px' }}> 
                {touched && error}  {/* same as {touched && error ? err : "" */}
            </div>
        </div>
    )
}
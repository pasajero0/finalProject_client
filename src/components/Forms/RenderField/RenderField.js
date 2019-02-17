import React from 'react';
import './RenderField.scss';

const RenderField = ( {input, type, label, meta: { touched, error, warning } }) => {
        
    return(
        <div className="renderField">
            <input className="renderField__input" {...input} placeholder={label} type={type}/>
            <p className="renderField__error">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</p>
        </div>

    )
}

export default RenderField;
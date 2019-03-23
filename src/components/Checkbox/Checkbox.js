import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const propTypes = {
    label: PropTypes.string,
    value: PropTypes.bool,
    onClick: PropTypes.func,
}

const defaultProps = {
    label: null,
    value: false,
    onClick: console.log// ()=>{}
}
    
const Checkbox = ({ label, value, onClick }) => {
    
const active = value ? 'Checkbox selected' : 'Checkbox';

    return (
        <div className="Checkbox__wrapper" onClick={ (e) => onClick(e) }>
            <span className={active}/>
            <span className="label">{label}</span>
        </div>
    );
}


Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;

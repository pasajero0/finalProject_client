import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';


class RenderLoader extends Component  {

    render() {
     return(
        <Loader type="Circles"
         color="#blue"
         height={80}
         width={80}/>

     )
    }
 }

export default RenderLoader;

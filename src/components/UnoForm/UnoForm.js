import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './UnoForm.scss';

const propTypes = {
	title:PropTypes.string.isRequired,

	submitBtnTxt: PropTypes.string,
	resetBtnTxt: PropTypes.string,
	displayResetBtn: PropTypes.bool,

	message:PropTypes.string,
	messageType: PropTypes.oneOf(['error', 'info']),
	status: PropTypes.oneOf(['loading'])
};

const defaultProps = {
	title: 'UnoForm',

	submitBtnTxt: 'submit',
	resetBtnTxt: 'reset',
	displayResetBtn: false,

	message: 'message',
	messageType: 'info',
	status: 'loading',

};

class UnoForm extends Component {
    componentDidMount() {}
    // onSubmit(){}

    render() {
        return (
            <div className="UnoForm">
            	<h2>{this.props.title}</h2>
            	<form className="formBlock" onSubmit={this.props.onSubmit.bind(this)}>
            	{console.log(this.props.children.value)}
            		<div className="formBlock__inputs">
            			{this.props.children}
            		</div>
            		<div className="formBlock__buttons">
	            		<button className="formBlock__btn" type="submit">{this.props.submitBtnTxt}</button>
            			<button className="formBlock__btn" 
		            			type="reset" 
		            			style={this.props.displayResetBtn ? {display: 'block'} : {display: 'none'}}
            			>{this.props.resetBtnTxt}</button>
            		</div>
            	</form>
            </div>
        );
    }
}

UnoForm.propTypes = propTypes;
UnoForm.defaultProps = defaultProps;

export default UnoForm;
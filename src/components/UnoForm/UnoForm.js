import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './UnoForm.scss';

const propTypes = {
	title:PropTypes.string.isRequired,
	message:PropTypes.string,
	// messageType: PropTypes.enum['error', 'info'],
	// status: PropTypes.enum['loading']
};

const defaultProps = {
	title: 'form',
	message: 'message',
	messageType: 'info',
	status: 'loading'
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class UnoForm extends Component {
    componentDidMount() {}
    onSubmit(){}
	onReset(){}

    render() {
        return (
            <div className="UnoForm">
            {/* here is going to be body of the component */}
            	<h2>{this.props.title}<h2>
            	<form className="formBlock">
            		<div className="formBlock__inputs">
            			<input className="formBlock__input" type="email" placeholder="Email address*"/>
            		</div>
            		<div className="formBlock__buttons">
	            		<button className="formBlock__btn" type="submit">submit</button>
            			<button className="formBlock__btn" type="reset">reset</button>
            		</div>
            	</form>
            </div>
        );
    }
}

UnoForm.propTypes = propTypes;
UnoForm.defaultProps = defaultProps;

export default UnoForm;
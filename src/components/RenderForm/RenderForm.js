import React from 'react';
import PropTypes from 'prop-types';

import './RenderForm.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
function RenderForm({isPristine, isSubmitting, messageType, message, children, onSubmit, onReset, submitLabel, resetLabel, displayResetBtn}) {
    return (
            <div className="RenderForm">
	            <form className="formBlock" onSubmit={onSubmit}>
	        		<div className="formBlock__inputs">
	        			{children}
	        		</div>
	        		<div className="formBlock__buttons">
	            		<button className="formBlock__btn" type="submit">{submitLabel}</button>
	        			<button className="formBlock__btn" 
		            			type="reset" 
		            			style={displayResetBtn ? {display: 'block'} : {display: 'none'}}
	        			>{resetLabel}</button>
	        		</div>
	        	</form>
            </div>

    );
}

RenderForm.propTypes = {
	// title:PropTypes.string.isRequired,

	submitLabel: PropTypes.string,
	resetLabel: PropTypes.string,
	displayResetBtn: PropTypes.bool,

	message:PropTypes.string,
	messageType: PropTypes.oneOf(['error', 'info']),
	status: PropTypes.oneOf(['loading'])
};

RenderForm.defaultProps = {
	// title: 'UnoForm',

	submitLabel: 'submit',
	resetLabel: 'reset',
	displayResetBtn: false,

	message: 'message',
	messageType: 'info',
	status: 'loading'
};

export default RenderForm;
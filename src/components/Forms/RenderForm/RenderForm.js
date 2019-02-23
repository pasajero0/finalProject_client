import React from 'react';
import PropTypes from 'prop-types';

import './RenderForm.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const RenderForm = (
	{ 
	title, children, onSubmit, onReset, submitLabel, resetLabel, isVisibleReset, message 
	}
) => {
    return (
			<div className="renderForm">
				<form onSubmit={onSubmit} onReset={onReset}>
					<h3 className="renderForm__title">
						{title}
					</h3>
					<p className="renderForm__message">
						{message && <strong>{message}</strong>}
					</p>
					<div className="renderForm__inputs">
						{children}
					</div>
					<div className="renderForm__buttons">
						<button className="renderForm__btn" type="submit">{submitLabel}</button>
						<button className="renderForm__btn" 
								type="reset" 
								style={isVisibleReset ? {display: 'block'} : {display: 'none'}}
						>{resetLabel}</button>
					</div>
				</form>
			</div>
    );
}

RenderForm.propTypes = {
	title: PropTypes.string,
	submitLabel: PropTypes.string,
	resetLabel: PropTypes.string,
	isVisibleReset: PropTypes.bool,
	onSubmit: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	message: PropTypes.string,
	messageType: PropTypes.oneOf(['error', 'info']),
	status: PropTypes.oneOf(['loading'])
};

RenderForm.defaultProps = {
	title: '',
	submitLabel: 'submit',
	resetLabel: 'reset',
	isVisibleReset: false,
};

export default RenderForm;
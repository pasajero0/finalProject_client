import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  email, required
} from '../../../validation/validations';
import { getToken } from '../../../actions/customers';
import RenderField from '../RenderField/RenderField';
import RenderForm from '../RenderForm/RenderForm';

/**
 * Validate all form fields and return object with invalid entries error messages
 * @param values {object} - form values
 * @returns {{}}
 */

const propTypes = {
	/** A function meant to be passed to onSubmit={handleSubmit} or to onClick={handleSubmit} */
	handleSubmit: PropTypes.func.isRequired,
	/** Action connected to the form submission */
	onSubmitAction: PropTypes.func.isRequired,
	/** A generic error for the entire form given by the _error key */
	error: PropTypes.string,
	/** true if the form data is the same as its initialized values. Opposite of dirty. */
	pristine: PropTypes.bool,
	/** Resets all the values in the form to the initialized state, making it pristine again. */
	reset: PropTypes.func.isRequired,
	/** Whether or not your form is currently submitting */
	submitting: PropTypes.bool,
	/** true if the form has validation errors. Opposite of valid. */
	invalid: PropTypes.bool,
	/** If onSubmit is called, and succeed to submit , submitSucceeded will be set to true. */
	submitSucceeded: PropTypes.bool,
};

const defaultProps = {
	error: '',
	pristine: true,
	submitting: false,
	invalid: false,
	submitSucceeded: false
};


const validate = (values) => {
  const errors = {};

  if (!required(values.email)) {
    errors.email = 'E-mail is required';
  } else if (!email(values.email)) {
    errors.email = 'E-mail has to be valid email';
  }
  return errors;
};

/**
 * ReduxForm container
 */
const GetTokenForm = (
  {
    error, onSubmitAction, handleSubmit, pristine, reset, submitting, invalid, submitSucceeded
  }
) => {
  let messageType = '';
  let message = '';

  if (error) {
    messageType = 'error';
    message = error;
  } else if (submitSucceeded) {
    messageType = 'success';
    message = 'Sending letter...';
  } else if (submitting) {
    messageType = 'info';
    message = 'Submitting...';
  }

  return (
    <RenderForm
      error={error}
      isSubmitting={submitting}
      isPristine={pristine}
      isSucceeded={submitSucceeded}
      isInvalid={invalid}
      onSubmit={handleSubmit(onSubmitAction)}
      onReset={reset}
      title=""
      message={message}
      messageType={messageType}
      submitLabel="Submit"
      resetLabel="Reset"
    >
      <Field name="email" type="email" component={RenderField} label="Email" />
    </RenderForm>
  );
};

GetTokenForm.propTypes = propTypes;
GetTokenForm.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => (
  {
    onSubmitAction: data => dispatch(getToken(data))
  }
);

export default reduxForm({
  form: 'GetTokenForm', validate
})(connect(null, mapDispatchToProps)(GetTokenForm));

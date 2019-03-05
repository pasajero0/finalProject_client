import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  required, minLength
} from '../../../validation/validations';
import { resetPassword } from '../../../actions/customers';
import { showSystemMessage } from '../../../actions/app';
import RenderField from '../RenderField/RenderField';
import RenderForm from '../RenderForm/RenderForm';

/**
 * Validate all form fields and return object with invalid entries error messages
 * @param values {object} - form values
 * @returns {{}}
 */
const validate = (values) => {
  const errors = {};

  if (!required(values.newPassword)) {
    errors.newPassword = 'New password is required';
  } else if (!minLength(6)(values.newPassword)) {
    errors.newPassword = 'Password must be at least 6 numbers';
  }

  if (!required(values.repeatPassword)) {
    errors.repeatPassword = 'Repeat password is required';
  } else if (!minLength(6)(values.repeatPassword)) {
    errors.repeatPassword = 'Password must be at least 6 numbers';
  }

  if (values.newPassword !== values.repeatPassword) {
    errors.repeatPassword = 'Repeat password does not match!';
  }

  return errors;
};

/**
 * ReduxForm container
 */
const ResetPasswordForm = (
  {
    error,
    onSubmitAction,
    handleSubmit,
    pristine,
    reset,
    submitting,
    invalid,
    submitSucceeded,
    setSystemMessage,
    token,
    email
  }
) => {
  let messageType = '';
  let message = '';

  if (submitSucceeded) {
    setSystemMessage('You have been change your password', 'info');
  }
  if (error) {
    messageType = 'error';
    message = error;
  } else if (submitSucceeded) {
    messageType = 'success';
    message = 'Password has been changed';
  } else if (submitting) {
    messageType = 'info';
    message = 'Submitting...';
  }

  let changeData;

  if (token) {
    changeData = data => onSubmitAction({ password: data.newPassword, token });
  } else if (email) {
    changeData = data => onSubmitAction({ password: data.newPassword, email });
  }
  return (
    <RenderForm
      error={error}
      isSubmitting={submitting}
      isPristine={pristine}
      isSucceeded={submitSucceeded}
      isInvalid={invalid}
      onSubmit={handleSubmit(changeData)}
      onReset={reset}
      title="Reset Password"
      message={message}
      messageType={messageType}
      submitLabel="Submit"
      resetLabel="Reset"
    >
      <Field name="newPassword" type="password" component={RenderField} label="New password" />
      <Field name="repeatPassword" type="password" component={RenderField} label="Repeat password" />
    </RenderForm>
  );
};

ResetPasswordForm.propTypes = {
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

  setSystemMessage: PropTypes.func.isRequired,

  token: PropTypes.string,

  email: PropTypes.string
};

ResetPasswordForm.defaultProps = {
  error: '',
  pristine: true,
  submitting: false,
  invalid: false,
  submitSucceeded: false,
  token: '',
  email: ''
};

const mapDispatchToProps = dispatch => (
  {
    onSubmitAction: data => dispatch(resetPassword(data)),
    setSystemMessage: (text, type) => dispatch(showSystemMessage(text, type))
  }
);

export default reduxForm({
  form: 'ResetPasswordForm', validate
})(connect(null, mapDispatchToProps)(ResetPasswordForm));

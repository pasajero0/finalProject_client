import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  email,
  required
} from '../../../validation/validations';
import { getToken } from '../../../actions/customers';
import RenderField from '../RenderField/RenderField';
import RenderForm from '../RenderForm/RenderForm';
import './CheckoutForm.scss';

/**
 * Validate all form fields and return object with invalid entries error messages
 * @param values {object} - form values
 * @returns {{}}
 */
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
const CheckoutForm = ({
  error,
  onSubmitAction,
  handleSubmit,
  pristine,
  reset,
  submitting,
  invalid,
  submitSucceeded
}) => {
  let messageType = '';
  let message = '';

  if (error) {
    messageType = 'error';
    message = error;
  } else if (submitSucceeded) {
    messageType = 'success';
    message = 'Success';
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
      title="CheckoutForm"
      message={message}
      messageType={messageType}
      submitLabel="Submit"
      resetLabel="Reset"
    >
      <Field
        name="first_name"
        type="text"
        component={RenderField}
        label="First name"
      />
      <Field
        name="last_name"
        type="text"
        component={RenderField}
        label="Last name"
      />
      <Field
        name="email"
        type="email"
        component={RenderField}
        label="Email"
      />
      <Field
        name="city"
        type="text"
        component={RenderField}
        label="City"
      />
      <Field
        name="zip"
        type="text"
        component={RenderField}
        label="ZIP"
      />
      <Field
        name="address"
        type="text"
        component={RenderField}
        label="Address"
      />
      <Field
        name="phone"
        type="tel"
        component={RenderField}
        label="Phone"
      />
      <Field
        name="card"
        type="text"
        component={RenderField}
        label="Card"
      />
      <Field
        name="exp_date"
        type="text"
        component={RenderField}
        label="expDate"
      />
      <Field
        name="cvs"
        type="text"
        component={RenderField}
        label="CVS"
      />
    </RenderForm>
  );
};

CheckoutForm.propTypes = {
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

CheckoutForm.defaultProps = {
  error: '',
  pristine: true,
  submitting: false,
  invalid: false,
  submitSucceeded: false
};

const mapDispatchToProps = dispatch => ({
  onSubmitAction: data => dispatch(getToken(data))
});

export default reduxForm({
  form: 'CheckoutForm',
  validate
})(connect(null, mapDispatchToProps)(CheckoutForm));

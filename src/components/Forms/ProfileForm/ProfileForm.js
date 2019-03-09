import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  email,
  required
} from '../../../validation/validations';
import { putProfileData } from '../../../actions/customers';
import RenderField from '../RenderField/RenderField';
import RenderForm from '../RenderForm/RenderForm';

import './ProfileForm.scss';

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
function ProfileForm({
  error,
  onSubmitAction,
  handleSubmit,
  pristine,
  reset,
  submitting,
  invalid,
  submitSucceeded,
  initialValues
}) {
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
  console.log('>>>>>>>>>>>>>>>>>>>>>>', initialValues);
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
      initialValues={{
        first_name: initialValues.first_name,
        last_name: initialValues.last_name,
        city: initialValues.city,
        address: initialValues.address,
        zip: initialValues.zip,
        phone: initialValues.phone,
      }}
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
        name="city"
        type="text"
        component={RenderField}
        label="City"
      />
      <Field
        name="address"
        type="text"
        component={RenderField}
        label="Address"
      />
      <Field
        name="zip"
        type="text"
        component={RenderField}
        label="ZIP"
      />
      <Field
        name="phone"
        type="tel"
        component={RenderField}
        label="Phone"
      />

    </RenderForm>
  );
}

ProfileForm.propTypes = {
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
  submitSucceeded: PropTypes.bool
};

ProfileForm.defaultProps = {
  error: '',
  pristine: true,
  submitting: false,
  invalid: false,
  submitSucceeded: false
};

const mapStateToProps = state => ({
  initialValues: state.customers.profile
});

const mapDispatchToProps = dispatch => ({
  onSubmitAction: data => dispatch(putProfileData(data)),
});

export default reduxForm({
  form: 'ProfileForm',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(ProfileForm));

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  stringValidation,
  phone,
  minLength
} from '../../../validation/validations';
import { updateProfileData } from '../../../actions/customers';
import RenderField from '../RenderField/RenderField';
import RenderForm from '../RenderForm/RenderForm';


const propTypes = {
  /** A function meant to be passed to onSubmit={handleSubmit} or to onClick={handleSubmit} */
  handleSubmit: PropTypes.func.isRequired,
  /** Action connected to the form submission */
  callUpdateProfileData: PropTypes.func.isRequired,
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

const defaultProps = {
  error: '',
  pristine: true,
  submitting: false,
  invalid: false,
  submitSucceeded: false
};

const validate = (values) => {
  const errors = {};
  if (!stringValidation(values.first_name)) {
    errors.first_name = 'Letters, space or "-" only';
  } else if (!minLength(3)(values.first_name)) {
    errors.first_name = 'First name is to short';
  }
  if (!stringValidation(values.last_name)) {
    errors.last_name = 'Letters, space or "-" only';
  } else if (!minLength(3)(values.last_name)) {
    errors.last_name = 'Last name is to short';
  }
  if (!stringValidation(values.city)) {
    errors.city = 'Letters only';
  } else if (!minLength(3)(values.city)) {
    errors.city = 'City is to short';
  }
  if (!phone(values.phone)) {
    errors.phone = 'Phone has to be valid';
  } else if (!minLength(10)(values.phone)) {
    errors.phone = 'Phone must be at least 10 numbers';
  }
  return errors;
};
/**
 * ReduxForm container
 */
function ProfileForm({
  error,
  callUpdateProfileData,
  handleSubmit,
  pristine,
  reset,
  submitting,
  invalid,
  submitSucceeded,
}) {
  let messageType = '';
  let message = '';

  if (error) {
    messageType = 'error';
    message = error;
  } else if (submitSucceeded) {
    messageType = 'success';
    message = 'Updated!';
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
      onSubmit={handleSubmit(callUpdateProfileData)}
      onReset={reset}
      title=""
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

ProfileForm.propTypes = propTypes;
ProfileForm.defaultProps = defaultProps;

const mapStateToProps = state => ({
  initialValues: state.customers.profile
});

const mapDispatchToProps = dispatch => ({
  callUpdateProfileData: data => dispatch(updateProfileData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ProfileForm', validate
})(ProfileForm));

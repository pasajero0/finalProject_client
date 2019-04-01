/**
 * __componentName__ - Redux form  Component.
 *
 * @see See [ReduxForm](https://redux-form.com/6.4.3) for more information about ReduxForm
 * @module __componentName__
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RenderField from '__pathToRoot__UI/Forms/RenderField';
import RenderForm from '__pathToRoot__UI/Forms/RenderForm';

/**
 * Validate all form fields and return object with invalid entries error messages
 * @param values {object} - form values
 * @returns {{}}
 */
const validate = (values) => {
  const errors = {};
  return errors;
};


/**
 * PropTypes of the component
 * @type {object}
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
/**
 * Default props of the component
 * @type {object}
 */
const defaultProps = {
  error: '',
  pristine: true,
  submitting: false,
  invalid: false,
  submitSucceeded: false
};


/**
 * __componentName__ form container Component
 */
const __componentName__ = (
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
    message = 'Saved!!';
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
      title="Has to be form title"
      message={message}
      messageType={messageType}
      submitLabel="Submit data"
      resetLabel="Reset form"
    >
      <Field name="email" type="email" component={RenderField} label="Email" />
      <Field name="password" type="text" component={RenderField} label="Password" />
    </RenderForm>
  );
};

__componentName__.propTypes = propTypes;
__componentName__.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => (
  {
    onSubmitAction: data => dispatch(addUser(data))
  }
);

export default reduxForm({
  form: 'form__componentName__', validate
})(connect(null, mapDispatchToProps)(__componentName__));

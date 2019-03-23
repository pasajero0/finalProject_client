import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';
import { connect } from 'react-redux';
import {
  email,
  required,
  maxLength,
  minLength,
  stringValidation,
  phone,
  creditCard
} from '../../../validation/validations';
import { submitChekout } from '../../../actions/customers';
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
  if (!required(values.first_name)) {
    errors.first_name = 'First name is required';
  } else if (!stringValidation(values.first_name)) {
    errors.first_name = 'Letters, space or "-" only';
  }
  if (!required(values.last_name)) {
    errors.last_name = 'Last name is required';
  } else if (!stringValidation(values.last_name)) {
    errors.last_name = 'Letters, space or "-" only';
  }
  if (!required(values.email)) {
    errors.email = 'E-mail is required';
  } else if (!email(values.email)) {
    errors.email = 'E-mail has to be valid';
  }
  if (!required(values.city)) {
    errors.city = 'City is required';
  } else if (!stringValidation(values.city)) {
    errors.city = 'Letters only';
  }
  if (!required(values.zip)) {
    errors.zip = 'ZIP is required';
  }
  if (!required(values.address)) {
    errors.address = 'Address is required';
  }
  if (!required(values.phone)) {
    errors.phone = 'Phone is required';
  } else if (!phone(values.phone)) {
    errors.phone = 'Phone has to be valid';
  }
  if (!required(values.card)) {
    errors.card = 'Card is required';
  } else if (!creditCard(values.card)) {
    errors.card = 'Credit card has to be valid';
  }
  if (!required(values.exp_date)) {
    errors.exp_date = 'Expiration date is required';
  }
  if (!required(values.cvs)) {
    errors.cvs = 'CVS is required';
  } else if (!minLength(3)(values.cvs) || !maxLength(3)(values.cvs)) {
    errors.cvs = 'CVS must contain only 3 digits';
  }
  return errors;
};

const creditCardMask = createTextMask({
  pattern: '9999 9999 9999 9999',
});

const expDateMask = createTextMask({
  pattern: '99/99',
});

/**
 * ReduxForm container
 */
const CheckoutForm = ({
  error,
  callSubmitChekout,
  handleSubmit,
  pristine,
  reset,
  submitting,
  invalid,
  submitSucceeded,
  products,
  total,
  count,
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

  const changeData = (data) => {
    const newData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      city: data.city,
      zip: data.zip,
      address: data.address,
      phone: data.phone,
      card_number: data.card,
      products,
      total,
      count
    };
    return callSubmitChekout(newData);
  };
  return (
    <RenderForm
      error={error}
      isSubmitting={submitting}
      isPristine={pristine}
      isSucceeded={submitSucceeded}
      isInvalid={invalid}
      onSubmit={handleSubmit(changeData)}
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
        label="First name *"
      />
      <Field
        name="last_name"
        type="text"
        component={RenderField}
        label="Last name *"
      />
      <Field
        name="email"
        type="email"
        component={RenderField}
        label="Email *"
      />
      <Field
        name="city"
        type="text"
        component={RenderField}
        label="City *"
      />
      <Field
        name="zip"
        type="text"
        component={RenderField}
        label="ZIP *"
      />
      <Field
        name="address"
        type="text"
        component={RenderField}
        label="Address *"
      />
      <Field
        name="phone"
        type="tel"
        component={RenderField}
        label="Phone *"
      />
      <Field
        name="card"
        type="text"
        component={RenderField}
        label="Card *"
        {...creditCardMask}
      />
      <Field
        name="exp_date"
        type="text"
        component={RenderField}
        label="Expiration date *"
        {...expDateMask}
      />
      <Field
        name="cvs"
        type="password"
        component={RenderField}
        label="CVS *"
      />
    </RenderForm>
  );
};

CheckoutForm.propTypes = {
  /** A function meant to be passed to onSubmit={handleSubmit} or to onClick={handleSubmit} */
  handleSubmit: PropTypes.func.isRequired,
  /** Action connected to the form submission */
  callSubmitChekout: PropTypes.func.isRequired,
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
  /** Array with products in cart */
  products: PropTypes.shape([{
    name: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    slug: PropTypes.string
  }]),
  /** Count of products in cart */
  count: PropTypes.number,
  /** Total price of all products in cart  */
  total: PropTypes.number,
};

CheckoutForm.defaultProps = {
  error: '',
  pristine: true,
  submitting: false,
  invalid: false,
  submitSucceeded: false,
  products: [],
  count: 0,
  total: 0,
};

const mapStateToProps = state => ({
  initialValues: state.customers.profile,
  products: state.cart.products,
  total: state.cart.total,
  count: state.cart.count,
});

const mapDispatchToProps = dispatch => ({
  callSubmitChekout: data => dispatch(submitChekout(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'CheckoutForm', validate
})(CheckoutForm));

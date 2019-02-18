
export const required = value => !!value;

export const email = value => value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const maxLength = max => value => value.length <= max;

export const minLength = min => value => value && value.length >= min; 

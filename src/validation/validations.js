
export const required = value => !!value;

export const email = value => value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const maxLength = max => value => value.length <= max;

export const minLength = min => value => value && value.length >= min;

export const stringValidation = value => value && /^(([A-za-zА-яа-яàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+[- ]{1}[A-za-zА-яа-яàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+)|([A-Za-zА-Яа-яàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+))$/gim.test(value);

export const ukrainePhone = value => value && /(\+38)?\(?0(39|67|68|96|50|66|95|99|63|93|91|92|94)\)?(\d{3})-?(\d{2})-?(\d{2})/g.test(value);

export const phone = value => value && /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(value);

export const creditCard = value => value && /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/g.test(value);

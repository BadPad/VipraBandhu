import { dataRequired, emailValidation, phoneNumber, numeric } from './ValidationTypes';
import isEmpty from '../is-empty';

export const validateLoginInput = data => {
    let errors = {};

    data.emailOrPhone = !dataRequired(data.emailOrPhone) ? data.emailOrPhone : '';
    data.password = !dataRequired(data.password) ? data.password : '';

    if(!emailValidation(data.emailOrPhone) && !numeric(data.emailOrPhone)) {
        errors.emailOrPhone = 'Email is Invalid';
    }

    if(!phoneNumber(data.emailOrPhone) && numeric(data.emailOrPhone)) {
        errors.emailOrPhone = 'Phone Number is Invalid'
    }

    if(dataRequired(data.emailOrPhone) && dataRequired(data.emailOrPhone)) {
        errors.emailOrPhone = 'Email / Phone is required'
    }

    if(dataRequired(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
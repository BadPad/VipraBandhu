import { dataRequired, emailValidation, compare, phoneNumber, numberLength } from './ValidationTypes';
import isEmpty from '../is-empty';

export const validateRegisterInput = (data, registerType, tc) => {
    let errors = {};

    data.firstName = !dataRequired(data.firstName) ? data.firstName : '';
    data.lastName = !dataRequired(data.lastName) ? data.lastName : '';
    data.email = !dataRequired(data.email) ? data.email : '';
    data.phone = !dataRequired(data.phone) ? data.phone : '';
    data.aadharNo = !dataRequired(data.aadharNo) ? data.aadharNo : '';
    data.accountNo = !dataRequired(data.accountNo) ? data.accountNo : '';
    data.password = !dataRequired(data.password) ? data.password : '';
    data.confirmPassword = !dataRequired(data.confirmPassword) ? data.confirmPassword : '';

    if(dataRequired(data.firstName)) {
        errors.firstName = 'Firstname field is required';
    }

    if(dataRequired(data.lastName)) {
        errors.lastName = 'Lastname field is required';
    }

    if(!emailValidation(data.email) && compare(registerType, 'Customer')) {
        errors.email = 'Email is Invalid';
    }

    if(dataRequired(data.email) && compare(registerType, 'Customer')) {
        errors.email = 'Email is required'
    }

    if(!phoneNumber(data.phone)) {
        errors.phone = 'Phone number should be 10 digit';
    }

    if(dataRequired(data.phone)) {
        errors.phone = 'Phone number is required';
    }

    if(numberLength(data.aadharNo, { min:0, max: 11 }) && compare(registerType, 'Cook/Catering Service')) {
        errors.aadharNo = 'Invalid Aadhar Number';
    }

    if(dataRequired(data.aadharNo) && compare(registerType, 'Cook/Catering Service')) {
        errors.aadharNo = 'Aadhar Number is required';
    }

    if(numberLength(data.accountNo, { min: 0, max: 10 }) && compare(registerType, 'Cook/Catering Service')) {
        errors.accountNo = 'Invalid Account Number';
    }

    if(dataRequired(data.accountNo, { min: 0, max: 10 }) && compare(registerType, 'Cook/Catering Service')) {
        errors.accountNo = 'Account Number is required';
    }
    
    if(dataRequired(data.password)) {
        errors.password = 'Password field is required';
    }

    if(!compare(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Password match error';
    }
    
    if(dataRequired(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm Password error';
    }

    if(!tc) {
        errors.checked = 'Select the Checkbox';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
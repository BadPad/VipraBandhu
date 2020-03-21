import Validator from 'validator';

export const dataRequired = data => {
    return Validator.isEmpty(data)
}

export const emailValidation = emailId => {
    return Validator.isEmail(emailId)
}

export const compare = (data1, data2) => {
    return Validator.equals(data1, data2)
}

export const phoneNumber = number => {
    return Validator.isMobilePhone(number, ['en-IN'])
}

export const numberLength = (number, length) => {
    return Validator.isLength(number, length)
}

export const numeric = number => {
    return Validator.isNumeric(number)
}
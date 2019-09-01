import { VALIDATE_FORM, VALIDATE_FORM_SUCCESS, VALIDATE_FORM_ERROR } from '../types';

export function validateFormAction() {
    return dispatch => {
        dispatch(initializeValidation())
    }
}

export const initializeValidation = () => {
    return {
        type: VALIDATE_FORM
    }
}
export const validateSuccess = () => {
    return {
        type: VALIDATE_FORM_SUCCESS
    }
}
export const validateError = () => {
    return {
        type: VALIDATE_FORM_ERROR
    }
}

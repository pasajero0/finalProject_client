export const SET_LOGIN_FORM_ACTIVE_STATUS = 'SET_LOGIN_FORM_ACTIVE_STATUS';
export const SHOW_SYSTEM_MESSAGE = 'SHOW_SYSTEM_MESSAGE';
export const HIDE_SYSTEM_MESSAGE = 'HIDE_SYSTEM_MESSAGE';
export const SET_GENDER_STATUS = 'SET_GENDER_STATUS';

export function setLoginFormActiveStatus ( value ) {

    return {
        type: SET_LOGIN_FORM_ACTIVE_STATUS,
        payload: value
    }
}

export function showSystemMessage ( text, type ) {
    return {
        type: SHOW_SYSTEM_MESSAGE,
        payload: {
            text,
            type
        }
    }
}

export function hideSystemMessage () {
    return {
        type: HIDE_SYSTEM_MESSAGE,
        payload: {}
    }
}

// export function changeGenderStatus (isWomen) {
//     return {
//         type: SET_GENDER_STATUS,
//         payload: isWomen
//     }
// }
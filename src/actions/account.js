
export const DISPLAY_LOGIN_OR_REGISTER = 'DISPLAY_LOGIN_OR_REGISTER';

export function displayLoginOrRegister ( value ) {

  return {
    type: DISPLAY_LOGIN_OR_REGISTER,
    payload: value === 'LOGIN' ? true : false
  }
}



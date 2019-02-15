import {
	LOGIN,
	REGISTER
} from '../actions/account';

const initialState = {
  isLogin: true
};

function account(state = initialState, action) {
  switch (action.type) {
    case LOGIN :
      return {
        ...state
      };
	case REGISTER :
      return {
        ...state
      };
    default:
      return { ...state };
  }
}

export default account; 
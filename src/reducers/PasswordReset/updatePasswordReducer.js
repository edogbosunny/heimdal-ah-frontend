import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  payload: '',
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_PASSWORD_FAILED:
      return ({
        ...state,
        payload: action.payload,
        status: 'FAILED',
      });

    case ACTIONS.UPDATE_PASSWORD_SUCCESS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    case ACTIONS.UPDATE_PASSWORD_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
      });

    default:
      return (state);
  }
};

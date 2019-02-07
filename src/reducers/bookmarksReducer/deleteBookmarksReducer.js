import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  payload: '',
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DELETE_BOOKMARKS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    case ACTIONS.DELETE_BOOKMARKS_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
      });

    default:
      return (state);
  }
};

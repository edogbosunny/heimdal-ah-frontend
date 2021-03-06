import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';

const updatePassword = (token, newPassword) => dispatch => instance.put(`/password/reset/${token}`, {
  password: newPassword.password,
  confirmPassword: newPassword.confirmpassword,
}).then((response) => {
  if (response.status === 200) {
    dispatch(ActionResponse(ACTIONS.UPDATE_PASSWORD_SUCCESS, 'password update was successful'));
  } else if (response.status === 404) {
    dispatch(ActionResponse(ACTIONS.UPDATE_PASSWORD_FAILED, 'user not avalaible'));
  }
}).catch((error) => {
  dispatch(ActionResponse(ACTIONS.UPDATE_PASSWORD_ERROR, 'Server error', error));
});

export default updatePassword;

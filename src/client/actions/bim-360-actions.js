import axios from 'axios';
import {
  FORM_ERROR,
  FORM_SUCCESS,
  FORM_LOADING,
  HISTORY_ERROR,
  HISTORY_SUCCESS,
  HISTORY_LOADING,
  BUSINESS_ERROR,
  BUSINESS_SUCCESS,
  BUSINESS_LOADING
} from './types';

// form actions
export const formHasError = bool => ({
  type: FORM_ERROR,
  formHasError: bool
});

export const formDataSuccess = resp => ({
  type: FORM_SUCCESS,
  formPayload: resp
});

export const formIsLoading = bool => ({
  type: FORM_LOADING,
  formIsLoading: bool
});

// history actions
export const historyHasError = bool => ({
  type: HISTORY_ERROR,
  historyHasError: bool
});

export const historyDataSuccess = resp => ({
  type: HISTORY_SUCCESS,
  historyPayload: resp
});

export const historyIsLoading = bool => ({
  type: HISTORY_LOADING,
  historyIsLoading: bool
});

// business units
export const businessHasError = bool => ({
  type: BUSINESS_ERROR,
  businessHasError: bool
});

export const businessDataSuccess = resp => ({
  type: BUSINESS_SUCCESS,
  businessPayload: resp
});

export const businessIsLoading = bool => ({
  type: BUSINESS_LOADING,
  businessIsLoading: bool
});

// thunk actions
export const postForm = formData => (dispatch) => {
  dispatch(formIsLoading(true));
  axios({
    method: 'post',
    url: 'api/project/create',
    data: formData,
    config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  })
    .then((response) => {
      // handle success
      dispatch(formIsLoading(false));
      console.log(' success response:', response);
      dispatch(formDataSuccess(response.data));
    })
    .catch((err) => {
      // handle error
      dispatch(formIsLoading(false));
      dispatch(formHasError(true));
      dispatch(formDataSuccess(err));
      console.error(err);
    });
};

export const getHistory = () => (dispatch) => {
  dispatch(historyIsLoading(true));
  axios({
    method: 'get',
    url: 'api/event/listing'
  })
    .then((response) => {
      // handle success
      dispatch(historyIsLoading(false));
      dispatch(historyDataSuccess(response.data));
    })
    .catch((err) => {
      // handle error
      console.error(err);
      dispatch(historyHasError(true));
    });
};

export const getBusinessUnits = () => (dispatch) => {
  dispatch(businessIsLoading(true));
  axios({
    method: 'get',
    url: 'api/bim360/business_units'
  })
    .then((response) => {
      // handle success
      dispatch(businessIsLoading(false));
      dispatch(businessDataSuccess(response.data));
    })
    .catch((err) => {
      // handle error
      console.error(err);
      dispatch(businessHasError(true));
    });
};

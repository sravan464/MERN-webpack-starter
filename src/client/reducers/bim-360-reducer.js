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
} from '../actions/types';

const formInitialState = {
  formData: {},
  formIsLoading: false,
  formHasError: false
};

export function formReducer(state = formInitialState, action) {
  switch (action.type) {
    case FORM_SUCCESS:
      return { ...state, formData: action.formPayload };
    case FORM_LOADING:
      return { ...state, formIsLoading: action.formIsLoading };
    case FORM_ERROR:
      return { ...state, formHasError: action.formHasError };
    default:
      return state;
  }
}

const historyInitialState = {
  historyData: [],
  historyIsLoading: false,
  historyHasError: false
};

export function historyReducer(state = historyInitialState, action) {
  switch (action.type) {
    case HISTORY_SUCCESS:
      return { ...state, historyData: action.historyPayload };
    case HISTORY_LOADING:
      return { ...state, historyIsLoading: action.historyIsLoading };
    case HISTORY_ERROR:
      return { ...state, historyHasError: action.historyHasError };
    default:
      return state;
  }
}

const businessInitialState = {
  businessData: [],
  businessIsLoading: false,
  businessHasError: false
};

export function businessReducer(state = businessInitialState, action) {
  switch (action.type) {
    case BUSINESS_SUCCESS:
      return { ...state, businessData: action.businessPayload };
    case BUSINESS_LOADING:
      return { ...state, businessIsLoading: action.businessIsLoading };
    case BUSINESS_ERROR:
      return { ...state, businessHasError: action.businessHasError };
    default:
      return state;
  }
}

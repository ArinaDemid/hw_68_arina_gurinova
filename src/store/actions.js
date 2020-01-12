import axiosOrders from '../axios-orders';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const incrementCounterSuccess = (amount) => {
  return { type: INCREMENT, amount};
};

export const decrementCounterSuccess = (amount) => {
  return { type: DECREMENT, amount};
};

export const addCounterSuccess = (amount) => {
  return { type: ADD, amount};
};

export const subtractCounterSuccess = (amount) => {
  return { type: SUBTRACT, amount};
};

export const fetchCounterRequest = () => {
  return { type: FETCH_COUNTER_REQUEST };
};

export const fetchCounterSuccess = (counter) => {
  return { type: FETCH_COUNTER_SUCCESS, counter};
};

export const fetchCounterError = (error) => {
  return { type: FETCH_COUNTER_ERROR, error };
};

export const fetchCounter = () => {
  return dispatch => {
    dispatch(fetchCounterRequest());
    axiosOrders.get('/counter.json').then(response => {
      dispatch(fetchCounterSuccess(response.data));
    }, error => {
      dispatch(fetchCounterError(error));
    });
  }
};

export const incrementCounter = (amount) => {
  return dispatch => {
    axiosOrders.put('/counter.json', amount + 1);
    dispatch(incrementCounterSuccess(amount + 1));
  }
};

export const decrementCounter = (amount) => {
  return dispatch => {
    axiosOrders.put('/counter.json', amount - 1);
    dispatch(decrementCounterSuccess(amount - 1));
  }
};

export const addCounter = (amount) => {
  return dispatch => {
    axiosOrders.put('/counter.json', amount + 5);
    dispatch(addCounterSuccess(amount + 5));
  }
};

export const subtractCounter = (amount) => {
  return dispatch => {
    axiosOrders.put('/counter.json', amount - 5);
    dispatch(subtractCounterSuccess(amount - 5));
  }
};

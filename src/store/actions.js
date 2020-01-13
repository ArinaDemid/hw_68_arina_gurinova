import axiosOrders from '../axios-orders';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_ERROR = 'FETCH_TASK_ERROR';
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

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

export const fetchTaskRequest = () => {
  return { type: FETCH_TASK_REQUEST };
};

export const fetchTaskSuccess = (tasks) => {
  return { type: FETCH_TASK_SUCCESS, tasks};
};

export const fetchTaskError = (error) => {
  return { type: FETCH_TASK_ERROR, error };
};

export const submitTaskSuccess = (taskText) => {
  return { type: ADD_TASK, taskText};
};

export const deleteTaskSuccess = (id) => {
  return { type: DELETE_TASK, id};
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

export const fetchTask = () => {
  return dispatch => {
    dispatch(fetchTaskRequest());
    axiosOrders.get('/tasks.json').then(response => {
      dispatch(fetchTaskSuccess(response.data));
    }, error => {
      dispatch(fetchTaskError(error));
    });
  }
};

export const valueChange = (value) => {
  return {type: CHANGE_TASK, value};
};

export const submitTask = (event, taskText) => {
  event.preventDefault();
  return dispatch => {
    axiosOrders.post('/tasks.json', taskText);
    dispatch(submitTaskSuccess(taskText));
  }
};

export const deleteTask = (id) => {
  return dispatch => {
    axiosOrders.delete('/tasks/' + id + '.json');
    dispatch(deleteTaskSuccess(id));
  }
};



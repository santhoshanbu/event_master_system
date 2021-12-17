import { FETCH_ALL, CREATE, } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getManagers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchManagers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createManager = (manager) => async (dispatch) => {
  try {
    const { data } = await api.createManager(manager);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


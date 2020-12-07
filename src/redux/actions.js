import {CHANGE_PRIORITY, CHANGE_STATUS, CREATE_TASK, DELETE_TASK} from '@/redux/types';

export const createTask = (item) => {
  return {
    type: CREATE_TASK,
    payload: item
  }
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
};

export const changeTaskPriority = (id) => {
  return {
    type: CHANGE_PRIORITY,
    payload: id
  }
};

export const changeTaskStatus = (isDone) => {
  return {
    type: CHANGE_STATUS,
    payload: isDone
  }
};
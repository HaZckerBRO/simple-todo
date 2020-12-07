import {CHANGE_PRIORITY, CHANGE_STATUS, CREATE_TASK, DELETE_TASK} from '@/redux/types';

const tasksFromLocalStorage = JSON.parse(window.localStorage.getItem('tasks')) || [];

const initState = {
  tasks:  tasksFromLocalStorage
};

const emptyTask = {
  text: null,
  isDone: false,
  priority: 0
};

export const todoReducer = (state = initState, action) => {
  let newTask = null;
  let id = null;
  let tasks = null;
  let task = null;
  let index = null;

  switch (action.type) {

    case CREATE_TASK:
      newTask = {
        ...emptyTask,
        id: action.payload.id,
        text: action.payload.text
      };
      return {
        ...state,
        tasks: [...state.tasks].concat([newTask])
      };

    case DELETE_TASK:
      id = action.payload;
      tasks = state.tasks.filter(el => el.id !== id);
      return {...state, tasks};

    case CHANGE_PRIORITY:
      id = action.payload;
      task = state.tasks.find(el => el.id === id);
      index = state.tasks.indexOf(task);
      const oldPriority = task.priority;
      let newPriority = oldPriority < 2 ? (oldPriority + 1) : 0;
      newTask = {
        ...task,
        priority: newPriority
      };
      tasks = [].concat(state.tasks);
      tasks[index] = newTask;
      return {
        ...state,
        tasks
      };
    case CHANGE_STATUS:
      id = action.payload;
      task = state.tasks.find(el => el.id === id);
      index = state.tasks.indexOf(task);
      const oldStatus = task.isDone;
      let newStatus = !oldStatus;
      newTask = {
        ...task,
        isDone: newStatus
      };
      tasks = [].concat(state.tasks);
      tasks[index] = newTask;
      return {
        ...state,
        tasks
      };

    default:
      return state;
  }
};
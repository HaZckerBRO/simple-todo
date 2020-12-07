export const getUniqueId = () => {
  const num1 = Math.round(Math.random() * 1000);
  const num2 = Math.round(Math.random() * 1000000);
  return num1 + ':' + num2
};

export const storage = (newTaskList) => {
  if (newTaskList) {
    return window.localStorage.setItem('tasks', JSON.stringify(newTaskList));
  }
  return JSON.parse(window.localStorage.getItem('tasks')) || {}
};
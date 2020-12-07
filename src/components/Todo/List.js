import React from 'react';
import {useSelector} from 'react-redux';
import {Task} from './Task';

export const List = ({cn, changeTask}) => {

  const tasks = useSelector(state => state.todo.tasks);

  const emptyItemsTitle = <h2 style={{color: 'orange'}}>Задач пока нет.</h2>;

  const items = tasks.map((task, ind) => {
    const { id, text, priority, isDone, creationDate } = task;
    const data = {id, text, priority, isDone, creationDate};

    return (
      <Task
        cn={cn}
        key={id}
        index={ind+1}
        data={data}
        changeTask={changeTask}
      />
    )
  });

  function getContent() {
    if (items.length) {
      return (
        <React.Fragment>
          <h2>Ваши задачи:</h2>
          {items}
        </React.Fragment>
      )
    }
    return emptyItemsTitle
  }

  return (
    <div className={cn('list')}>
      { getContent() }
    </div>
  )
};
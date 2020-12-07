import React from 'react';
import {Checkbox} from 'antd';
import {Control} from '@components/Todo/Control';
import {useDispatch} from 'react-redux';
import {changeTaskStatus} from '@/redux/actions';

export const Task = (props) => {
  const {id, text, priority, isDone, creationDate} = props.data;

  const dispatch = useDispatch();

  const textClasses = isDone
    ? 'Todo__item_text Todo__item--done'
    : 'Todo__item_text';

  function changeTaskHandler() {
    dispatch(changeTaskStatus(id))
  }

  const taskIndex = props.index + '.';

  return (
    <div className='Todo__item' data-id={id}>
      <div className='Todo__item_index'>
        {taskIndex}
      </div>

      <div className='Todo__item_status' data-action="status">
        <Checkbox checked={isDone} onChange={changeTaskHandler} />
      </div>

      <div className={textClasses}>
        {text}
      </div>

      <Control
        id={id}
        priority={priority}
      />

      <div className='Todo__item_info'>
        дата: 12.20.2021
      </div>
    </div>
  );
};
import React from 'react';
import {useDispatch} from 'react-redux';
import { Input } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import {getUniqueId} from '@components/Todo/todo.functions';
import {createTask} from '@/redux/actions';

const {TextArea} = Input;
const TEXTAREA_SIZE = {minRows: 2, maxRows: 2};
const TEXTAREA_PLACEHOLDER = "Введите текст задачи";

export const Header = ({cn}) => {
  const [value, setValue] = React.useState();

  const dispatch = useDispatch();

  const addTaskClickHandler = () => {
    if (value) {
      const id = getUniqueId();
      const item = {
        id,
        text: value,
      };
      dispatch(createTask(item));
      setValue('')
    }
  };

  function taskInputHandler(evt) {
    setValue(evt.target.value)
  }

  return (
    <div className={cn('header')}>
      <div className={cn('item-input')}>
        <TextArea
          autoSize={TEXTAREA_SIZE}
          placeholder={TEXTAREA_PLACEHOLDER}
          value={value}
          onInput={taskInputHandler}
        />
        <PlusCircleTwoTone
          style={{fontSize: '30px', cursor: 'pointer'}}
          onClick={addTaskClickHandler}
        />
      </div>
    </div>
  )
};
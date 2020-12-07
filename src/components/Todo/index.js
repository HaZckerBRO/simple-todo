import React from 'react';
import {Header} from './Header';
import {List} from '@components/Todo/List';
import {storage} from './todo.functions';

import { block } from 'bem-cn';
import {useSelector} from 'react-redux';
const cn = block('Todo');

export const Todo = () => {
  const state = useSelector(state => state.todo.tasks);
  storage(state);

  return (
    <div className={cn()}>
      <Header
        cn={cn}
      />
      <List
        cn={cn}
        tasks={state}
      />
    </div>
  )
};
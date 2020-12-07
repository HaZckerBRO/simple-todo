import React from 'react';
import { block } from 'bem-cn';
import {Todo} from '@components/Todo';

const cn = block('Container');

export const Container = () => {
  return (
    <div className={cn()}>
      <div className={cn('content')}>
        <Todo />
      </div>
    </div>
  )
};
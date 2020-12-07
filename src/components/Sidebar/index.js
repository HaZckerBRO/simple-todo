import React from 'react';
import { block } from 'bem-cn';

const cn = block('Sidebar');

export const Sidebar = () => {
  return (
    <div className={cn()}>
      <div className={cn('logo')}>
        <p>Simple</p>
        <p>Todo List</p>
      </div>
    </div>
  )
};
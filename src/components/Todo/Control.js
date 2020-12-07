import React from 'react';
import {DeleteTwoTone, WarningTwoTone, EditTwoTone} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {changeTaskPriority, deleteTask} from '@/redux/actions';
import {getClosestDataId} from '@components/Todo/utils';

const iconStyle = {fontSize: '18px'};

const activeColors= {
  warn: '#ffa122',
  danger: '#ff4d4f',
  primary: '#86adf1'
};

const defaultColor = '#d9d9d9';

const defaultColors = {
  warn: defaultColor,
  delete: defaultColor,
  edit: defaultColor
};

export const Control = ({id, priority}) => {
  const dispatch = useDispatch();

  const getPriorityColor = () => {
    if (priority === 1) {
      return activeColors.warn;
    }
    if (priority === 2) {
      return activeColors.danger;
    }
    return defaultColor;
  };

  const [colors, setColors] = React.useState(defaultColors);

  const mouseLeaveHandler = () => {
    setColors(prev => {
      return {
        ...prev,
        edit: defaultColors.edit,
        delete: defaultColors.delete,
      }
    })
  };

  const mouseEnterHandler = (field) => {
    setColors(prev => {
      return {
        ...prev,
        [field]: activeColors[field]
      }
    })
  };

  const deleteTaskHandler = () => {
    if (confirm('Вы уверены что хотите удалить задачу?')) {
      dispatch(deleteTask(id));
    }
  };

  const changePriorityHandler = () => {
    dispatch(changeTaskPriority(id));
  };

  return (
    <div className='Todo__item_control'>
      <WarningTwoTone
        twoToneColor={getPriorityColor()}
        style={iconStyle}
        onClick={changePriorityHandler}
      />
      <EditTwoTone
        twoToneColor={colors.edit}
        onMouseEnter={() => mouseEnterHandler('edit')}
        onMouseLeave={mouseLeaveHandler}
        style={iconStyle}
      />
      <DeleteTwoTone
        twoToneColor={colors.delete}
        style={iconStyle}
        onMouseEnter={() => mouseEnterHandler('delete')}
        onMouseLeave={mouseLeaveHandler}
        onClick={deleteTaskHandler}
      />
    </div>
  )
};
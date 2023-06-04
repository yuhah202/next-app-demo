import React, { memo } from 'react';
import {
  Box,
  Button,
  Checkbox,
} from '@mui/material';

import styles from '../../pages/to-do-list/TodoList.module.scss';

function ItemTodoList(props) {
  const {
    todoItem,

    onClickRemoveItem,
    onToggleComplete,
  } = props;

  return (
    <Box className={styles.ChildSection}>
      <div className={styles.ItemContainer}>
        <Checkbox
          className={styles.Checkbox}
          size='sm'
          value={todoItem.id}
          checked={todoItem.completed}
          onClick={onToggleComplete}
        />

        <div className={`${styles.Item} ${todoItem.completed ? styles.ColorRed : '' }`}>
          {todoItem.label}
        </div>

        <Button
          className={styles.Delete}
          color="error"
          variant="contained"
          value={todoItem.id}
          onClick={onClickRemoveItem}
        >
          Xóa
        </Button>
      </div>
    </Box>
  )
}

export default memo(ItemTodoList)

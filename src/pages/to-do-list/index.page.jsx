import React, { useState, useCallback } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@mui/material';
import { useTodoListStore } from 'stores/useTodoListStore';

import ItemTodoList from '../../components/ItemTodoList';

import styles from './TodoList.module.scss';

function TodoList() {
  const [todoText, setTodoText] = useState('')

  const todoList = useTodoListStore((state) => state.todos);
  const onAddItem = useTodoListStore((state) => state.onAddTodo)
  const onRemoveItem = useTodoListStore((state) => state.onRemoveTodo)
  const onToggleItem = useTodoListStore((state) => state.onToggleTodo)
  const onResetItem = useTodoListStore((state) => state.onResetAllTodo)

  const onChangeTodoText = useCallback((e) => {
    setTodoText(e.target.value)
  }, [])

  const onClickAddItem = useCallback(() => {
    if (todoText.length) {
      onAddItem(todoText),
        setTodoText('')
    }
  }, [todoText])

  const onClickRemoveItem = useCallback((e) => {
    onRemoveItem(e.target.value)
  }, [])

  const onToggleComplete = useCallback((e) => {
    onToggleItem(e.target.value)
  }, [])

  return (
    <div className={styles.Page}>
      <div className={styles.Title}>
        Todo List
      </div>

      <Box className={styles.Section}>
        <div className={styles.Header}>
          <TextField
            className={styles.Input}
            label="Việc cần làm"
            value={todoText}
            onChange={onChangeTodoText}
          />

          <Button
            className={styles.Button}
            variant="contained"
            onClick={onClickAddItem}
          >
            Thêm
          </Button>
        </div>

        {todoList.length === 0 && (
          <Box className={styles.ChildSection}>
            Chưa có danh sách
          </Box>
        )}

        {todoList.length > 0 && todoList.map((item) => {
          return (
            <ItemTodoList
              key={item.id}
              todoItem={item}
              onClickRemoveItem={onClickRemoveItem}
              onToggleComplete={onToggleComplete}
            />
          )
        })}

        <Button
          disabled={todoList.length === 0}
          onClick={onResetItem}
        >
          Xóa tất cả
        </Button>
      </Box>
    </div>
  )
}

export default TodoList

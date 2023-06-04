import { create } from 'zustand';
import { v4 as uuidv4 } from "uuid";

const initialTodos = [];

export const useTodoListStore = create((set) => ({
  todos: initialTodos,
  onAddTodo: (label) => set((state) => ({
    todos: [
      ...state.todos,
      {
        id: uuidv4(),
        label,
        completed: false,
      }
    ]
  })),
  onRemoveTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  onToggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? ({ ...todo, completed: !todo.completed })
          : todo
      ),
    }));
  },
  onResetAllTodo: () => {
    set(() => ({
      todos: initialTodos,
    }))
  },
}))

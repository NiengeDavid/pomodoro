'use client'

import React, { useState } from 'react'

type Todo = {
  id: string
  title: string
  description?: string
  completed: boolean
  pomodorosCompleted: number
  pomodorosTarget: number
}

const TodoComponent: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTask, setNewTask] = useState<string>('')

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          title: newTask,
          description: '',
          completed: false,
          pomodorosCompleted: 0,
          pomodorosTarget: 4, // Default target
        },
      ])
      setNewTask('')
    }
  }

  const handleToggleComplete = (id: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const handleDeleteTask = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className='todo-container mx-auto max-w-md rounded-lg bg-white p-4 shadow-lg'>
      <h1 className='mb-4 text-xl font-bold'>Tasks</h1>
      <div className='task-input mb-4'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add a new task...'
          className='w-full rounded-md border p-2'
        />
        <button onClick={handleAddTask} className='mt-2 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600'>
          Add Task
        </button>
      </div>
      <ul className='task-list space-y-3'>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between rounded-lg border p-3 ${
              todo.completed ? 'bg-gray-200 line-through' : 'bg-gray-50'
            }`}
          >
            <div className='flex items-center'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className='mr-2'
              />
              <div>
                <h2 className='font-medium'>{todo.title}</h2>
                {todo.description && <p className='text-sm text-gray-600'>{todo.description}</p>}
                <div className='text-sm text-gray-500'>
                  Pomodoros: {todo.pomodorosCompleted}/{todo.pomodorosTarget}
                </div>
              </div>
            </div>
            <button onClick={() => handleDeleteTask(todo.id)} className='text-red-500 hover:underline'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoComponent

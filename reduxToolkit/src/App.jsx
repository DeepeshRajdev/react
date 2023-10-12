import React, { useState } from 'react'
import './App.css'
import { add, remove, update } from './settingReducers/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  let [task, setTask] = useState('learning redux');
  const dispatch = useDispatch();
  let list = useSelector(state => state.list);

  return (
    <>
      <h1>Redux Toolkit</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input type="text" placeholder='new task' value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={
          () => {
            dispatch(add(task));
            setTask('');
          }
        }>Add</button>
      </form>
      <ul>
        {
          list.map((item, ind) => (
            <li key={item.id}>{item.content}<button onClick={() => {
              dispatch(remove(item.id))
            }}>delete</button></li>
          ))
        }
      </ul>
    </>
  )
}

export default App

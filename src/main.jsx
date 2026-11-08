import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const DATA = [
  { id: "todo-0", name: "스쿼트 20회", completed: true },
  { id: "todo-1", name: "푸시업 15회", completed: false },
  { id: "todo-2", name: "플랭크 1분", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)

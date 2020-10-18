import React from 'react';
import './App.css';
import InputTask from './components/inputTask';
import ListTask from './components/listTask';
const App=()=>{
  return (<div>
    <div className="card">
    <InputTask />
    <ListTask/>
    </div>
  </div>
  
  );
}
export default App;

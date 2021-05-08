import React, { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { TaskModel } from './models';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [taskList, setTaskList] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ]);
  
  // delete task
  const deleteTask = (id: any) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const toogleReminder = (id:number) =>{    
    let newTaskList = taskList.map((t)=> t.id === id ? 
    {...t, reminder:!t.reminder} : t);
    setTaskList(newTaskList);    
  }

  const addTask = (task:any) =>{
    console.log(task);
  }

  return (
    <div className="container">
      {/* Header */}
      <Header title='ToDo Tracker' showAdd={showAddTask}
      onAdd={()=>setShowAddTask(!showAddTask)} />
      <AddTask onAdd={addTask}/>
      {/* Task */}
      {
        taskList.length > 0 ?
          <Tasks tasks={taskList} onToggle={toogleReminder} onDelete={deleteTask} /> :
          'No More Tasks'
      }
    </div>
  );
}

export default App;

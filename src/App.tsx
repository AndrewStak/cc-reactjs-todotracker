import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { TaskModel } from './models';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskList, setTaskList] = useState<TaskModel[]>([]);

  useEffect(() => {
    const getTasks = async ()=>{
      const taskFromServer = await fetchTasks();
      setTaskList(taskFromServer);
    }    
    getTasks();
  }, []);

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  
  const fetchTask = async (id:number) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }
  
  // delete task
  const deleteTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    });

    const data = res.json();
    console.log(data);

    res.status === 200? 
    setTaskList(taskList.filter((task) => task.id !== id)) 
    : alert('Error Happened in deleting the task');
  }

  // toogle reminder
  const toogleReminder = async (id:number) =>{    
    const taskInToogle = await fetchTask(id);
    const updateTask = {...taskInToogle, reminder:!taskInToogle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updateTask)
    });

    const data = await res.json();
    
    let newTaskList = taskList.map((t)=> t.id === id ? 
    {...t, reminder: data.reminder} : t);

    res.status === 200? setTaskList(newTaskList) 
    : alert('Error Happened in updating the task');
  }

  // add task
  const addTask = async (task:TaskModel) =>{
    console.log(task);

    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json',        
      },
      body:JSON.stringify(task),
    });

    const data = await res.json();
    console.log('addtask', data);
    console.log(res.status);

    res.status === 201 ?
    setTaskList([...taskList, data])
    : alert('Error Happened in adding the task');
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

import React from 'react';
import { TaskModel } from '../models';
import Task from './Task';

type TasksProps = {
    tasks: TaskModel[];    
    onDelete:any;
    onToggle:any;
}

const Tasks:React.FC<TasksProps> = ({tasks,onDelete, onToggle}) => {

    return (
        <div>
            {
                tasks.map((task) => (                    
                    <Task key={task.id} task={task} 
                    onToggle={onToggle} onDelete={onDelete}/>
                ))
            }
        </div>
    );
}

export default Tasks;

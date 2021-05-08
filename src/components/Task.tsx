import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { TaskModel } from '../models';


type TaskProps = {
    task:TaskModel;
    onDelete:any;
    onToggle:any;
}

const Task:React.FC<TaskProps> = (props) => {
    return (
        <div 
        className={`task ${props.task.reminder? 'reminder': ''}`}
        onDoubleClick={()=>props.onToggle(props.task.id)}>
            <h3>
                {props.task.text} 
                <FaTimes style={{color:'red', cursor:'pointer'}} 
                onClick={()=>props.onDelete(props.task.id)}/>
            </h3>
            <p>{props.task.day}</p>
        </div>
    );
}

export default Task;

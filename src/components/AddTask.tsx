import React, { useState } from 'react';
import { TaskModel } from '../models';

type AddTaskProps = {
    onAdd:(task:TaskModel)=>void;
}

const AddTask:React.FC<AddTaskProps> = (ps) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{        
        e.preventDefault();

        if(!text){
            alert('Please add a task name');
            return;
        }

        ps.onAdd({text,day,reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            {/* task */}
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' 
                onChange={(e)=>setText(e.target.value)} value={text}/>
            </div>
            {/* day & time */}
            <div className='form-control'>
            <label>Day & TIme</label>
                <input type="text" placeholder='Add Day & Time' 
                onChange={(e)=>setDay(e.target.value)} value={day}/>
            </div>
            {/* reminder */}
            <div className='form-control form-control-check'>
            <label>Set Reminer</label>
                <input type="checkbox" checked={reminder} value={reminder.toString()}
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value='Save Task' className='btn btn-block'/>
        </form>
    );
}

export default AddTask;

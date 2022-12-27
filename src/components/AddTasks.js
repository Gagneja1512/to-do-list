import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { listActions } from "../store/index";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";


const AddTasks = () => {

    const [isTouched, setIsTouched] = useState(false);
    const [valid, setValid] = useState(true)
    const [submitted , setIsSubmitted] = useState(false)

    const enterTask = useRef()
    const dispatch = useDispatch()
    const id = useSelector(state => state.list.selectedList)
    const list = useSelector(state => state.list.lists)

    const formSubmissionHandler = event => {
        event.preventDefault();
        const enteredTask = enterTask.current.value

        const len = enteredTask.trim().length
        if (len === 0) {
            setValid(false);
        } else {
            setIsTouched(true)
            setValid(true)
            setIsSubmitted(true)

            dispatch(listActions.addTaskToList({
                id: id,
                taskId: Math.random(),
                title: enteredTask,
            }))
        }

        enterTask.current.value = ''
    }

    if(!id){
        return (
            <p>Please select a list.Incase no list make a list first to organise your work.</p>
        )
    }

    // console.log(list)
    let currentList
    if(list.length > 0){
        for(let i=0 ; i<list.length ; i++){
            if(list[i].id === id){
                currentList = list[i] ;
            }
        }
    }

    // console.log('currentList' , currentList)
    let tasks = []
    if(currentList){
        for(let i=0 ; i<currentList.tasks.length ; i++){
            tasks.push(currentList.tasks[i]) ;
        }
    }

    console.log(tasks)

    return (
        <div>
            <form onSubmit={formSubmissionHandler}>
                <input type='text' placeholder="Add New Task" ref={enterTask} />
                <button type="submit">Add</button>
            </form>

            {!valid && <p>Task Name cannot be empty.</p>}
            {tasks.map(task => (
                <p key={task.taskid}>{task.title}</p>
            ))}
            
        </div>
    )
}

export default AddTasks
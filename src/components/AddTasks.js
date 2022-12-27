import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { listActions } from "../store/index";
import { useSelector } from "react-redux";
import classes from './AddTasks.module.css'
import TaskItem from "./TaskItems";

const AddTasks = () => {

    const [isTouched, setIsTouched] = useState(false);
    const [valid, setValid] = useState(true)
    const [submitted, setIsSubmitted] = useState(false)

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

    if (!id) {
        return (
            <div className={classes.id}>
                <p>Please select a list.</p>
                <p>Incase no list make a list first to organise your work.</p>
            </div> 
        )
    }

    // console.log(list)
    let currentList
    if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                currentList = list[i];
            }
        }
    }

    // console.log('currentList' , currentList)
    let tasks = []
    if (currentList) {
        for (let i = 0; i < currentList.tasks.length; i++) {
            tasks.push(currentList.tasks[i]);
        }
    }

    const tasksmile = tasks.length === 0

    console.log(tasks)

    const formFocusHandler = () => {
        setValid(true)
    }

    return (
        <div>
            <form onFocus={formFocusHandler} className={classes.form} onSubmit={formSubmissionHandler}>
                <input className={classes.input} type='text' placeholder="Add New Task" ref={enterTask} />
                <button className={classes.btn} type="submit">Add Task</button>
            </form>
            {!valid && <p className={classes.error}>Task Name cannot be empty.</p>}
            <div className={classes.currentlist}>
                {currentList.title}
                {tasksmile && <p className={classes.smile}>Yay! No work Left.</p>}
            </div>
            <div className={classes.alltask}>
                {tasks.map(task => (
                    <TaskItem id={id} taskid={task.taskid} key={task.taskid} title={task.title}></TaskItem>
                ))}
            </div>
        </div>
    )
}

export default AddTasks
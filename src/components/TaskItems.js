import classes from './TaskItem.module.css'
import { useDispatch } from 'react-redux'
import { listActions } from '../store'

const TaskItem = (props) => {

    const dispatch = useDispatch()
    const deleteTaskHandler = () => {
        console.log(props.id , props.taskid)
        dispatch(listActions.removeTaskFromList({
            id: props.id,
            taskId: props.taskid
        }))
    }

    return (
        <div>
            <div className={classes.box}>
                <span className={classes.title}><div className={classes.square}/>{props.title}</span>
                <button className={classes.btndelete} onClick={deleteTaskHandler}>delete</button>
            </div>
        </div>
    )
}

export default TaskItem
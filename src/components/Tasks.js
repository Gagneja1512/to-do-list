import classes from './Tasks.module.css'
import AddTasks from './AddTasks'

const Tasks = () => {
    return (
        <div className={classes.tasks}>
            <div className={classes.tasksmain}>
                <h1 className={classes.heading}>Today</h1>
                <div className={classes.addtask}>
                    <AddTasks></AddTasks>
                </div>
            </div>
        </div>
    )
}

export default Tasks
import classes from './TaskItem.module.css'

const TaskItem = (props) => {
    return (
        <div>
            <div className={classes.box}>
                <span className={classes.title}><div className={classes.square} />{props.title}</span>
            </div>
        </div>
    )
}

export default TaskItem
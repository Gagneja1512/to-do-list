import AddList from "./AddList"
import classes from './Lists.module.css'

const Lists = () => {
    return (
        <div className={classes.listbox}>
            <span className={classes.lists}>Lists</span>
            <div className={classes.addlist}>
                <AddList></AddList>
            </div>
        </div>
    )
}

export default Lists
import { Fragment } from 'react';
import classes from './ListItems.module.css'

const ListItems = (props) => {
    return (
        <Fragment>
            <div className={classes.listItems}>
                <button className={classes.btn_list}><div className={classes.square}></div><span>{props.title}</span></button>
                <span className={classes.taskLength}>{props.taskLength}</span>
            </div>
        </Fragment>
    )
};

export default ListItems 
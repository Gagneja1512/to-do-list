import { Fragment } from 'react';
import classes from './ListItems.module.css'

let color = []
color.push("blue")
color.push("blueviolet")

const ListItems = (props) => {

    console.log(props.listlength)
    const counter = props.listlength%2

    return (
        <Fragment>
            <div className={classes.listItems}>
                <button className={classes.btn_list}><div style={{ "backgroundColor": color[counter] }} className={classes.square}></div><span>{props.title}</span></button>
                <span className={classes.taskLength}>{props.taskLength}</span>
            </div>
        </Fragment>
    )
};

export default ListItems 
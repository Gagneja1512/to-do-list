import { Fragment, } from 'react';
import classes from './ListItems.module.css'
import { listActions } from './../store/index'
import { useDispatch } from 'react-redux'

let color = []
color.push("blue")
color.push("blueviolet")

const ListItems = (props) => {

    const counter = props.listlength%2

    const dispatch = useDispatch()
    const getIdHandler = () => {
        // console.log(props.id)
       dispatch(listActions.select({
            id : props.id ,
       }))
    }


    return (
        <Fragment>
            <div className={classes.listItems}>
                <button onClick={getIdHandler} className={classes.btn_list}><div style={{ "backgroundColor": color[counter] }} className={classes.square}></div><span>{props.title}</span></button>
                <span className={classes.taskLength}>{props.taskLength}</span>
            </div>
        </Fragment>
    )
};

export default ListItems 

import { Fragment, } from 'react';
import classes from './ListItems.module.css'
import { listActions } from './../store/index'
import { useDispatch } from 'react-redux'

const ListItems = (props) => {

    const dispatch = useDispatch()
    const getIdHandler = () => {
        // console.log(props.id)
        dispatch(listActions.select({
            id: props.id,
        }))
    }

    const deleteListHandler = () => {
        dispatch(listActions.removeItemFromLists(props.id))
    }


    return (
        <Fragment>
            <div className={classes.listItems}>
                <div>
                    <button onClick={getIdHandler} className={classes.btn_list}><div className={classes.square}></div><span>{props.title}</span></button>
                    <button className={classes.btndelete} onClick={deleteListHandler}>delete</button>
                </div>
                <span className={classes.taskLength}>{props.taskLength}</span>
            </div>
        </Fragment>
    )
};

export default ListItems 

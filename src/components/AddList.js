import { useRef, useState } from "react"
import classes from './AddList.module.css'
import { useDispatch } from 'react-redux'
import { listActions } from "../store"
import ListItems from "./ListItems"
import { useSelector } from "react-redux"

let counter = 0

const AddList = () => {

    const [isTouched, setIsTouched] = useState(false)
    const [valid, setValid] = useState(true)
    const enterList = useRef()

    const dispatch = useDispatch()

    const addListHandler = () => {
        setIsTouched(!isTouched)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const enteredList = enterList.current.value

        if (enteredList.trim().length === 0) {
            setValid(false)
        } else {
            // console.log(enteredList)
            setValid(true)
            setIsTouched(false)
            dispatch(listActions.addItemToLists({
                id: Math.random(),
                title: enteredList,
                tasks: [],
            }))
        }
    }

    const formFocusHandler = () => {
        setValid(true)
    }

    const lists = useSelector(state => state.list.lists)
    const listlength = lists.length

    return (
        <div className={classes.upperbox}>
            <div className={classes.outerbox}>
                {lists.map(list => (
                    <ListItems key={list.id} id={list.id} title={list.title} listlength={listlength} counter={counter + 1} taskLength={list.tasks.length}></ListItems>
                ))}
                {isTouched && (
                    <form onFocus={formFocusHandler} className={classes.formbox} onSubmit={onSubmitHandler}>
                        <input className={classes.input} type="text" placeholder="Add New List" ref={enterList} />
                        <div className={classes.buttonbox}>
                            <button className={classes.add} type="submit">Add</button>
                            <button className={classes.cancel}  onClick={addListHandler}>Cancel</button>
                        </div>
                    </form>
                )}
                {!isTouched && <button onClick={addListHandler} className={classes.btn_new}>Add New List</button>}
            </div>
            {!valid && isTouched && <p className={classes.error}>List Name cannot be empty!</p>}
        </div>
    )
}

export default AddList 
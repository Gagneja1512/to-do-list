import { useEffect, useRef, useState } from "react"
import classes from './AddList.module.css'
import { useDispatch } from 'react-redux'
import { listActions } from "../store"
import ListItems from "./ListItems"
import { useSelector } from "react-redux"

const AddList = () => {

    const [isTouched , setIsTouched] = useState(false)
    const [valid , setValid] = useState(true)
    const enterList = useRef()

    const dispatch = useDispatch()

    const addListHandler = () => {
        setIsTouched(!isTouched)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const enteredList = enterList.current.value

        if(enteredList.trim().length === 0){
            setValid(false)
        }else{
            // console.log(enteredList)
            setIsTouched(false)
            dispatch(listActions.addItemToLists({
                id : Math.random() ,
                title : enteredList ,
                tasks : [] ,
            }))
        }
    }

    const lists = useSelector(state => state.list.lists)

    useEffect(() => {
        console.log('changed')
    } , [lists])

    return (
        <div>
            { lists.map(list => (
                <ListItems key={list.id} id={list.id} title={list.title} taskLength={list.tasks.length}></ListItems>
            )) }
            {isTouched && (
                <form onSubmit={onSubmitHandler}>
                    <label>Add new list</label>
                    <input type="text"  ref={enterList} />
                    <button type="submit">Add</button>
                </form>
            )}
            {!valid && isTouched && <p>List Name cannot be empty</p>}
            {isTouched && <button onClick={addListHandler}>Cancel</button>}
            {!isTouched && <button onClick={addListHandler} className={classes.btn_new}>+ Add New List</button>}
        </div>
    )
}

export default AddList 
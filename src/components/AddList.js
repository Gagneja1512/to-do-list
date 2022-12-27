import { useRef, useState } from "react"
import classes from './AddList.module.css'
import { useDispatch } from 'react-redux'
import { listActions } from "../store"
import ListItems from "./ListItems"
import { useSelector } from "react-redux"

let counter = 0 

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
            setValid(true)
            setIsTouched(false)
            dispatch(listActions.addItemToLists({
                id : Math.random() ,
                title : enteredList ,
                tasks : [] ,
            }))
        }
    }

    const lists = useSelector(state => state.list.lists)
    const listlength = lists.length

    return (
        <div>
            { lists.map(list => (
                <ListItems key={list.id} id={list.id} title={list.title} listlength={listlength} counter={counter+1} taskLength={list.tasks.length}></ListItems>
            )) }
            {isTouched && (
                <form onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Add New List" ref={enterList} />
                    <button type="submit">Add</button>
                </form>
            )}
            {!valid && isTouched && <p>List Name cannot be empty!</p>}
            {isTouched && <button onClick={addListHandler}>Cancel</button>}
            {!isTouched && <button onClick={addListHandler} className={classes.btn_new}>+ Add New List</button>}
        </div>
    )
}

export default AddList 
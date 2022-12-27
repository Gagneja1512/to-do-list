import { configureStore, createSlice} from '@reduxjs/toolkit'

const listSlice = createSlice({
    name : 'list' ,
    initialState : {
        lists : [] ,
        listsQuantity : 0 ,
        selectedList : 0 ,
    } ,

    reducers : {
        addItemToLists(state , action) {
            state.listsQuantity++ 
            state.lists.push({
                id : action.payload.id ,
                title : action.payload.title ,
                tasks : [] ,
            })
        } ,
        removeItemFromLists(state , action) {
            const id = action.payload
            state.listsQuantity-- 
            state.lists = state.lists.filter(list => list.id !== id)
        } ,
        addTaskToList(state , action) {
            const id = action.payload.id
            // console.log(id)
            state.lists.find(list => list.id === id).tasks.push({
                taskid : action.payload.taskId ,
                title : action.payload.title ,
            })

            // console.log(current(state.lists))
        } ,
        removeTaskFromList(state , action) {
            const id = action.payload.id
            const taskId = action.payload.taskId
            state.lists.find(list => list.id === id).tasks = state.lists.find(list => list.id === id).tasks.filter(task => task.taskid !== taskId)
        } ,
        select(state , action){
            state.selectedList = action.payload.id 
        }
    }
})

export const listActions = listSlice.actions

const store = configureStore({
    reducer : {
        list : listSlice.reducer ,
    }
})

export default store
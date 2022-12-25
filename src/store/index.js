import { configureStore, createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
    name : 'list' ,
    initialState : {
        lists : [] ,
        listsQuantity : 0 ,
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
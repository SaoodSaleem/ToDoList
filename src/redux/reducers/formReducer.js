import { formTypes } from "../actions/types";
import { v4 as uuid } from "uuid"

const initialState = {
    tasks: localStorage.getItem('list') !== null ? JSON.parse(localStorage.getItem('list')) : []
}

console.log(localStorage.getItem('list'))

export default function(state = initialState, action){
    switch(action.type){
        case formTypes.ADD_TO_TASK:{
            console.log(state.task)
            const newPeron = {
                id: uuid(),
                name: action.payload,
                status: null
            }
            localStorage.setItem("list",JSON.stringify([...state.tasks, newPeron]))
            return{
                ...state,
                tasks: [...state.tasks, newPeron]
            }
        }
        case formTypes.MARK_TASK_COMPLETE:{
            console.log(state.tasks[0].id)
            console.log(action.payload)
            const newTaskList = []
            for(let i = 0; i < state.tasks.length; i++){
                if(state.tasks[i].id == action.payload){
                    state.tasks[i].status = "complete"
                    newTaskList.push(state.tasks[i])
                }else{
                    newTaskList.push(state.tasks[i])
                }
            }
            console.log(newTaskList)
            localStorage.setItem("list",JSON.stringify(newTaskList))
            return{
                ...state,
                task: newTaskList
            }
        }

        case formTypes.REMOVE_TASK:{
            let filteredList = state.tasks.filter(task => task.id != action.payload)
            if(filteredList.length <= 0){
                localStorage.setItem("list",JSON.stringify([]))    
            }else{
                localStorage.setItem("list",JSON.stringify(filteredList))
            }
            return{
                tasks: filteredList
            }
        }
        default:
            return state
    };
}
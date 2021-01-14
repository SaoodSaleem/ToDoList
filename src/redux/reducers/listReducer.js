// import { listTypes } from "../actions/types";
// import store from "../store"

// const initialState = {
//     tasks: JSON.parse(localStorage.getItem('list'))
// }

// export default function(state = initialState, action){
//     switch(action.type){
//         case listTypes.MARK_TASK_COMPLETE:{
//             console.log(state.tasks[0].id)
//             console.log(action.payload)
//             let newTaskList = state.tasks.forEach( task => {
//                 if(task.id == action.payload){
//                     console.log("inside here")
//                     task.status = "complete"
//                 }
//             }
//             )
//             return{
//                 ...state,
//                 task: newTaskList
//             }
//         }

//         case listTypes.REMOVE_TASK:{
//             return{
//                 tasks: state.tasks.filter(task => task.id != action.payload)
//             }
//         }
//         default:
//             return state
//     }
// }
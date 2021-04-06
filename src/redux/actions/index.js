import {formTypes} from "./types"
import {v4} from "uuid"
export const addTask = (value, form) => {
   const newTask = {
       id: v4(),
       name: value,
       status: true
   }
   
   if(localStorage.hasOwnProperty('Added Tasks') == false){
       const localArray = []
       localArray.push(newTask)
       const data = JSON.stringify(localArray)
       localStorage.setItem("Added Tasks", data)
   }
   else{
       const localArray = JSON.parse(localStorage.getItem("Added Tasks"))
       localArray.push(newTask)
       const data = JSON.stringify(localArray)
       localStorage.setItem("Added Tasks", data)
   }

   form.form.push(newTask)
    return dispatch => {
        dispatch({
            type: formTypes.ADD_TASK,
            payload: form.form
        })
    }
}

export const changeStatus = (value, form) => {
    let newList = form.form.map(item => {
        if(item.id == value){
            item.status = !item.status
        }
        return item
    })

    const data = JSON.stringify(newList)
    localStorage.setItem("Added Tasks", data)
    
     return dispatch => {
         dispatch({
             type: formTypes.CHANGE_STATUS,
             payload: newList
         })
     }
 }

 export const deleteTask = (value, form) => {
    let newList = form.form.filter(item => {
        return item.id != value
      })
    
    const data = JSON.stringify(newList)
    localStorage.setItem("Added Tasks", data)
     return dispatch => {
         dispatch({
             type: formTypes.DELETE_TASK,
             payload: newList
         })
     }
 }
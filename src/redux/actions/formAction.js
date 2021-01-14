import { formTypes } from "./types";
import  store  from "../store";

export const addTask = task =>{
    store.dispatch({
        type: formTypes.ADD_TO_TASK,
        payload: task
        }
    )
}

export const completeTask = (taskId) =>{
    store.dispatch({
        type: formTypes.MARK_TASK_COMPLETE,
        payload: taskId
        }
    )
}

export const deleteTask = (taskId) =>{
    store.dispatch({
        type: formTypes.REMOVE_TASK,
        payload: taskId
        }
    )
}
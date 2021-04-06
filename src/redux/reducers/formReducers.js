import {formTypes} from "../actions/types"

const initialState = {
    form: !! localStorage.hasOwnProperty('Added Tasks') == false ? [] : JSON.parse(localStorage.getItem('Added Tasks'))
}


export default (state = initialState, action) =>{
    switch(action.type){
        case formTypes.ADD_TASK:
            return {
                form: action.payload
            }
        case formTypes.CHANGE_STATUS:
            return {
                form: action.payload
            }
        case formTypes.DELETE_TASK:
            return {
                form: action.payload
            }
        default:
             return state
    }

}
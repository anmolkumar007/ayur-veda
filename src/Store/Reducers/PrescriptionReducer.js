const initialState = {
    prescription : null
}

export default function PrescriptionReducer(state=initialState,action){
    if (action.type==='prescription/add'){
        return{
            ...state,prescription:action.payload
        }
    }
    return state;
}
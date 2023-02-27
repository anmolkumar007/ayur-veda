const initialState= {
    medicine: null
}

export default function MedicineReducer(state=initialState,action){
    if(action.type==='medicine/add'){
        return{
            ...state, medicine:action.payload
        }
    }
    return state;
}
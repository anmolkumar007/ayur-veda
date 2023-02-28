import medicineReducer from "./MedicineReducer";
import prescriptionReducer from "./PrescriptionReducer";
import loginReducer from "./LoginReducer";
import {combineReducers} from 'redux';


const ayurVeda = combineReducers({
    medicineReducer,
    prescriptionReducer,
    loginReducer
})

export default ayurVeda;
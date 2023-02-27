import medicineReducer from "./MedicineReducer";
import prescriptionReducer from "./PrescriptionReducer";
import {combineReducers} from 'redux';


const ayurVeda = combineReducers({
    medicineReducer,
    prescriptionReducer
})

export default ayurVeda;
import { useState } from "react"
import {useDispatch} from 'react-redux';
import { addPrescription } from "../Store/Actions/PrescriptionAction";

export default function AddPrescription(){
    const [uploadDate,setUpDate] = useState(new Date().toLocaleDateString());
    const [validDate,setValDate] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();

    const handlePrescriptionButton=()=>{
        const payload={
            uploadDate: uploadDate,
            validationDate : validDate,
            customer:{
                userId: userId
            }
        }
        dispatch(addPrescription(payload));
    }
    return(
        <div className="container">
            <div>
                <label>Upload Date</label>
                <input type='date' value={uploadDate} disabled/>
            </div>
            <div>
                <label>Validation Date</label>
                <input type='date' value={validDate} onChange={event=>setValDate(event.target.value)}
                placeholder='enter validation date' />
            </div>
            <div>
                <label>User ID</label>
                <input type='number' value={userId} onChange={event=>setUserId(event.target.value)}
                placeholder="enter your id"/>
            </div>
            <div>

            </div>

        </div>
    )
}
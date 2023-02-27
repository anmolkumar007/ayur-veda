import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function addPrescription(details){
    const nav= useNavigate();
    axios.post('http://localhost:8080/prescriptions/add',details)
    .then(resp=>{
        alert('Prescription added successfully');
        nav('/');
    })
    .catch(error=> alert('Something Wrong!'))
}
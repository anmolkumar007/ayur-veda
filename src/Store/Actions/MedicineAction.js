import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function addMedicine(medicine){
    return(dispatch)=>{
        return axios.post('http://localhost:8080/medicine/addMedicine',medicine)
        .then(resp=>toast.success('Medicine Added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }))
        .catch(error=>toast.error('Unable to add medicine', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }))
    }
}
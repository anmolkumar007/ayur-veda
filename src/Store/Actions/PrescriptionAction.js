import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function addPrescription(details) {
    const nav = useNavigate();
    axios.post('http://localhost:8080/prescriptions/add', details)
        .then(resp => {
            toast.success('Prescription Added', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            nav('/');
        })
        .catch(error => toast.error('Unable to add prescription', {
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
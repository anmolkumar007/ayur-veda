import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMedicine } from '../Store/Actions/MedicineAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddMed() {
    const [medicine, updateMedicine] = useState({
        mname: '',
        mcost: '',
        cname: '',
        mfd: '',
        expd: '',
        stk: '',
        rate: '',
        mdet: '',
        mtype: '',
        ingrdt: '',
        quant: '',
        category: ''

    })

    const dispatch = useDispatch();



    const handleButton = () => {
        const payload = {
            medicineName: medicine.mname,
            medicineCost: medicine.mcost,
            companyName: medicine.cname,
            manufactureDate: medicine.mfd,
            expiryDate: medicine.expd,
            stock: medicine.stk,
            rating: medicine.rate,
            description: {

                details: medicine.mdet,
                medicineType: medicine.mtype,
                ingredients: medicine.ingrdt,
                quantity: medicine.quant
            },
            category: {
                categoryId: medicine.category
            }
        }

        dispatch(addMedicine(payload));

    }
    return (
        <div className='container'>
            <div className='form-group'>
                <label>Medicine Name</label>
                <input type='text' name='mname' value={medicine.mname} placeholder='enter medicine name'
                    onChange={event => updateMedicine({ ...medicine, mname: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Medicine Cost</label>
                <input type='number' name='mcost' value={medicine.mcost} placeholder='enter medicine cost'
                    onChange={event => updateMedicine({ ...medicine, mcost: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Company Name</label>
                <input type='text' name='cname' value={medicine.cname} placeholder='enter company name'
                    onChange={event => updateMedicine({ ...medicine, cname: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Manufacture Date</label>
                <input type='date' name='mfd' value={medicine.mfd}
                    onChange={event => updateMedicine({ ...medicine, mfd: event.target.value })}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Expiry Date</label>
                <input type='date' name='expd' value={medicine.expd}
                    onChange={event => updateMedicine({ ...medicine, expd: event.target.value })}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Stock</label>
                <input type='number' name='stk' value={medicine.stk} placeholder='enter the value of stock'
                    onChange={event => updateMedicine({ ...medicine, stk: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Rating</label>
                <input type='number' name='rate' value={medicine.rate} placeholder='enter rating'
                    onChange={event => updateMedicine({ ...medicine, rate: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Medicine Details</label>
                <input type='text' name='mdet' value={medicine.mdet} placeholder='enter the details of the medicine'
                    onChange={event => updateMedicine({ ...medicine, mdet: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Type of medicine</label>
                <input type='text' name='mtype' value={medicine.mtype} placeholder='enter the type of the medicine'
                    onChange={event => updateMedicine({ ...medicine, mtype: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Ingredients</label>
                <input type='text' name='ingrdt' value={medicine.ingrdt} placeholder='enter ingredients'
                    onChange={event => updateMedicine({ ...medicine, ingrdt: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Quantity (in gms)</label>
                <input type='text' name='quant' value={medicine.quant} placeholder='enter quantity'
                    onChange={event => updateMedicine({ ...medicine, quant: event.target.value })} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Category</label>
                <select className='form-control'>
                    <option value={medicine.category}>1</option>
                    <option value={medicine.category}>2</option>
                    <option value={medicine.category}>3</option>
                </select>
            </div>
            <button onClick={handleButton} className="btn btn-primary form-control">Add medicine</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}
export default AddMed;
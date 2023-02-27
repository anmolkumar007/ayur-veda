import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../registerApp.css'

function Register() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [usrName, setUName] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [hno, setHno] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pcode, setPCode] = useState('');

    const nav = useNavigate();

    const [validation, setValidation] = useState({});



    const handleRegister = () => {
        let errors = {};


        let pattern = /^[A-Za-z]+[0-9]+$/
        if (!pattern.test(usrName)) errors['unameErr'] = 'Username must start with alphabets and ends with a number'

        setValidation(errors);

        if (Object.keys(errors).length === 0) {
            const payload =
            {

                firstName: fName,
                lastName: lName,
                username: usrName,
                password: password,
                age: age,
                gender: gender,
                email: email,
                phoneNumber: phno,
                address: {
                    houseNumber: hno,
                    street: street,
                    landmark: landmark,
                    city: city,
                    state: state,
                    pinCode: pcode
                }
            }
            axios.post("http://localhost:8080/customer/register", payload)
                .then(resp => {
                    alert('Registered Successfully');
                    nav('/');
                });
        }
    }

    return (
        <div className='container-fluid'>
            <h2>जड़ीबूटी.com</h2>
            <div id='registerMain'>
                <p style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: 'larger' }}>REGISTER YOURSELF</p>
                <div className="form-inline">
                    <label for="fName">First Name &nbsp;</label>
                    <input type="text" name="fName" value={fName} placeholder="Enter your first name"
                        style={{ borderRadius: '10px' }} onChange={event => setFName(event.target.value)} required />
                    &emsp;
                    <label for="lName">Last Name &nbsp;</label>
                    <input type="text" name="lName" value={lName}
                        style={{ borderRadius: '10px' }} placeholder="Enter your last name"
                        onChange={event => setLName(event.target.value)} required />
                </div>
                <div className='form-inline' style={{ marginTop: '20px' }}>
                    <label for='age'>Age &emsp;&emsp;&emsp;&nbsp;</label>
                    <input type='number' name='age' value={age} placeholder='Enter age'
                        style={{ borderRadius: '10px' }}
                        onChange={event => setAge(event.target.value)} required /> &emsp;&emsp;&emsp;&emsp;
                    <label for='gender'>Gender &emsp;</label>
                    <input type='radio' name='gender' value={gender} id='genM'
                        onChange={event => setGender(event.target.value)} /><label for='genM'>Male&emsp;</label>
                    <input type='radio' name='gender' value={gender} id='genF'
                        onChange={event => setGender(event.target.value)} /><label for='genF'>Female</label>
                </div>
                <div className="form-group">
                    <label for="email">Email Address&nbsp;</label>
                    <input type="email" name="email" placeholder="Enter your email address" value={email}
                        style={{ width: '490px', borderRadius: '10px', marginTop: '20px' }}
                        onChange={event => setEmail(event.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label for="phno">Mobile Number&nbsp;</label>
                    <input type="number" name="phno" value={phno} placeholder="Enter your mobile number"
                        style={{ width: '484px', borderRadius: '10px' }}
                        onChange={event => setPhno(event.target.value)}
                        required />
                </div>
                <div className='form-group'>
                    <label for='usrname'>Username &nbsp;</label>
                    <input type='text' name='usrname' value={usrName} placeholder='Enter username'
                        onChange={event => setUName(event.target.value)}
                        style={{ borderRadius: '10px', width: '515px' }} required />
                    {
                        validation.unameErr &&
                        <div style={{ color: 'red' }}>
                            {validation.unameErr}
                        </div>
                    }

                </div>
                <div className='form-group'>
                    <label for='passwd'>Password &nbsp;</label>
                    <input type='password' name='passwd' value={password} placeholder='Enter password'
                        onChange={event => setPassword(event.target.value)}
                        style={{ borderRadius: '10px', width: '519px' }} required />
                </div>
                <div className="form-inline">
                    <label for="hno">House Number &nbsp;</label>
                    <input type="number" name="hno" value={hno} placeholder="Enter your house number"
                        style={{ borderRadius: '10px' }} onChange={event => setHno(event.target.value)} required />
                    &emsp;
                    <label for="street">Street &nbsp;</label>
                    <input type="text" name="street" value={street}
                        style={{ borderRadius: '10px', width: '210px' }} placeholder="Enter street name"
                        onChange={event => setStreet(event.target.value)} required />
                </div>
                <div className="form-inline" style={{ marginTop: '20px' }}>
                    <label for="landmark">Landmark &nbsp;</label>
                    <input type="text" name="landmark" value={landmark} placeholder="landmark"
                        style={{ borderRadius: '10px' }} onChange={event => setLandmark(event.target.value)}
                        required />
                    &emsp;
                    <label for="street">City &nbsp;</label>
                    <input type="text" name="city" value={city}
                        style={{ borderRadius: '10px', width: '260px' }} placeholder="Enter city name"
                        onChange={event => setCity(event.target.value)} />
                </div>
                <div className="form-inline" style={{ marginTop: '20px' }}>
                    <label for="state">State &nbsp;</label>
                    <input type="text" name="state" value={state} placeholder="Enter state"
                        style={{ borderRadius: '10px' }} onChange={event => setState(event.target.value)} required />
                    &emsp;
                    <label for="pincode">Pincode &nbsp;</label>
                    <input type="text" name="pincode" value={pcode}
                        style={{ borderRadius: '10px', width: '265px' }} placeholder="Enter pincode"
                        onChange={event => setPCode(event.target.value)} required />
                </div>
                <button className='btn btn-info' onClick={handleRegister}
                    style={{ marginTop: '20px', width: '595px', borderRadius: '10px' }}>Register</button>
                <p style={{ textAlign: 'center', paddingTop: '10px' }}>Already have an account?<Link to='/'>Login Here</Link></p>
            </div>
        </div>
    )
}

export default Register;
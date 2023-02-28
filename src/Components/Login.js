import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../loginApp.css';
import { LoginAction } from "../Store/Actions/LoginAction";
import { useDispatch, useSelector } from 'react-redux';


function Login() {

    const [uname, setUname] = useState('');
    const [upwd, setUpwd] = useState('');

    const nav = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();

    const loggedIn = useSelector(state=>state.loginReducer.loggedInUser);

    const handleLogin = () => {

        let errors = {};

        if (!uname) errors['uNameErr'] = 'Username can not be empty';
        if (!upwd) errors['uPwdErr'] = 'Please provide password for login'
        if (upwd.length < 8) errors['uPwdLen'] = 'Password length must be atleast 8'

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {

            const payload = {
                username: uname,
                password: upwd
            }
            dispatch(LoginAction(payload))
        }
    }

    return (
        <div className="container">

            <h2>जड़ीबूटी.com</h2>
            <div id="main">
                <h4>LOGIN</h4>
             {  
             loggedIn !==null &&
                loggedIn.role === 'customer' ?
                nav('/customer/dashboard'):
                loggedIn.role === 'admin' ?
                nav('/admin/dashboard'):
                
               <div>    
                <div className="form-group">

                    <input type='text' name='uname' value={uname} placeholder='Enter username'
                        onChange={event => setUname(event.target.value)}
                        style={{ borderRadius: '10px' }} />
                    <div>
                        {
                            formErrors.uNameErr &&
                            <div style={{ color: 'red' }}>
                                {formErrors.uNameErr}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-group">

                    <input type='password' name='upwd' value={upwd} placeholder='Enter password'
                        onChange={event => setUpwd(event.target.value)}
                        style={{ borderRadius: '10px' }} />
                    <div>
                        {
                            formErrors.uPwdErr &&
                            <div style={{ color: 'red' }}>
                                {formErrors.uPwdErr}
                            </div>


                        }
                        {
                            formErrors.uPwdLen &&
                            <div style={{ color: 'red' }}>
                                {formErrors.uPwdLen}
                            </div>
                        }
                    </div>
                </div>


                <div>
                    <button className="btn btn-success" onClick={handleLogin}
                        style={{ textAlign: 'center' }}>Login</button>
                </div>

                <p>Don't have an account, yet? <br /> <Link to='/register'>Register here</Link></p>
                </div>
}
            </div>
            

        </div>
    )
}

export default Login;
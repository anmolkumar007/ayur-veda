import { useNavigate } from "react-router-dom";

function Admin(){

    const nav=useNavigate();
    const myuser = JSON.parse(localStorage.getItem('myuser'));
    myuser.firstName = myuser.firstName.substring(0, 1).toUpperCase() + myuser.firstName.substring(1,)
    myuser.lastName = myuser.lastName.substring(0, 1).toUpperCase() + myuser.lastName.substring(1,)

    const handleLogout=()=>{
        if(myuser!==null){
            localStorage.removeItem("myuser");
            alert("logged out");
            nav('/');
        }
    }

    return(
        <div>
            <h1 style={{textAlign:'center'}}>ADMIN DASHBOARD</h1>
            <h3>{`Welcome, ${myuser.firstName} ${myuser.lastName}`}</h3>
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>

        </div>
    )
}

export default Admin;
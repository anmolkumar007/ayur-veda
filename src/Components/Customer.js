import { useNavigate } from "react-router-dom";

function Customer() {
    const nav = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    myuser.firstName = myuser.firstName.substring(0, 1).toUpperCase() + myuser.firstName.substring(1,)
    myuser.lastName = myuser.lastName.substring(0, 1).toUpperCase() + myuser.lastName.substring(1,)

    const handleLogout = () => {
        if (myuser !== null) {
            localStorage.removeItem("myuser");
            alert("Logged out");
            nav("/");
        }
    }
    return (
        <div>

            <h1 style={{ textAlign: 'center' }}>Customer Dashboard</h1>
            <h4>{`Welcome, ${myuser.firstName} ${myuser.lastName}`}</h4>
            <button onClick={handleLogout} className="btn btn-danger">Log out</button>


        </div>
    )
}

export default Customer;
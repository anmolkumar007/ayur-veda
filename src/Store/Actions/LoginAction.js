import axios from 'axios';

export function LoginAction(details) {
    //const nav = useNavigate();
    return (dispatch) => {
        return axios.post("http://localhost:8080/auth/login", details)
            .then(resp => {
                alert('login successfully');
                dispatch({
                    type: '/login',
                    payload: resp.data
                })
               
            })
            .catch(error => alert(error.response.data))
    }
}

export function logout(){
    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if(myuser!==null){
        localStorage.removeItem('myuser')
        return{
            type: '/logout'
        }
    }

}
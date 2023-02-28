const initialState = {
    loggedInUser : null
}
export default function LoginReducer(state = initialState, action) {

    if (action.type === '/login') {
        const user = action.payload;
        const myObj = {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        }
        localStorage.setItem("myuser", JSON.stringify(myObj));
        return{
            ...state, loggedInUser:myObj
        }
    }

    else if(action.payload==='/logout'){
        return{
            ...state, loggedInUser:null
        }
    }

    return state;

}
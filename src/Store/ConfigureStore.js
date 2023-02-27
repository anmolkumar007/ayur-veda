import {applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import ayurVeda from "./Reducers/RootReducer";

export default function ConfigureStore(){
    return createStore(
        ayurVeda,
        applyMiddleware(thunk)
        
    )
}
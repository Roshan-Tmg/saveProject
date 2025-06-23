import axios from "axios"
import { api, API_BASE_URL } from "../../Config/api";
import { FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_SUCCESS, FOLLOW_USER_FAILURE, FOLLOW_USER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS } from "./ActionType";


export const loginUser = (loginData) => async (dispatch) => {
    try {
        const{data}= await axios.post(`${API_BASE_URL}/auth/signin`, loginData)

        console.log("Login response data:", data);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        dispatch({type: "LOGIN_USER_SUCCESS", payload:data.jwt})
    } catch (error) {
        // console.error("Login error:", error);
        console.log("Login error response:", error.response);
        dispatch({type: "LOGIN_USER_FAILURE", payload: error.message})
        
    }
}




export const registerUser = (registerData) => async (dispatch) => {
    try {
        const{data}= await axios.post(`${API_BASE_URL}/auth/signup`, registerData)

        console.log("Register response data:", data);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        dispatch({type: "REGISTER_USER_SUCCESS", payload:data.jwt})
    } catch (error) {
        // console.error("Login error:", error);
        console.log("Login error response:", error.response);
        dispatch({type: "REGISTER_USER_FAILURE", payload: error.message})
        
    }
}


export const gettUserProfile = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("jwt");
        const{data}= await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
            )
      
        dispatch({type: "GET_USER_PROFILE_SUCCESS", payload:data})
    } catch (error) {
        // console.error("Login error:", error);
        console.log("Login error response:", error.response);
        dispatch({type: "GET_USER_PROFILE_FAILURE", payload: error.message})
        
    }
}


export const findUserById = (userId) => async (dispatch) => {
    try {
        const token = localStorage.getItem("jwt");
        const{data}= await api.get(`/api/users/${userId}`)
            
        console.log("User data by ID:", data);
        dispatch({type: FIND_USER_BY_ID_SUCCESS,
             payload:data})
    } catch (error) {
        // console.error("Login error:", error);
        console.log("Login error response:", error.response);
        dispatch({
            type: FIND_USER_BY_ID_FAILURE
            , payload: error.message})
        
    }
}

export const updateUserProfile = (reqData) => async (dispatch) => {
    try {
        const token = localStorage.getItem("jwt");
        const{data}= await api.put(`/api/users/update`, reqData)
            
        console.log("Update user:", data);
        dispatch({type: UPDATE_USER_SUCCESS,
             payload:data})
    } catch (error) {
        // console.error("Login error:", error);
        console.log("Login error response:", error.response);
        dispatch({
            type: UPDATE_USER_FAILURE
            , payload: error.message})
        
    }
}

export const folowUserAction = (userId) => async (dispatch) => {
    try {
        const token = localStorage.getItem("jwt");
        const{data}= await api.put(`/api/users/${userId}/follow`)
            
        console.log("followed user:", data);
        dispatch({type: FOLLOW_USER_SUCCESS,
             payload:data})
    } catch (error) {
        // console.error("Login error:", error);
        console.log("Login error response:", error.response);
        dispatch({
            type:FOLLOW_USER_FAILURE
            , payload: error.message})
        
    }
}

export const logout = () => async (dispatch) => {
    
    localStorage.removeItem("jwt");
      
        
    dispatch({type: "LOGOUT_USER", payload: null})
}
import axios from "axios"
import { API_BASE_URL } from "../../Config/api";


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

export const logout = () => async (dispatch) => {
    
    localStorage.removeItem("jwt");
      
        
    dispatch({type: "LOGOUT_USER", payload: null})
}
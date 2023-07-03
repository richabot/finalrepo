import * as userService from "../services/userService";
import login from "../services/authService";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_SUCCESS, GET_ERRORS, SAVE_EMAIL_PASSWORD, SET_CURRENT_USER, USER_LOADING } from "./types";
// import { response } from "express";

// Register User
export const registerUser = userData => async dispatch => {

  try {
    console.log(registerUser,"inside action")
    await userService.register(userData);
    window.location = "/login";
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Login - store user token
export const loginUser = userData => async dispatch => {
  try {
    const response = await login(userData.email, userData.password);
    //return
    console.log(response,"response in login user")
    const { data: jwt,status } = await login(userData.email, userData.password);
    console.log(jwt,status,"current status")
    localStorage.setItem("token", jwt);
    // localStorage.token= jwt
   
    // Set token to Auth header
    setAuthToken(jwt);
    // Decode for user data
    const decoded = jwt_decode(jwt);
    console.log(decoded,"decoded ")
    dispatch(saveEmailAndPassword(userData.email,userData.password))
    // alert("done")
    
      // saveEmailAndPassword(userData.email, userData.password);
      // dispatch(saveEmailAndPassword(userData.email, userData.password));
    if(status === 206){
      localStorage.loggedin = false;
      localStorage.setItem("email",userData.email)
      localStorage.setItem("password",userData.password)


      // saveEmailAndPassword(userData.email, userData.password);
    //  alert('we are mving')
      window.location = "/otp";
     
  } else if(status === 200) {
      // localStorage.clear();
    //  saveEmailAndPassword(userData.email, userData.password);
    localStorage.setItem("email",userData.email)
    localStorage.setItem("password",userData.password)
   
      localStorage.loggedin = true;
      window.location="/"
  }

  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// export const getAllData=(data)=>(dispatch)=>{
//   console.log(data,"inside get data")
//   dispatch(saveEmailAndPassword(data))

// }

export const saveEmailAndPassword = (email,password)=>(dispatch) => {
  console.log("in action",email,password)
  dispatch ({
    type: SAVE_EMAIL_PASSWORD,
    payload: {
      email,password
     
    }
  })
};



export const changePassword = async(email, currentPassword, newPassword) =>{
  console.log(email, currentPassword, newPassword,"in action")
  
   
    try {
      console.log("trying ...")
      // Make the API request to change the password
      const response = await fetch('http://localhost:5000/api/users/changepassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, currentPassword, newPassword }),
      }).then(response=>{
        console.log(response,"response")
        if (response.ok) {
          console.log("password saved successfully")
        } else if(response.status==401) {
         console.log("Invalid credentials")
       

        }
        
      })

      
    } catch (error) {
     console.log(error,"error hai")
    
  };
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// User Logout
export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  setAuthToken(false);
  // logout user and turn isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location = "/";
};

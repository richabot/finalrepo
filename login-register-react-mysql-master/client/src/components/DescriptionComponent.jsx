import React, { useState } from 'react'
import  jwtDecode  from 'jwt-decode';
import { changePassword } from '../actions/authActions';
import { useSelector } from 'react-redux';
import { GET_ERRORS } from '../actions/types';
import "../styles/form.css"
const DescriptionComponent = () => {
  const email = localStorage.getItem("email");
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const errorMsg = useSelector((state) => state.errors);




  const handlePasswordChange = async() => {
    const email = localStorage.getItem('email');
    // dispatch(changePassword(email, currentPassword, newPassword));
   console.log("email",email)

   
    try {
   console.log("trying ....")
    const response= await changePassword(email, currentPassword, newPassword);
     console.log(response,"response in profile ama")
      if (errorMsg) {
        let errors = {};
        errors.password = errorMsg;
        // Handle the errors as needed
      }else{
        console.log("success")
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (

  <div>
    <section class="login">
  <div class="login_box">
    <div class="left">
   <div class="top_link"><a href="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt=""/>Return home</a>
      </div>
      <div class="contact">
        <form onSubmit={handlePasswordChange}>
          <h3>Reset Password</h3>
    <input
      type="text"
      placeholder='Current Password'
      value={currentPassword}
      onChange={(e) => setCurrentPassword(e.target.value)}
    />
    <input
      type="text"
      value={newPassword}
      placeholder='New Password'
      onChange={(e) => setNewPassword(e.target.value)}
    />
    <button type="submit" >
      Change
    </button>
            </form>
          </div>
          </div>
          <div className="right">
            <div className="borderright">
              <div className="title">
              <h2 className="righttittle">Reset password</h2>
            </div>
            <div className="paragraphs">
             <h5>Please enter your new password</h5>
            </div>
            </div>
          </div>
      </div>
     
   
    
</section>
  </div>
  )
}

export default DescriptionComponent



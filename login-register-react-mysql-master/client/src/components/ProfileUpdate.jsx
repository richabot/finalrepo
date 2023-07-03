import React, { useEffect, useState } from 'react'

const ProfileUpdate = () => {

//  const email = localStorage.getItem("email")
//  const [userDetails, setUserDetails] = useState(null);
 const email = localStorage.getItem('email');
//  const [userDetails, setUserDetails] = useState(null);
 const [updatedDetails, setUpdatedDetails] = useState(null);
 useEffect(() => {
   const fetchUserDetails = async () => {
     try {
       const response = await fetch(`http://localhost:5000/api/users/data/${email}`);
       const data = await response.json();
       console.log(data,"sucessd data")
       setUpdatedDetails(data);
     } catch (error) {
       console.log(error,"error");
     }
   };

   fetchUserDetails();
 }, [email]);

 const handleChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("handlesubmit")
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/profile/profileUpdate', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });
      const data = await response.json();
      console.log('Data updated successfully:', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div>
        <h2>Profile Update</h2>
        {console.log(updatedDetails,"user details")}
        
      {updatedDetails && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={updatedDetails.email} disabled />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={updatedDetails.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={updatedDetails.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={updatedDetails.lastName}
              onChange={handleChange}
            />
          </div>
         
          <button type="submit">Update</button>
        </form>
      )}
        </div>

   
  )
}

export default ProfileUpdate
import React, { useEffect } from 'react'
import { getAllData } from '../actions/authActions'
import { useDispatch, useSelector } from 'react-redux'

const Reduxcheck = () => {
  
    // const email = useSelector((state)=>state.auth)
    const email = useSelector((state) => state.auth);
    console.log("response from useselctor",email)

    useEffect(() => {
        console.log("email from useele",email)
    }, [])
    
  
  return (
    <div>Reduxcheck
        {/* <button onClick={handlesubmit}>Send</button> */}
    </div>
  )
}

export default Reduxcheck
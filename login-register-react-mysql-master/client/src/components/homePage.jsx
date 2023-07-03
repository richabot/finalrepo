import React from "react";
import { useSelector } from "react-redux";

const homePage = ({ user }) => {
  
  // const email = useSelector((state)=>state.auth.email)
  return (
    <div>
      <main role="main" className="text-center inner cover">
        {user ? <h2>Welcome {user.username}!</h2> : <h2>Welcome</h2>}
        <p className="lead">
         
        </p>
      </main>
    </div>
  );
};

export default homePage;

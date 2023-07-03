// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import Joi from "joi-browser";
// import Form from "./common/form";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../actions/authActions";

// class LoginForm extends Form {
//   state = {
//     data: {
//       email: "",
//       password: ""
//     },
//     errors: {}
//   };

//   schema = {
//     email: Joi.string()
//       .required()
//       .email()
//       .label("Email"),
//     password: Joi.string()
//       .required()
//       .label("Password")
//   };

//   doSubmit = async () => {
//     // Call the server
//     try {
//       await this.props.loginUser(this.state.data);
//       const errorMsg = this.props.errors;
//       console.log(errorMsg);
//       if (errorMsg) {
//         let errors = {};
//         errors.password = errorMsg;
//         this.setState({ errors });
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div className="container row">
//           <div className="col-6">
//             <h1>Login</h1>
//             <form onSubmit={this.handleSubmit}>
//               {this.renderInput("email", "Email", "text")}
//               {this.renderInput("password", "Password", "password")}
//               {this.renderButton("Login")}
//             </form>
//             <br />
//             <p>
//               Forgot your password?
//               <br />
//               <NavLink to="users/reset_password">Reset here. </NavLink>
//             </p>
//           </div>
//           <div className="col-6" />
//         </div>
//       </div>
//     );
//   }
// }

// LoginForm.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.string.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(LoginForm);

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import "../styles/form.css"
class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    // Call the server
    try {
      await this.props.loginUser(this.state.data);
      const errorMsg = this.props.errors;
      console.log(errorMsg);
      if (errorMsg) {
        let errors = {};
        errors.password = errorMsg;
        this.setState({ errors });
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
   
      <div>
        <section class="login">
          <div class="login_box">
            <div class="left">
           <div class="top_link"><a href="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt=""/>Return home</a>
              </div>
              <div class="contact">
                <form onSubmit={this.handleSubmit}>
                  <h3>SIGN IN</h3>
                        {this.renderInput("email", "Email", "text")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderButton("Login")}
                    </form>
                  </div>
                  </div>
                  <div className="right">
                    <div className="borderright">
                      <div className="title">
                      <h2 className="righttittle">Welcome Page</h2>
                    </div>
                    <div className="paragraphs">
                     <h5>Please Sign In to continue</h5>
                    </div>
                    </div>
                  </div>
              </div>
             
           
            
        </section>
</div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);





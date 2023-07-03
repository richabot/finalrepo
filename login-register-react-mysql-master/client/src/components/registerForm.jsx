// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Form from "./common/form";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { registerUser } from "../actions/authActions";

// class RegisterForm extends Form {
//   state = {
//     data: {
//       username: "",
//       password: "",
//       email: ""
//     },
//     errors: {}
//   };

//   schema = {
//     username: Joi.string()
//       .required()
//       .label("Username"),
//     email: Joi.string()
//       .required()
//       .email()
//       .label("Email"),
//     password: Joi.string()
//       .required()
//       .min(5)
//       .label("Password")
//   };

//   doSubmit = async () => {
//     try {
//       await this.props.registerUser(this.state.data);
//       const errorMsg = this.props.errors;
//       if (errorMsg) {
//         let errors = {};
//         errors.username = errorMsg;
//         this.setState({ errors });
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   };

//   render() {
//     return (
    

//       <body>
//         <section class="login">
//           <div class="login_box">
//             <div class="left">
//               <div class="top_link"><a href="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</a>
//               </div>
//               <div class="contact">
//                 <form onSubmit={this.handleSubmit}>
//                   <h3>SIGN UP</h3>
//              {this.renderInput("username", "Username", "text")}
//              {this.renderInput("email", "Email", "text")}
//              {this.renderInput("password", "Password", "password")}
//              {this.renderButton("Register")}
//                 </form>
//               </div>
//             </div>
//             <div className="right">
//             <div className="borderright">
//                       <div className="title">
//                       <h2 className="righttittle">Register Page</h2>
//                     </div>
//                     <div className="paragraphs">
//                      <h5>Please verify your Email before login</h5>
//                     </div>
//                     </div>
//             </div>
//           </div>



//         </section>
//       </body>

//     );
//   }
// }

// RegisterForm.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.string.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(RegisterForm);


import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      firstName:"",
      lastName:"",
      password: "",
      email: ""
    },
    errors: {}
 
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    firstName: Joi.string()
      .required()
      .min(2)
      .label("FirstName"),
    lastName: Joi.string()
      .required()
      .min(2)
      .label("LastName"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      console.log(this.state.data,"submitng data to backend register")
      await this.props.registerUser(this.state.data);
      const errorMsg = this.props.errors;
      
      if (errorMsg) {
         const fieldName = errorMsg.split(" ")[0].replace(/"/g, "");;
       
        // const fieldName = errorMsg.split(" ")[0] ;
        let errors = {};
        console.log(fieldName,"text t")
       console.log(fieldName == "firstName","true or dalse")
      
        if(fieldName == "username")
        {
          errors.username = errorMsg;
        }
        else if(fieldName == "firstName")
        {
          errors.firstName = errorMsg;
        }
        else if(fieldName == "password")
        {
          errors.password = errorMsg;
        }
        else if(fieldName == "lastName")
        {
          errors.lastName = errorMsg;
        }
        else if(fieldName == "email"){
          errors.email = errorMsg;
           }
           else{
            errors.email = errorMsg;
           }
        // errors.firstName = errorMsg;

        // errors[fieldName] = errorMsg;
       
      
    console.log(typeof(errors.username),"type of username")
    console.log(typeof(errors[fieldName]),"type of fieldname")
        // console.log(error,"error in registration")
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
              <div class="top_link"><a href="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</a>
              </div>
              <div class="contact">
                <form onSubmit={this.handleSubmit}>
                  <h3>SIGN UP</h3>
             {this.renderInput("username", "Username", "text")}
             {this.renderInput("firstName", "FirstName", "text")}
             {this.renderInput("lastName", "LastName", "text")}
             {this.renderInput("email", "Email", "text")}
             {this.renderInput("password", "Password", "password")}
             {this.renderButton("Register")}
                </form>
              </div>
            </div>
            <div className="right">
            <div className="borderright">
                      <div className="title">
                      <h2 className="righttittle">Register Page</h2>
                    </div>
                    <div className="paragraphs">
                     <h5>Please verify your Email before login</h5>
                    </div>
                    </div>
            </div>
          </div>



        </section>
      </div>

    );
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterForm);



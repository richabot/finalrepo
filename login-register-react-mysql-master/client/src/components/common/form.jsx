import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import "../../styles/button.css"
class Form extends Component {
 
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    console.log("validate",name);
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  // handleChange = ({ currentTarget: input }) => {
  //   const errors = { ...this.state.errors };
  //   const errorMessage = this.validateProperty(input);
  //   console.log("check in handle change",errorMessage,errors[input.name])
  //   if (errorMessage) errors[input.name] = errorMessage;
  //   else delete errors[input.name];

  //   const data = { ...this.state.data };
  //   data[input.name] = input.value;
  //   console.log("orignal data",data)
  //   this.setState({ data, errors });
  // };
  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    
    if (errorMessage) {
      errors[name] = errorMessage;
    } else {
      delete errors[name];
    }
  
    const data = { ...this.state.data };
    data[name] = value;
  
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary button-28">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    console.log("rendeirng input",errors,errors[name])
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;

import React, { Component } from "react";
import "../css/contact.css"
import Confirmation from '../components/animations/confirmation.js'
import Footer from '../components/Footer.js'
import Fade from 'react-reveal/Fade';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      message: null,
      sent: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        sent: false,
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
              --SUBMITTING--
              First Name: ${this.state.firstName}
              Last Name: ${this.state.lastName}
              Email: ${this.state.email}
              Message: ${this.state.message}
            `);

      const serviceId = 'service_n0fdjzj'
      const templateId = 'template_4omxg4s';

      this.sendFeedback(serviceId, templateId, { message_html: this.state.message, first_name: this.state.firstName, last_name: this.state.lastName, reply_to: this.state.email })

      this.setState({
        sent: !this.state.sent
      })


    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  sendFeedback(serviceId, templateId, variables) {
    window.emailjs.send(serviceId, templateId, variables)
      .then(res => {
        console.log('Email successfully sent!')
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))

  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "message":
        formErrors.message =
          value.length < 1 ? "Minimum 1 character required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }
      //, () => console.log(this.state)
    );
  };

  render() {
    const { formErrors } = this.state;
    // console.log(this.state.sent)
    return (
      <div className='container-contact'>
        <Fade left>
          <div className='wrapper-contact'>
            {!this.state.sent ? (
              <div className="form-wrapper">
                <h1>Contact</h1>
                <p>Please, complete the following form and we will get in touch with you as soon as possible.</p>
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className={formErrors.firstName.length > 0 ? "error" : null}
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                      <span className="errorMessage">{formErrors.firstName}</span>
                    )}
                  </div>
                  <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className={formErrors.lastName.length > 0 ? "error" : null}
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                      <span className="errorMessage">{formErrors.lastName}</span>
                    )}
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      className={formErrors.email.length > 0 ? "error" : null}
                      placeholder="Email"
                      type="email"
                      name="email"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className={formErrors.message.length > 0 ? "error" : null}
                      placeholder="Message"
                      type="text"
                      rows="8"
                      name="message"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.message}</span>
                    )}
                  </div>

                  <div className="createAccount">
                    <button type="submit">Send</button>
                    {/* <small>Already Have an Account?</small> */}
                  </div>
                </form>
              </div>
            )
              :

              <Confirmation />}
          </div>
        </Fade>
        <Footer />
      </div>
    )
  }

}

export default Contact
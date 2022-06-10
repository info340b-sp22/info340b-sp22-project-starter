import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form() {

  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ID, setID] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handleID = (e) => {
    setID(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };


// Showing success message
  const successMessage = () => {
  return (
    <div
      className="success"
      style={{display: submitted ? '' : 'none'}}>
      <h1>User {name} successfully registered!!</h1>
      <Link to= {"/UserLogin/" + name}>
          <button className="btn nxt-btn">Continue</button>
      </Link>
    </div>
  );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{display: error ? '' : 'none'}}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="labelName">Name</label>
        <input onChange={handleName} className="inputName"
        value={name} type="text" />

        <label className="labelEmail">Email</label>
        <input onChange={handleEmail} className="inputEmail"
        value={email} type="email" />

        <label className="labelID">Hysky ID(Optional)</label>
        <input onChange={handleID} className="inputID"
        value={ID} type="Hysky ID" />

        <button onClick={handleSubmit} className="btn" type="submit">Sign up/Log in</button>
      </form>
    </div>
  );
}
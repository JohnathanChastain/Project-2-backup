import React, { useState } from 'react';
import errorPage from '../../pages/error';

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      if (inputType === "email") {
        setEmail(inputValue);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!email ||  !userPassword) {
      
        return;
      }
      // Reset the form fields
      setEmail("");
      setUserPassword("");
    };
    return (
      <section>
        <h2>Login to start a list!</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <textarea
              name="password"
              value={userPassword}
              onChange={handleInputChange}
            />
          </div>
          {/* {TODO: Render error page} */}
          <button type="submit">Submit</button>
        </form>
      </section>
            );
          };

export default About;
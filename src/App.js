import React, { useState } from "react";
function App() {
  const [formdata, setFormdata] = useState();
  return (
    <form>
      <div>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" placeholder="Name" required />
        </label>
        <p></p>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" placeholder="Email" required />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="checkbox">
          checkbox:
          <input type="checkbox" id="consent" />
        </label>
      </div>
      <label htmlFor="submit">
        <button value="submit">Sign up</button>
      </label>
    </form>
  );
}

export default App;

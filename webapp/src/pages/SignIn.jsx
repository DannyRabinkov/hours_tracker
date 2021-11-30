import React from "react";
import { validateSignIn } from "../helpers/userHelper.js";

export function SignIn() {
  let handleClick = (e) => {
    e.preventDefault();
    let res = validateSignIn();
    if (res.success) {
      alert("redirect to time page / admin panel by res.user.role");
    }
  };

  return (
    <div>
      <h1>Sign-In</h1>
      <form
        onSubmit={(e) => {
          handleClick(e);
        }}
      >
        <input type="text" maxLength="10" id="user-phone" required />
        <input
          type="password"
          minLength="4"
          maxLength="50"
          id="user-pass"
          required
        />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import React from "react";
import Main from "./pages/Main";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLogged] = useState(false);

  return (
    <div>
      {!isLoggedIn && (
        <SignIn getLogged={(isLoggedIn) => setLogged(isLoggedIn)} />
      )}
      {isLoggedIn && <Admin />}
      <Main />
    </div>
  );
}

export default App;

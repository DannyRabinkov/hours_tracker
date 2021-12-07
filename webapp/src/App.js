import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import React from "react";
import Main from "./pages/Main";
import { useState } from "react";

function App() {
  const [isAdminLoggedIn, setLogged] = useState(false);

  return (
    <div>
      {!isAdminLoggedIn && (
        <SignIn getLogged={(isAdminLoggedIn) => setLogged(isAdminLoggedIn)} />
      )}
      {isAdminLoggedIn && <Admin />}
      {!isAdminLoggedIn && <Main />}
    </div>
  );
}

export default App;

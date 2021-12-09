import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import React from "react";
import Main from "./pages/Main";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isAdminLoggedIn, adminOnly] = useState(false);
  const [isLoggedIn, empsOnly] = useState(false);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <SignIn
              logEmployee={(isLoggedIn) => empsOnly(isLoggedIn)}
              logAdmin={(isAdminLoggedIn) => adminOnly(isAdminLoggedIn)}
            />
          )}
        />
        <Route
          exact
          path="/admin"
          component={() => <Admin adminOnly={isAdminLoggedIn} />}
        />
        <Route
          exact
          path="/main"
          component={() => <Main empsOnly={isLoggedIn} />}
        />
        {/* <Route exact path="*" component={Admin} /> */}
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Landing/Login";
import PasswordRecovery from "./pages/Landing/PasswordRecovery";
import FirstAccess from "./pages/Landing/FirstAccess";

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/login' exact component={Login} />
      <Route path='/recuperarsenha' exact component={PasswordRecovery} />
      <Route path='/primeiroacesso' exact component={FirstAccess} />
    </BrowserRouter>
  );
}

export default Routes;

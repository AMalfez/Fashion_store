import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../css/LoginPopup.css';
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginPage">
    <div className="login__container">
      <h2>Welcome back!</h2>
    <Button variant="primary" className="login__button" onClick={() => loginWithRedirect()}>Log In</Button>
  </div>
  </div>
  );
};

export default LoginButton;
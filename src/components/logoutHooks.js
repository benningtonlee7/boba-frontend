import React from "react";
import { useGoogleLogout } from "react-google-login";
import { Cookies } from "react-cookie";
import "./login.css";
import GoogleIcon from "../assets/google.svg"


const clientId =
  "678044777066-144gde2c4fthh7vtojoj75oj8rf8krir.apps.googleusercontent.com";

function LogoutHooks({ setSignedIn }) {
  const cookie = new Cookies();

  const onLogoutSuccess = () => {
    console.log("Logged out succe1ssfully!");
    alert('Logged out Successfully!');
    cookie.remove("email");
    setSignedIn(false);
  };

  const onFailure = res => {
    console.log("Login failed: res:", res);
    // alert(`Failed to login. `);
  };

  const { signOut } = useGoogleLogout({
    onLogoutSuccess,
    onFailure,
    clientId
  });

  return (
    <button onClick={signOut} className="button">
      <img src={GoogleIcon} alt="google login" className="icon"></img>

      <span className="buttonText">Logout</span>
    </button>
  );
}

export default LogoutHooks;
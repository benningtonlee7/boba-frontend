import React from "react";
import { useGoogleLogin } from "react-google-login";
import "./login.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";
import GoogleIcon from "../assets/google.svg"

// refresh token
// import { refreshTokenSetup } from "../../utils";

const clientId =
  "1029189840786-4j07jl0eal7jusjrp4oaoic49ok9ujil.apps.googleusercontent.com";

function LoginHooks({ setSignedIn, createChatUser, setUni }) {

  const cookie = new Cookies();
  const onSuccess = async res => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully! Welcome ${res.profileObj.givenName}`
    );
    let {email, familyName, givenName} = res.profileObj;

    let userName = email.split("@")[0];
    cookie.set("first_name", givenName);
    cookie.set("last_name", familyName);
    cookie.set("email", email)
    setSignedIn(true);
    // Create users
    // let response = await axios.get(
    //   `${process.env.REACT_APP_API_HOST}/users/${uni}`
    // );
    // const { data = [] } = response;
    // if (!data.length) {
    //   history.push("/user/update");
    // }
    // refreshTokenSetup(res);

  };

  const onFailure = res => {
    console.log("Login failed: res:", res);
    // alert(`Failed to login. `);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true
  });

  return (
    <button onClick={signIn} className="button">
      <img src={GoogleIcon} alt="google login" className="icon"></img>

      <span className="buttonText">Login</span>
    </button>
  );
}




export default LoginHooks;
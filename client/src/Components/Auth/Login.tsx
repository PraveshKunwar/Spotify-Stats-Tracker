import React from "react";
import SpotifyURL from "./SpotifyURL";
import LoginPage from "../Styles/LoginPage.scss";
import LoginButton from "../Styles/LoginButton";
import Img from "../images/spotify.jpg";
import LandingHeader from "../Styles/LandingHeader";
import Author from "../Styles/Author";

const Login = () => {
  return (
    <div className="login?_with?_account?" style={LoginPage}>
      <div className="flex-login-image">
        <img src={Img} alt="banner_spotify" className="banner"></img>
      </div>
      <br></br>
      <div className="author_creds">
        <LandingHeader className="landing_header">
          Welcome to Spotify Stats Tracker.
        </LandingHeader>
        <Author className="author">By: Pravesh Kunwar</Author>
      </div>
      <div className="flex_login_button">
        <LoginButton as="a" href={SpotifyURL} className="font_login">
          Log in with Spotify
        </LoginButton>
      </div>
    </div>
  );
};

export default Login;

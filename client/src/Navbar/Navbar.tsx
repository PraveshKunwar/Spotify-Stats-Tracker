import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/More";
import styles from "../Components/Styles/Navbar.scss";

//@ts-ignore
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Personal from "../Components/User/Profile/Personal";
import Playlists from "../Components/User/Profile/Playlists";
import More from "../Components/User/Profile/More";

import Nav from "../Components/Styles/Nav";

const Navbar: React.FC = () => {
  return (
    <Router>
      <Nav>
        <div className="navbar">
          <div className="flex-bar" style={styles}>
            <div className="account">
              <AccountCircleIcon className="icon" fontSize="large" />
              <br></br>
              <NavLink to="/" className="nav-links">
                Account
              </NavLink>
            </div>
            <div className="playlists">
              <PlaylistPlayIcon className="icon" fontSize="large" />
              <br></br>
              <NavLink to="/playlists" className="nav-links">
                Playlists
              </NavLink>
            </div>
            <div className="more">
              <MoreIcon className="icon" fontSize="large" />
              <br></br>
              <NavLink to="/more" className="nav-links">
                More
              </NavLink>
            </div>
          </div>
        </div>
      </Nav>
      <Switch>
        <Route path="/">
          <Personal />
        </Route>
        <Route path="/playlists">
          <Playlists />
        </Route>
        <Route path="/more">
          <More />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;

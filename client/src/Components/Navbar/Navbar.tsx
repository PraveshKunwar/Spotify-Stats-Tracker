import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/More";
import styles from "../Styles/Sass/Navbar.scss";

//@ts-ignore
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Personal from "../User/Profile/Personal";
import Playlists from "../User/Profile/Playlists";
import More from "../User/Profile/More";
import Artist from "../User/Profile/Artist";

import Nav from "../Styles/Nav";

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
        <Route path="/" exact>
          <Personal />
        </Route>
        <Route path="/playlists">
          <Playlists />
        </Route>
        <Route path="/more">
          <More />
        </Route>
        <Route path="/artist/:id">
          <Artist />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;

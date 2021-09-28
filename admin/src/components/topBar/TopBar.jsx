import { Language, NotificationsNone, Settings, ArrowDropDown } from "@material-ui/icons"
import "./topBar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

const TopBar = () => {
    const { user, dispatch } = useContext(AuthContext);

    return (
        <div className="top-bar">
            <div className="top-bar-wrapper">
                <div className="top-left">
                    <Link to="/">
                        <span className="logo">Netflix ADMIN</span>
                    </Link>
                </div>
                <div className="top-right">
                    <div className="top-bar__icon-container">
                        <NotificationsNone />
                        <span className="top__icon-badge">2</span>
                    </div>
                    <div className="top-bar__icon-container">
                        <Language />
                        <span className="top__icon-badge">2</span>
                    </div>
                    <div className="top-bar__icon-container">
                        <Settings />
                    </div>
                    <img 
                    src={user.profilePicture || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} 
                    alt="" 
                    className="top__avatar" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span className="profile_span">Settings</span>
                            <span className="profile_span" onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar

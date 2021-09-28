import "./navbar.scss"
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext"
import { logout } from "../../context/authContext/AuthActions"

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const {user, dispatch} = useContext(AuthContext);

    window.onscroll = () => {
        setIsScroll(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }

    return (
        <div className={isScroll ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    </Link>
                    <Link to="/">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series">
                        <span className="navbar__main-links">Series</span>
                    </Link>
                    <Link to="/movies">
                        <span className="navbar__main-links">Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src={user.profilePicture || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar


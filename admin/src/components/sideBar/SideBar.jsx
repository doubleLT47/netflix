import {
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  PlayCircleOutline,
  Timeline,
  TrendingUp,
  WorkOutline,
  List,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sideBar.css";
import { useState } from "react";

const SideBar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="side-bar">
      <div className="side-bar-wrapper">
        <div className="side-bar__menu">
          <div className="side-bar--titles">Dashboard</div>
          <div className="side-bar__list">
            <Link to="/">
              <div
                className={
                  active === "home"
                    ? "side-bar__list--item active"
                    : "side-bar__list--item"
                }
                onClick={() => setActive("home")}
              >
                <LineStyle className="side-bar__icon" />
                Home
              </div>
            </Link>
          </div>
        </div>
        <div className="side-bar__menu">
          <div className="side-bar--titles">Quick Menu</div>
          <div className="side-bar__list">
            <Link to="/users">
              <div
                className={
                  active === "users"
                    ? "side-bar__list--item active"
                    : "side-bar__list--item"
                }
                onClick={() => setActive("users")}
              >
                <PermIdentity className="side-bar__icon" />
                Users
              </div>
            </Link>
            <Link to="/movies">
              <div
                className={
                  active === "movies"
                    ? "side-bar__list--item active"
                    : "side-bar__list--item"
                }
                onClick={() => setActive("movies")}
              >
                <PlayCircleOutline className="side-bar__icon" />
                Movies
              </div>
            </Link>
            <Link to="/lists">
              <div
                className={
                  active === "lists"
                    ? "side-bar__list--item active"
                    : "side-bar__list--item"
                }
                onClick={() => setActive("lists")}
              >
                <List className="side-bar__icon" />
                Lists
              </div>
            </Link>
            <div className="side-bar__list--item">
              <BarChart className="side-bar__icon" />
              Reports
            </div>
          </div>
        </div>
        <div className="side-bar__menu">
          <div className="side-bar--titles">Notifications</div>
          <div className="side-bar__list">
            <div className="side-bar__list--item">
              <MailOutline className="side-bar__icon" />
              Mails
            </div>
            <div className="side-bar__list--item">
              <DynamicFeed className="side-bar__icon" />
              Feedback
            </div>
            <div className="side-bar__list--item">
              <ChatBubbleOutline className="side-bar__icon" />
              Messages
            </div>
          </div>
        </div>
        <div className="side-bar__menu">
          <div className="side-bar--titles">Staff</div>
          <div className="side-bar__list">
            <div className="side-bar__list--item">
              <WorkOutline className="side-bar__icon" />
              Manage
            </div>
            <div className="side-bar__list--item">
              <Timeline className="side-bar__icon" />
              Analytics
            </div>
            <div className="side-bar__list--item">
              <Report className="side-bar__icon" />
              Reports
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

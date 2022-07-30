import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";
import { useState, useEffect } from "react";
import axios from "axios";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "https://luannt201mernnetflixclone.herokuapp.com/api/users?new=true",
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widget-sm">
      <span className="widget-sm--title">New members</span>
      <ul className="widget-sm__list">
        {newUsers.map((user) => (
          <li key={user._id} className="widget-sm__list--item">
            <img
              src={
                user.profilePicture ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widget-sm-img"
            />
            <div className="widget-sm-user">
              <span className="widget-sm-username">{user.username}</span>
              <span className="widget-sm-user--job">{user.email}</span>
            </div>
            <button className="widget-sm-button">
              <Visibility className="widget-sm__icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;

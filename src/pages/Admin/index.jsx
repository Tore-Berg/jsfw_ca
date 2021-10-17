import React from "react";
import Heading from "../../components/Heading";
import { useHistory } from "react-router";

const Admin = () => {
  let history = useHistory();
  const isLoggedin = localStorage.getItem("token");
  if (!isLoggedin) {
    history.push("/login");
  }
  const logout = () => {
    if (logout) {
      window.confirm("Are you sure you want to log out?");
    }
    localStorage.removeItem("token");
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  };
  console.log(isLoggedin);
  return (
    <div>
      <Heading title="Admin" />
      <button className="btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Admin;

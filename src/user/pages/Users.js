import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Bob Gustafson",
      image:
        "https://lh4.googleusercontent.com/-anbU0gkIlZo/AAAAAAAAAAI/AAAAAAAAABo/2oLoyiVEUGc/photo.jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

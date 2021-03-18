import React from "react";

const UserContext = React.createContext({
  id: "",
  givenName: "",
  email: "",
  googleId: "",
  events: [],
});

export default UserContext;

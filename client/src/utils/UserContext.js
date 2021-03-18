import React from "react";

const UserContext = React.createContext({
    id: "",
    givenName: "",
    email: "",
    googleId: ""
});

export default UserContext;

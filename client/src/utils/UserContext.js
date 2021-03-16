import React from "react";

const UserContext = React.createContext({
    id: "",
    firstName: "",
    email: "",
    googleId: ""
});

export default UserContext;

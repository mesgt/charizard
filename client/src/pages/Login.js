import React from "react";
import FormContainer from "../components/FormContainer/formpage";

function Login(props) {
    return (
        <FormContainer userInfo={props.userInfo} />
    )
} 

export default Login;
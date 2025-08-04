import React from "react";
import { useContext } from "react"
import UserContext from "../../UserContext";

export default function WelcomeUser() {
    const userMessage = useContext(UserContext);
    return <h1>Welcome, {userMessage}, Thanks for joining our dev community!</h1>
}

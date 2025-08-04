import React from "react";
import { useContext } from "react";

import UserContext from '../../UserContext';

export default function Cart() {

    const user = useContext(UserContext)

    return <div>User's Cart - {user}</div>;
}

import React from "react";
import { useState, useContext } from "react";
import Montext from "../context/userContext";

const Login = () => {
    let [data, setData] = useState({
        firstName: "",
        lastName: ""
    })
    let { details } = useContext(Montext)
    return (
        <div>
            <h2>Login</h2>
            <h3>{details.lastName}</h3>
            <input type="text" value={data.firstName} placeholder="fname" onChange={(e) => setData({ ...data, firstName: e.target.value })} />
            <input type="text" value={data.lastName} placeholder="lname" onChange={(e) => setData({ ...data, lastName: e.target.value })} />
        </div>
    )

}
export default Login

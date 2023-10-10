import React, { useState } from "react";
import Montext from "./userContext";

const Provider = ({ children }) => {
    let [details, setDetails] = useState({
        firstName: "deepesh",
        lastName: "rajdev"
    })
    return (
        <Montext.Provider value={{
            details, setDetails
        }}>
            {children}
        </Montext.Provider>
    )
}
export default Provider
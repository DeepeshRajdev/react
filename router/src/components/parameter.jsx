import { use } from "express/lib/router";
import React from "react";
import { useParams } from "react-router-dom";
const Parameter = () => {
    const { imp } = useParams();
    return <h1 className="teaxt-white">your parameter is {imp}</h1>
}
export default Parameter
import { useState } from "react";

function Heading(props) {
    return (
        <h1 className="p-4">{props.children}</h1>
    )
}
function Button({ color, setBg }) {
    function handleClick() {
        setBg(color);
    }
    return (
        <>
            <button className="p-3 m-3 bg-pink-300 text-slate-950 rounded-xl" onClick={handleClick}>
                {color}
            </button>
        </>
    )
}

function App() {

    let [count, setCount] = useState(0);
    let [bg, setBg] = useState("rgb(43,42,51)");
    let deeps = {
        padding: "10px",
        margin: "10px",
        border: "1px solid pink",
        color: "rgb(43,42,51)",
        backgroundColor: "pink"
    };
    return (
        <div style={
            {
                width: "100%",
                minHeight: "100vh",
                padding: "0px",
                margin: "0px",
                backgroundColor: bg,
                color: "pink"
            }
        }>
            <Heading>
                State:Components memory
            </Heading>
            <h2 className="p-4">Counter : {count}</h2>
            <button className="rounded-xl" style={deeps} onClick={() => count < 20 && setCount(count + 1)}>increase</button>
            <button className="rounded-xl" style={deeps} onClick={() => count > 0 && setCount(count - 1)}>decrease</button>
            <button className="rounded-xl" style={deeps} onClick={() => setCount(0)}>reset</button>
            <h1 className="p-3">change your background</h1>
            <Button color="red" setBg={setBg} />
            <Button color="black" setBg={setBg} />
            <Button color="blue" setBg={setBg} />
        </div>
    )
}
export default App
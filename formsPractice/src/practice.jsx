import { useState } from "react";
let initial = [0, 0, 0, 0, 0];
export default function Counters() {
    let [counters, setCounters] = useState(initial);
    function increment(i) {
        setCounters((prv) => {
            return [...prv.map((item, ind) => {
                if (ind === i) return item + 1;
                return item;
            })]
        })
    }
    return (
        <>
            <ul>
                {
                    counters.map((item, ind) => {
                        return (<li key={ind}>{item} <button onClick={() => {
                            increment(ind);
                        }}>increase</button></li>)
                    })
                }
            </ul>
        </>
    )

}
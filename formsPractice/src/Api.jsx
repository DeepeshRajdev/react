import { useState, useEffect } from "react";
export default function Modi() {
    let url = "https://api.github.com/users/";
    let [name, SetName] = useState("DeepeshRajdev");
    let [ready, setReady] = useState(true);
    let [details, setDetails] = useState({
        firstName: "DeepeshRajdev",
        photo: null,
        err: null
    });
    useEffect(
        () => {
            Searching()
        }, [ready]
    )
    function Searching() {
        fetch(`${url}${name}`)
            .then(response => response.json())
            .then(
                (answer) => {
                    setDetails(
                        {
                            ...details,
                            firstName: answer.login,
                            photo: answer.avatar_url
                        }
                    )
                    setReady(false);

                }
            )
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" placeholder="name" id="name" value={name} onChange={(e) => {
                    SetName(e.target.value);
                }} />
                <button onClick={() => setReady(true)}>search</button>
            </form>
            <h1>{details.firstName}</h1>
            <img src={details.photo} />

        </>
    )
}

import { useState } from "react";
function MyForm() {
    let [details, setDetails] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
        }
    )
    let handleForm = (event) => {
        setDetails(() => {
            let field = event.target.name;
            let val = event.target.value;
            return {
                ...details,
                [field]: val
            }
        })
    }
    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();

            }}>
                <p>
                    <label htmlFor="fname">first name:</label>
                    <input type="text" id="fname" name="firstName" value={details.firstName} onChange={handleForm} />

                </p>
                <p>
                    <label htmlFor="fname">last name:</label>
                    <input type="text" id="lname" name="lastName" value={details.lastName} onChange={handleForm} />

                </p>
                <p>
                    <label htmlFor="email">email:</label>
                    <input type="email" id="email" name="email" value={details.email} onChange={handleForm} />

                </p>
                <button>Submit</button>
            </form>
        </>
    )
}

export default MyForm

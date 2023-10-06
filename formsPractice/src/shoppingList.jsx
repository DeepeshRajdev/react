import { useState } from "react"


export default function List() {
    let [list, setList] = useState([]);
    let [cart, setCart] = useState({
        item: "",
        quantity: 0
    })
    let [disable, setDisable] = useState(true);
    let handleChange = (e) => {
        let field = e.target.name;
        let val = e.target.value;
        setCart({
            ...cart,
            [field]: val
        })
        if (cart.item.length > 0 && cart.quantity > 0) setDisable(false);

    }

    let handleDelete = (ind) => {
        setList(list.filter((item, index) => {
            return ind !== index;
        })
        )
    }
    return (
        <>
            <h1 className="mb-9">Shopping List</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <p>
                    <label htmlFor="item" className="m-3">Item</label>
                    <input className="mb-3 mt-3 border-2 border-indigo-500 rounded-lg" type="text" placeholder="item" name="item" value={cart.item} id="item" onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="quantity" className="m-3">Quantity</label>
                    <input id="quantity" className="mb-3 mt-3 border-2 border-indigo-500 rounded-lg" type="number" placeholder="quantity" name="quantity" value={cart.quantity} onChange={handleChange} />
                </p>
                <button disabled={disable} onClick={() => {
                    setList(
                        [
                            ...list,
                            {
                                item: cart.item,
                                quantity: cart.quantity
                            }
                        ]

                    );
                    setDisable(true);
                    setCart({
                        item: "",
                        quantity: 0
                    });

                }}>Add</button>

            </form>
            <ul>
                {
                    list.map((i, ind) => {
                        return (<li className=" mt-3 border-2 border-indigo-500 rounded-lg" key={ind}>{i.item}{' '}:{' '}{i.quantity}{'  '}<button onClick={() => {
                            handleDelete(ind);
                        }} className="p-1 mx-4">delete</button></li>)
                    })
                }
            </ul>
        </>

    )
}
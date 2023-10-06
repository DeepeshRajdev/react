import { useState } from "react";
function Heading({name}) {
  return <h1>Hello {name}</h1>;
}
function List() {
  let products = ["headphones", "smart watches", "lens"];
  let li = products.map((item, ind) => (<li key={ind}>{item}</li>));
  return <ul>{li}</ul>
}
function Button({ cnt, click }) {
  return(
    <div>
       <button onClick={click} >clicked {cnt} times!</button>
    </div>
  )
}
function First() {
  let [count, setCount] = useState(0);
  function clicked() {
    setCount(count + 1);
  }
  return (
    <>
      <Heading name="deepesh" />
      <Heading name="rajdev" />
      <List />
      <Button cnt={count} click={clicked} />
      <Button cnt={count} click={clicked} />
    </>
  )

}
export default First;
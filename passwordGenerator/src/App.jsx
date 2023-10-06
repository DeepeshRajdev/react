import { useEffect, useState } from "react"
function App() {
  let [length, setLength] = useState(6);
  let [password, setPassword] = useState("");
  let [num, setnum] = useState(false);
  let [char, setchar] = useState(false);
  let generator = () => {
    let myPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str + str.toLowerCase();
    if (num) str = str + "1234567890";
    if (char) str = str + "!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      let random = Math.floor((Math.random() * str.length));
      myPassword += str[random];
    }
    setPassword(myPassword);

  }
  useEffect(() => {
    generator();
  }, [length, num, char])


  return (
    <>

      <h1 className="mb-1 text-center">Password Generator</h1>
      <input type="text" placeholder="password" className="bg-black rounded-xl px-3 py-1 mx-2 my-1" value={password} />
      <div className="mt-2 flex justify-center">
        <input type="range" min={0} max={20} id="slider" value={length} onChange={(event) => setLength(event.target.value)} />
        <label htmlFor="slider">Length : {length}</label>
        <input type="checkbox" id="num" className="mx-2" onChange={() => {
          setnum((num) => !num);
        }} />
        <label htmlFor="num">Numbers</label>
        <input type="checkbox" id="char" className="mx-2" onChange={() => {
          setchar((char) => !char);
        }} />
        <label htmlFor="char">Characters</label>

      </div>

    </>
  )
}

export default App

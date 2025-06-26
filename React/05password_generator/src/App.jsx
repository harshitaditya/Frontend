import { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to display feedback
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%&*";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copypasswordToclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 60);
    window.navigator.clipboard.writeText(Password)
      .then(() => {
        setMessage("Password copied to clipboard!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch(() => {
        setMessage("Failed to copy password.");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
  }, [Password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numAllowed, charAllowed, passwordgenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-300 text-orange-700">
      <h1 className="text-white text-center my-3 font-black">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          ref={passwordRef}
          readOnly
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
        ></input>
        <button
          onClick={copypasswordToclipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(Number(e.target.value)); // Ensure it's a number
            }}
          ></input>
          <label className="font-black text-white">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 text-white font-black">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 text-white font-black">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
      {message && <p className="text-center text-green-700 mt-2">{message}</p>}       
      {/* Show feedback */}
    </div>
  );
}

export default App;

//study about hooks:
//https://chatgpt.com/c/673ad414-3a14-8001-b5e1-3e3bef301540






 
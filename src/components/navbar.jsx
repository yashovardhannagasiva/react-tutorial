import React, { useState } from "react";

const Navbar = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  const deepthi = (e) => setName(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleClick = () => {
    if(name==='')
    return alert("Please enter your name")
    if(password==='')
    return alert("Please enter your password")
    if(name==='deepthi' && password==='1234')
    return alert("Welcome Deepthi")
    else
    return alert("Please enter valid credentials")
  }
  return (
    <div>
      <input type="text" onChange={deepthi} value={name} />
      <input type="password" onChange={handlePassword} value={password} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Navbar;

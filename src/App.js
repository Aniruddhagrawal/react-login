import React,{ useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser={
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user,setUser]= useState({name: "",email:""});

  const [error,setError]= useState("");

  const Login = details=>{
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email:details.email
      });
    }else{
      console.log("Detais do not match");
      setError("Detais do not match");
    }
  }
  const Logout = ()=>{
    setUser(
      {name: "",email:""}
    );
  }
  return (
    <div className="App">
      {(user.email !="")?(
        <div className="welcome">
          <h2>welcome, <span>{user.name}</span></h2>
          <h3>For Breakfast</h3><button type="opt">Opt-In</button>
          <button type="opt">Opt-Out</button>
          <h3>For Evening Snake</h3><button type="opt">Opt-In</button>
          <button type="opt">Opt-Out</button>
          <button onClick={Logout}>Logout</button>
        </div>  
      ) : (
        <LoginForm Login = {Login} error = {error} />
      )}
    </div>
  );
}

export default App;

import React, { useRef } from "react";

import './Login.css';

function login(telephone,password){
    const response = fetch("http://localhost:8080/client/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ telephone:telephone, motdepasse:password }),
    });
    const result = response.json();
    if(result.data.id != null){
        window.location.href="rencherir";
    }
    window.location.href="login";
        alert("Erreur de connexion"); 
    }

const Login = (props) => {
    const telephone = useRef();
    const password = useRef();
    login(telephone.current.value,password.current.value);
    return (
        <><h1>Login here</h1><form class="login" onSubmit={login(this.telephone,this.password)}  method="post">
            <div><label for="username">Téléphone</label>
                <input type="text" name="telephone" id="telephone" value="033001100102" ref={telephone} required /></div>
            <div><label for="password">Password</label>
                <input type="password" name="password" id="password" value="elsysoavita123" ref={password} required /></div>
            <div class="actions">
                <input type="submit" name="login" value="Login" />
            </div>
        </form></>
    );
};
export default Login;
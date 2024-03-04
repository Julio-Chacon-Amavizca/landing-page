import React, { useState } from "react";
import '../LoginForm/LoginForm.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    let navegacion = useNavigate();

    const [users, setUsers] = useState({
        username: '',
        password: '',
        lastname: '',
        firstname: '',
        country: ''
    });

    const { username, password, lastname, firstname, country } = users;

    const onInputChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });

    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/auth/register";
        await axios.post(urlBase, users);
        // redireccionar a la pagina de login
        navegacion('/');
    }

    const onAuth = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/api/v1/demo";
        // send token bearer to the server;
        const token = "1";
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    }

    
    console.log(users);
    return (

        <div className='wrapper'>
            <div>
                <h1>Register</h1>
                <form onSubmit={(e) => onSubmit(e)}>
                    <input className="input-box" onChange={(e) => onInputChange(e)} value={username} name="username" type="email" placeholder="Username" required />
                    <input className="input-box" onChange={(e) => onInputChange(e)} value={password} name="password" type="password" placeholder="Password" required />
                    <input className="input-box" name="passw2" type="password" placeholder="Confirm Password" required />
                    <input className="input-box" onChange={(e) => onInputChange(e)} value={lastname} name="lastname" type="text" placeholder="Lastname" required />
                    <input className="input-box" onChange={(e) => onInputChange(e)} value={firstname} name="firstname" type="text" placeholder="Firstname" required />
                    <input className="input-box" onChange={(e) => onInputChange(e)} value={country} name="country" type="text" placeholder="Country" required />

                    <button type="submit" >Register</button>
                    <button><a href="/">Regresar</a></button>

                </form>
            </div>
            <div className="wrapper">
            <form onSubmit ={ (e) => onAuth(e) }>
                <h1>Revisar authorizacion</h1>
            <button type="submit" >Authorizar</button>
            </form>
            </div>
        </div>

    );
}
export default {RegisterForm, setToken};
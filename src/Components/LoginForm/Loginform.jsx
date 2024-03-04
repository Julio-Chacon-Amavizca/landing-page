import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginServices from '../../servicios/LoginServices';

const LoginForm = () => {

    //const urlBase = "http://localhost:8080/auth/login";

    // guardamos el estado del formulario de login
    // y el estado del usuario que se loguea dentro de onSubmit
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setLogin] = useState(null);

    /*const onInputChange = (e) => {
        // operador spread para copiar el estado actual y 
        // luego modificar el campo que se esta modificando
        setLogin({...user, [e.target.name]: e.target.value});
        console.log(user);
    }*/


    const onSubmit = async (e) => {
        e.preventDefault();
        // enviar los datos al servidor
        try {
            const user = await LoginServices.login(
                {
                    username,
                    password
                }

            );
            setLogin(user);
            setUsername('');
            setPassword('');
            console.log(user);
            //await axios.post(urlBase, user);
            // redireccionar a la pagina de registro (tests)
        }
        catch (error) {
            console.log('Error de credenciales.  Error: ' + error);
        }
    }


    return (
        <div className='wrapper'>
            <form onSubmit={(e) => onSubmit(e)}>

                <h1>Login</h1>
                <div className='input-box'>
                    <input name="username" value={username} onChange={({ target }) => setUsername(target.value)} type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input name="password" value={password} onChange={({ target }) => setPassword(target.value)} type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox' />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don´t have an account? <Link to="/auth/register">Register</Link> </p>

                </div>

            </form>
        </div>
    );
};

export default LoginForm;  
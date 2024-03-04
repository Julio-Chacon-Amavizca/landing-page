import axios from "axios";

const urlBase = "http://localhost:8080/auth/login"

const login = async credential => {
    const { data } = await axios.post(urlBase, credential)
    return data;
}

export default { login }
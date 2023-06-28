const register = 'http://localhost:5000/register'
const login = 'http://localhost:5000/login'


const useServer = () => {

    const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };

    const registerUser = (username, email, password, repeatPassword) => {
        return fetch(register, {
            method: 'POST',
            headers : headers,
            body : JSON.stringify({ username, email, password, repeatPassword })
        }).then(res => res.json())
    }

    const loginUser = (email, password, repeatPassword) => {
        return fetch(login, {
            method: 'POST',
            headers : headers,
            body : JSON.stringify({ email, password, repeatPassword })
        }).then(res => res.json())
    }


    const getToken = () => {
        return fetch(login, {
          headers: {
            auth: localStorage.getItem("authToken"),
          },
        }).then((res) => res.json());
      };

    return {
        registerUser,
        loginUser,
        getToken
    }
}

export default useServer
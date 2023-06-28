import React, { useState } from "react";

import appleBtn from "../Assets/Images/apple-button.png";
import googleBtn from "../Assets/Images/googleplay-button.png";
import instagramLogo from "../Assets/Images/instagram-logo.png";

import { AiFillFacebook } from "react-icons/ai";

import useServer from '../Hooks/useServer';

const Login = () => {

  const { registerUser, loginUser } = useServer();

  const [hasAccount, setHasAccount] = useState(true);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)


  if (!hasAccount) {
    delete data.username;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  


  const useRegisterAccount = (e) => {
    e.preventDefault();

    if(!emailRegex.test(data.email)){
      return alert('Incorect Email');
    }

    registerUser(data.username, data.email, data.password, data.repeatPassword);
  };


  const loginAccount = (e) => {
    e.preventDefault();

    if(!emailRegex.test(data.email)){
      return alert('Incorect Email');
    }

    loginUser(data.email, data.password, data.repeatPassword);
  }

  return (
    <div className="login-container-position">
      <main className="flex align-items-center justify-content-center login-container">
        <section id="mobile" className="flex"></section>
        <section id="auth" className="flex direction-column">
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
              <img
                src={instagramLogo}
                alt="Instagram logo"
                title="Instagram logo"
              />
            </h1>
            {hasAccount ? (
              <form onSubmit={useRegisterAccount}>
                {/* sign in form */}
                <label htmlFor="email" className="sr-only">
                  Username
                </label>
                <input
                  required
                  name="username"
                  placeholder="Username"
                  type='text'
                  onChange={handleChange}
                />
                <label htmlFor="email" className="sr-only">
                  Phone number, username or email
                </label>
                <input
                  name="email"
                  placeholder="Phone number, username or email"
                  onChange={handleChange}
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />

                <label htmlFor="Repeat password" className="sr-only">
                  Password
                </label>
                <input
                  required
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat password"
                  onChange={handleChange}
                />

                 {/* sign in form */}

                <button type="submit">Sign in</button>
              </form>
            ) : (
              <form onSubmit={loginAccount}>
                {/* login form*/}
                <label htmlFor="email" className="sr-only">
                  Phone number, username or email
                </label>
                <input
                  required
                  name="email"
                  placeholder="Phone number, username or email"
                  onChange={handleChange}
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  required  
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />

                <label htmlFor="Repeat password" className="sr-only">
                  Password
                </label>
                <input
                  required
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat password"
                  onChange={handleChange}
                />

                <button type="submit">Log in</button>
                {/* login form*/}
              </form>
            )}
            <div className="flex separator align-items-center">
              <span />
              <div className="or">OR</div>
              <span />
            </div>
            <div className="login-with-fb flex direction-column align-items-center">
              <div>
                <img />
                <a>
                  <AiFillFacebook className="icon" /> Log in with Facebook
                </a>
              </div>
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="panel register flex justify-content-center">
            <p>Dont have an account?</p>
            <a onClick={() => setHasAccount((prev) => !prev)}>
              {hasAccount ? "Log in" : "Sign in"}
            </a>
          </div>
          <div className="app-download flex direction-column align-items-center">
            <p>Get the app.</p>
            <div className="flex justify-content-center">
              <img src={appleBtn} />
              <img src={googleBtn} />
            </div>
          </div>
        </section>
      </main>
    </div>

    //   <footer>
    //     <ul className="flex flex-wrap justify-content-center">
    //       <li>
    //         <a href="#">SOBRE</a>
    //       </li>
    //       <li>
    //         <a href="#">AJUDA</a>
    //       </li>
    //       <li>
    //         <a href="#">IMPRENSA</a>
    //       </li>
    //       <li>
    //         <a href="#">API</a>
    //       </li>
    //       <li>
    //         <a href="#">CARREIRAS</a>
    //       </li>
    //       <li>
    //         <a href="#">PRIVACIDADE</a>
    //       </li>
    //       <li>
    //         <a href="#">TERMOS</a>
    //       </li>
    //       <li>
    //         <a href="#">LOCALIZAÇÃO</a>
    //       </li>
    //       <li>
    //         <a href="#">CONTAS MAIS RELEVANTES</a>
    //       </li>
    //       <li>
    //         <a href="#">HASHTAGS</a>
    //       </li>
    //       <li>
    //         <a href="#">IDIOMA</a>
    //       </li>
    //     </ul>
    //     <p className="copyright">© 2020 Instagram do Facebook</p>
    //   </footer>
  );
};

export default Login;

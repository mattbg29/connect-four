import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "./SignUp";
import LoginForm from "./LoginForm";

function NavBar() {
    const [modal, setModal] = useState(false)
    const { user, logout } = useContext(UserContext)
  
    const handleClick = () => {
            setModal(!modal)        
  };

  const handleClickOut = () => {
    setModal(!modal)
    logout()
  };

  return (
    <div className="navbar">
      {user.name === '' ? 
      <>
            <div style={{float: 'right', marginRight: '5vw'}}>
                <span onClick={handleClick} className="loginicon">
                Sign In
                </span>
            </div>
            {modal && user.name === '' && <LoginForm />}
      </>
      : <div style={{float: 'right', marginRight: '5vw'}}>
        <span onClick={handleClickOut} className="loginicon">
          Sign Out
        </span>
      </div>}
    </div>
  );
}

export default NavBar;

//https://codesandbox.io/s/animation-login-popup-form-8z817?from-embed=&file=/src/styles.css:59-177
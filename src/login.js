import React from 'react';

const Login=(props)=>{
    const{email,
        SetEmail,
        password,
        Setpassword,
        handlelogin,
        handleSignup,
        userAccount,
        SetUserAccount,
        emailError,
        passwordError}=props;
   
    
    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autofocus required value={email} onchange={(e)=> SetEmail(e.target.value)}/>
            <p classname="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onchange/>
            </div>
        </section>

    );
};
export default Login
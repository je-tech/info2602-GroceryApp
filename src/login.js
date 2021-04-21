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
                <input type="text" required value={email} onChange={(e)=> SetEmail(e.target.value)}/>
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange={e=> Setpassword(e.target.value)}/>
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">

                {userAccount ?(
                  <>  
                    <button onClick={handlelogin}>Sign in</button>
                    <p>Create account <span onClick={()=> SetUserAccount(!userAccount)}>Sign up</span></p>
                  </>
                ) : (
                  <>
                    <button onClick={handleSignup}>Sign up</button>
                    
                    <p>Already own an Account? <span onClick={()=>SetUserAccount(!userAccount)}>Sign in</span></p>
                  </>  

                )}

              </div>
            </div>
        </section>

    );
};
export default Login
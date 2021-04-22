import React from 'react';

const Login=(props)=>{
    const{User_email,
      Set_UserEmail,
      User_password,
      Set_password,
       login_func,
        Signup_func,
        userAccount,
        SetUserAccount,
        False_Email,
        passwordError}=props;
   
    
    return(
        <section className="login">
            <div className="loginContainer">
                
                <label>Username</label>
                <input type="text" required value={User_email} onChange={(e)=> Set_UserEmail(e.target.value)}/>
            <p className="errorMsg">{False_Email}</p>
            <label>Password</label>
            <input type="password" required value={User_password} onChange={e=> Set_password(e.target.value)}/>
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">

                {userAccount ?(
                  <>  
                    <button onClick={login_func}>Sign in</button>
                    <p>Create account <span onClick={()=> SetUserAccount(!userAccount)}>Sign up</span></p>
                  </>
                ) : (
                  <>
                    <button onClick={Signup_func}>Sign up</button>
                    
                    <p>Already own an Account? <span onClick={()=>SetUserAccount(!userAccount)}>Sign in</span></p>
                  </>  

                )}

              </div>
            </div>
        </section>

    );
};
export default Login
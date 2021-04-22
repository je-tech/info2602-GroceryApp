import React from 'react';

const Login_page=(props)=>{
    const{User_email,
      Set_UserEmail,
      User_password,
      Set_password,
       login_func,
        Signup_func,
        User_Account,
        Set_UserAccount,
        False_Email,
        Password_Error}=props;
   
    
    return(
        <section className="login_page">
            <div className="login_Conts">
                <h3>The Grocery App</h3>
                <label>Username</label>
                <input type="text" required value={User_email} onChange={(e)=> Set_UserEmail(e.target.value)}/>
            <p className="error_Quote">{False_Email}</p>
            <label>Password</label>
            <input type="password" required value={User_password} onChange={e=> Set_password(e.target.value)}/>
            <p className="error_Quote">{Password_Error}</p>
            <div className="btnContainer">

                {User_Account ?(
                  <>  
                    <button onClick={login_func}>Sign in</button>
                    <p>Create account <span onClick={()=> Set_UserAccount(!User_Account)}>Sign up</span></p>
                  </>
                ) : (
                  <>
                  
                    <button onClick={Signup_func}>Sign up</button>
                    
                    <p>Already own an Account? <span onClick={()=>Set_UserAccount(!User_Account)}>Sign in</span></p>
                  </>  

                )}

              </div>
            </div>
        </section>

    );
};
export default Login_page
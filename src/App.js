import "./App.css";
import React,{useState, useEffect}from "react";
import fire from "./fire";
import Login from "./login";
import Hero from "./Hero";



const App=()=>{
  const{user,setUser}=useState('');
  const[email,SetEmail]=useState('');
  const{emailError,SetEmailError}=useState('');
  const{password,Setpassword}=useState('');
  const{passwordError,SetpasswordError}=useState('');
  const{userAccount,SetUserAccount}=useState(false);

  const clearInputs=()=>{
    SetEmail('');
    Setpassword('');

  
}

  const clearErrors=()=>{
    SetEmailError('');
    SetpasswordError('');
}


  const handlelogin=()=>{
    clearErrors();
    fire
       .auth()
       .signInWithEmailandPassword(email,password)
       .catch((err)=>{
         switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              SetEmailError(err.message);
             break
            case "auth/wrong-password":
              SetpasswordError(err.message);
             break;
    }

  })

};

  const handleSignup=()=>{
    clearErrors();
    fire
      .auth()
      .createUserWithEmailandPassword(email,password)
      .catch((err)=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            SetEmailError(err.message);
            break
          case "auth/weak-password":
            SetpasswordError(err.message);
            break;
    }

  })

};
  const handlelogout=()=>{
    fire.auth.signOut();
}
 
  const authlistener=()=>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        clearInputs();
        setUser(user);
       }else{
        setUser("");
      }
    });
  };
  useEffect(()=>{
    authlistener();

  },[])

 return(

  <div className="App">
    {user ? (
      <Hero handlelogout={handlelogout}/>
    ) :(
        <Login email={email} 
        SetEmail={SetEmail} 
        password={password} 
        Setpassword={Setpassword} 
        handlelogin={handlelogin} 
        handleSignup={handleSignup}
        userAccount={userAccount}
        SetUserAccount={SetUserAccount}
        emailError={emailError} 
        passwordError={passwordError}
    />
    )}
  </div>
 );
};

    
   

export default App;

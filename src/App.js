import "./App.css";
import React,{useState, useEffect}from "react";
import authentication from "./fire";
import Login_page from "./login";
import Grocery from "./Grocery";
import './index.css';
import{BrowserRouter as Router,Route,Link,NavLink,Switch}from "react-router-dom"
import Additem from './AddRecipe';





const App=()=>{
  const[user,Set_Users]=useState("");

  const[User_Account,Set_UserAccount]=useState(false);

  const[User_email,Set_UserEmail]=useState("");

  const[Password_Error,Incorrect_password]=useState("");

  const[False_Email,Incorrect_Email]=useState("");

  const[User_password,Set_password]=useState("");
  

  
 
  const Detect_UserError=()=>{

    Incorrect_Email('');

    Incorrect_password('');
}





const Detect_UserInput=()=>{

  Set_UserEmail('');

  Set_password('');

}
  

  const login_func=()=>{

    Detect_UserError();

    authentication

       .auth()
       .signInWithEmailandPassword(User_email,User_password)
       .catch((error)=>{
         switch(error.code){
            case "auth/invalid-email":

            case "auth/user-disabled":

            case "auth/user-not-found":

              Incorrect_Email(error.message);
             break

            case "auth/wrong-password":

              Incorrect_password(error.message);
             break;
    }

  })

};

  const Signup_func = () => {

    Detect_UserInput();
    authentication

    .auth()
    .createUserWithEmailAndPassword(User_email,User_password)

    .catch((err)=>{
      switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
        Incorrect_Email(err.message);
        break
      case "auth/weak-password":
        Incorrect_password(err.message);
        break;
    }

  
  })

};

const logout_func=()=>{

  authentication.auth().signOut();

}
 
const authlistener=()=>{

  authentication.auth().onAuthStateChanged(user=>{

    if(user){
      Detect_UserInput();
      Set_Users(user);
     }else{
      Set_Users("");
      }
    });
  };
  

 
  useEffect(()=>{
    authlistener();

  },[])

  

 return(


  <div className="App">
   
    {user ? (
      
      <Grocery logout_func={logout_func}   />
      
    
      
    ) :(
        <Login_page 
        User_email={User_email} 

        Set_UserEmail={Set_UserEmail}

        User_password={User_password} 

        login_func={login_func} 

        Set_password={Set_password} 

        Password_Error={Password_Error}

        Signup_func={Signup_func}

        False_Email={False_Email} 

        User_Account={User_Account}

        Set_UserAccount={Set_UserAccount}
        
    />
    )}
  </div>
 );
};

    
   

export default App;

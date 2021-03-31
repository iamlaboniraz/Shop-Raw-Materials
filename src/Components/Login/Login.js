import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory,useLocation } from 'react-router'
import {createUserWithEmailAndPassword, handleGoogleSignIn, handleSingOut, initializeLoginFramework, signInWithEmailAndPassword} from "./LoginManage";
import { Input,FormGroup,Form,Label } from 'reactstrap';
import "./Login.css";
import { GoogleLoginButton } from "react-social-login-buttons";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSingedIn : false,
    name : '',
    email : '',
    password:'',
    photo : ''
  });



  initializeLoginFramework();

  const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
  console.log("loggedin = ",loggedInUser)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };




const googleSignIn =(res, redirect) =>{
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res,true)
      if(redirect){
          history.replace(from)
      }
      
    })
}




const SingOut = () =>{
    handleSingOut()
    .then(res =>{
      const singOutUser = {
        isSingedIn:false,
        name:'',
        email: '',
        photo: '',
        error:'',
        success:false

      }
      setUser(singOutUser)
    })
    .catch(err =>{

    })
  }


  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from)
    }
  }
  
  

  const handleChange = (event) =>{
    let isFieldValid = true;
    if (event.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password'){
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value)
      isFieldValid =  isPasswordValid && passwordHasNumber
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) =>{
    console.log(user.email, user.password)
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res =>{
        handleResponse(res,false)
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res =>{
        handleResponse(res,true)
      })
    }
    e.preventDefault();
  }


  

  return (
    <div className="login-form">
      
      <Form action="" onSubmit={handleSubmit}>
        {newUser &&  
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="name" onBlur={handleChange} required placeholder="Your name"/>
        </FormGroup>
        }
        <FormGroup>
          <Label>Email</Label>
          <Input type="text" name="email"  onBlur={handleChange} placeholder="Email" required></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password"  onBlur={handleChange} placeholder="Password" required></Input>
        </FormGroup>


        <Input className="btn-lg btn-dark btn-block" type="submit" value={newUser ?'Sign up' : 'LogIn'}/>
       
       <div>
         <br/>

         <div style={{textAlign:"left", marginLeft : "130px", color:"red"}} className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="defaultIndeterminate" onChange={() => setNewUser(!newUser)} name="newUser" />
        <label className="custom-control-label" htmlFor="defaultIndeterminate" >New User Sing Up</label>
      </div>

       </div>
        

        
      </Form>
      <hr/>
      <p style={{color:'red',textAlign:"center"}}>{user.error}</p>
      {user.success && <p style={{color:"green"}}>User {newUser ? 'created': 'Logged In'} Successfully</p>}
      <div style={{color:'green'}} className="text-center pt-3 login-form">
          Or continue with your social account
        
        {
          user.isSingedIn ? <button onClick={SingOut}>Sign out</button>:
          <GoogleLoginButton  className="mt-3 mb-3" onClick={googleSignIn}></GoogleLoginButton >
        }
      </div>
    </div>
  );
}

export default Login;

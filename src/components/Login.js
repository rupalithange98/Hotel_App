import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => {
     getData()
  }, []);

  const getData = () => {
    //   alert("getData called")
    axios.get("http://localhost:3001/getuser").then((response) => {
      console.log("Get data from Database:", response);
      if (response) {
        localStorage.setItem("signupData", JSON.stringify(response.data));
        console.log("localstorage:", response.data);
        return true;
      } else {
        alert("Wrong credentials");
        return false;
      }
    });
  };
  //  const login =async(e) => {
  //   //  alert("Login function is called")
  //   // console.log(`${loginEmail} and ${loginPassword}`);
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/login',{userName:loginEmail,password:loginPassword})
  //     .then((res) => {
  //      if (res.data.message)
  //          {
  //            setIsLoggedIn(res.data.message);
  //          }
  //       else{
  //          setIsLoggedIn(`Login in succesfull for ${res.data[0].username}`);
  //         props.handleClose();
  //       }
  //     });
  //     alert(isLoggedIn)
  //   }
  const login = (e) => {
    e.preventDefault();
    if ( !loginEmail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) || !loginPassword.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) 
    {
      alert("enter proper details mail contain . and @ and Password should be 8 contain 1 special char");
    }
    else if ( loginEmail == "adminlogin@gmail.com" && loginPassword == "Admin@123") 
    {
      alert("WelCome Admin");
      history.push("/viewBooking");
      window.location.reload();
    } 
    else 
    // if (loginPassword != "") 
    {

      axios.post('http://localhost:3001/login',{userName:loginEmail,password:loginPassword})
          .then((res) => {
           if (res.data.message)
               {
                 setIsLoggedIn(res.data.message);
                 alert(res.data.message)
  
               }
            else{
               setIsLoggedIn(`Login in succesfull for ${res.data[0].username}`);
               console.log(res.data[0].username)
               history.push("/login");
              //  alert(isLoggedIn)
              // props.handleClose()
            }
          });
          alert(isLoggedIn)
        }
    //   axios.post("http://localhost:3001/login", {
    //       userName: loginEmail,
    //       password: loginPassword,
    //     })
    //     .then((res) => {
    //       console.log("success", res);
    //       if(res){
    //         alert("Login Successfully...");
    //         history.push("/");
    //         window.location.reload()
    //       }else{
    //         alert('Register First to login'  )
    //       }
    //     });
    //   // alert("Login Successfully...");
    //   // // props.handleClose();
    //   // history.push("/");
    //   // window.location.reload()
    // } 
    // else {
    //   alert("password and confirmed password should be match..");
    // }
  };

  return (
    <div className="login-form">
      <form>
        <h2 className="text-center">Login</h2>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-envelop" />
            </span>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock" />
            </span>
          </div>
          <input
            type="password"
            name="password"
            id="pwd"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            onClick={login}
            className="btn btn-primary login-btn btn-block"
          >
            Sign in
          </button>
        </div>
      </form>
      {/* <h1>{isLoggedIn}</h1> */}
      <p className="text-centertext-muted small pt-2">
        Don't have an account?
        <Link to="#" onClick={props.handleSave}>
          Sign Up here
        </Link>
      </p>
    </div>
  );
}

export default Login;

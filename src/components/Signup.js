import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Signup(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [dob, setDOB] = useState("")
    
    // const [gender, setGender] = useState("")
    const [adharNumber, setadharNumber] = useState("")
    // const [emailError, setEmailError] = useState("")

    useEffect(() => {
        // getData()
    }, [])

    // const validateAge=()=>{
    //     let today=new Date();
    //     let currentYear=today.getFullYear();
    //     let birth =new Date(dob);
    //     let birthYear=birth.getFullYear();

    //     var agediff=currentYear-birthYear

    //     if(agediff>=18){
    //         // console.log("Allow Registration")
    //         return true;
    //     }else{
    //         // console.log("Age should br greater than 18")
    //         // alert("Age should be greater than 18")
    //         return false;
    //     }
    // }
    const register =(e)=>{
        e.preventDefault()
        // getData();
         // console.log(`${email} ${password} ${confirmPwd} ${fname} ${lname} ${dob} ${adharNumber} `)
         if((!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) || (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)))
         {
             alert("enter proper details mail contain . and @ and Password should be 8 contain 1 special char")
         }
         else{
             if(password === confirmPwd)
                 {

                axios.post('http://localhost:3001/register',{email,password,confirmPwd,fname,lname,dob,adharNumber})
                .then(res=>{console.log("success",res)})
                alert("Registration Successfully...");
                getData();
             }
             else
             {
                 alert("password and confirmed password should be match..")
             }
         }
            setEmail(" ");
             setPassword(" ");
             setConfirmPwd(" ");
             setFname(" ");
             setLname(" ");
             setDOB(" ");
             setadharNumber(" ");
      }

      const getData=()=>{
        //   alert("getData called")
        axios.get('http://localhost:3001/getuser').then(response=>{
            console.log("Get data from Database:",response)
            if(response){
                localStorage.setItem("signupData",JSON.stringify(response.data))
                console.log("localstorage:",response.data);
                alert("data Stored in localstorage")
                return true;
            }else{
                alert("Wrong credentials")
                return false;
            }
        })
}
 
    return (
        
        <div className="signup">
            <div className="card-bg-light">
                <article className='card-body'>
                    <h4 className='card-title mt-3 text-center'>
                        Registration Form
                    </h4>
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>
                            <i className='fa fa-envelop'/>
                            </span>
                        </div>
                        <input
                        type='email' name='email'
                        className='form-control'
                        placeholder='Email Address'
                        onChange={(e)=>setEmail(e.target.value)}/>

                         {/* <pre style={{color:'red'}} onChange={e=>setEmailError(e.target.value)}>{emailError}</pre> */}

                    </div>

                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>
                            <i className='fa fa-lock'/>
                            </span>
                        </div>
                        <input
                        type='text' name='firstname'
                        className='form-control'
                        placeholder='Enter First Name'
                        onChange={(e)=>setFname(e.target.value)}/>
                    </div>
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>
                            <i className='fa fa-lock'/>
                            </span>
                        </div>
                        <input
                        type='text' name='lastname'
                        className='form-control'
                        placeholder='Enter Last Name'
                        onChange={(e)=>setLname(e.target.value)}/>
                    </div>
                   
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>
                            <i className='fa fa-lock'/>
                            </span>
                        </div>
                        <input
                        type='password' name='password'
                        className='form-control'
                        placeholder='Enter Password'
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    
                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>
                            <i className='fa fa-lock'/>
                            </span>
                        </div>
                        <input
                        type='password' name='confirmPassword'
                        className='form-control'
                        placeholder='Enter Confirm Password'
                        onChange={(e)=>setConfirmPwd(e.target.value)}/>
                    </div>

                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>
                            <i className='fa fa-lock'/>
                            </span>
                        </div>
                        <input
                        type='text' name='dob'
                        className='form-control'
                        placeholder='Enter Birth Date'
                        onChange={(e)=>setDOB(e.target.value)}/>
                    </div>


                    <div className='form-group input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>
                            <i className='fa fa-lock'/>
                            </span>
                        </div>
                        <input
                        type='number' name='adharNumber'
                        className='form-control'
                        placeholder='Enter Adhar Number'
                        onChange={(e)=>setadharNumber(e.target.value)}/>
                    </div>

{/* 
                     <div className='form-group input-group'>
                        &nbsp;&nbsp;&nbsp;
                        
                        <input type='radio' name='gender' value='male'
                         onChange={(e)=>setGender(e.target.value)}/>Male
                         &nbsp;&nbsp;&nbsp;
                     
                         <input type='radio' name='gender'value='female'
                        onChange={(e)=>setGender(e.target.value)}/>Female
                    </div> */}


                  

                    <div className='form-group'>
                        <button className='btn btn-primary login-btn btn-block' onClick={register}>Create Account</button>
                    </div>
                    <p className='text-center text-muted small'>
                        Already have an account?
                        <Link to='#' onClick={props.handleSave}> Sign in here</Link>
                    </p>

                </article>
            </div>
            
        </div>
    
    )
}

export default Signup











// import React,{useState,useEffect} from 'react'
// import {Link,useHistory} from 'react-router-dom'
// import axios from 'axios';

// function Signup(props) {
//     const history = useHistory();
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPwd, setConfirmPwd] = useState("")
//     const [fname, setFname] = useState("")
//     const [lname, setLname] = useState("")
//     const [dob, setDOB] = useState("")
//     const [adharNumber, setadharNumber] = useState("")
//     // const [emailError, setEmailError] = useState('');
//     // const [pwd, setPwd] = useState('')
  

//     const register =(e)=>{
//         e.preventDefault()
//          // console.log(`${email} ${password} ${confirmPwd} ${fname} ${lname} ${dob} ${adharNumber} `)
//          if((!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) || (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)))
//                   {
//                       alert("enter proper details mail contain . and @ and Password should be 8 contain 1 special char")
//                   }
//                   else{
//                       if(password === confirmPwd)
//                           {
         
//                          axios.post('http://localhost:3001/register',{email,password,confirmPwd,fname,lname,dob,adharNumber})
//                          .then(res=>{console.log("success",res)})
//                          alert("Registration Successfully...");
//                          // getData();
//                       }
//                       else
//                       {
//                           alert("password and confirmed password should be match..")
//                       }
                
//              }
//              setEmail(" ");
//              setPassword(" ");
//              setConfirmPwd(" ");
//              setFname(" ");
//              setLname(" ");
//              setDOB(" ");
//              setadharNumber(" ");
//          }
    
//     return (
        
//         <div className="signup">
//             <div className="card-bg-light">
//                 <article className='card-body'>
//                     <h4 className='card-title mt-3 text-center'>
//                         Registration Form
//                     </h4>
//                     <div className='form-group input-group'>
//                         <div className='input-group-prepend'>
//                             <span className='input-group-text'>
//                             <i className='fa fa-envelop'/>
//                             </span>
//                         </div>
//                         <input
//                         type='email' name='email'
//                         className='form-control'
//                         placeholder='Email Address'
//                         onChange={(e)=>setEmail(e.target.value)}/>


//                     </div>
//                     {/* <pre style={{color:'red'}} onChange={e=>setEmailError(e.target.value)}>{emailError}</pre> */}


//                     <div className='form-group input-group'>
//                         <div className='input-group-prepend'>
//                             <span className='input-group-text'>
//                             <i className='fa fa-lock'/>
//                             </span>
//                         </div>
//                         <input
//                         type='text' name='firstname'
//                         className='form-control'
//                         placeholder='Enter First Name'
//                         onChange={(e)=>setFname(e.target.value)}/>
//                     </div>
//                     <div className='form-group input-group'>
//                         <div className='input-group-prepend'>
//                             <span className='input-group-text'>
//                             <i className='fa fa-lock'/>
//                             </span>
//                         </div>
//                         <input
//                         type='text' name='lastname'
//                         className='form-control'
//                         placeholder='Enter Last Name'
//                         onChange={(e)=>setLname(e.target.value)}/>
//                     </div>
                   
//                     <div className='form-group input-group'>
//                         <div className='input-group-prepend'>
//                             <span className='input-group-text'>
//                             <i className='fa fa-lock'/>
//                             </span>
//                         </div>
//                         <input
//                         type='password' name='password'
//                         className='form-control'
//                         placeholder='Enter Password'
//                         onChange={(e)=>setPassword(e.target.value)}/>
//                     </div>
                    
//                     <div className='form-group input-group'>
//                         <div className='input-group-prepend'>
//                             <span className='input-group-text'>
//                             <i className='fa fa-lock'/>
//                             </span>
//                         </div>
//                         <input
//                         type='password' name='confirmPassword'
//                         className='form-control'
//                         placeholder='Enter Confirm Password'
//                         onChange={(e)=>setConfirmPwd(e.target.value)}/>
//                     </div>

//                     <div className='form-group input-group'>
//                         <div className='input-group-prepend'>
//                             <span className='input-group-text'>
//                             <i className='fa fa-lock'/>
//                             </span>
//                         </div>
//                         <input
//                         type='text' name='dob'
//                         className='form-control'
//                         placeholder='Enter Birth Date'
//                         onChange={(e)=>setDOB(e.target.value)}/>
//                     </div>


//                     <div className='form-group input-group'>
//                         <div className='input-group-prepend'>
//                             <span className='input-group-text'>
//                             <i className='fa fa-lock'/>
//                             </span>
//                         </div>
//                         <input
//                         type='number' name='adharNumber'
//                         className='form-control'
//                         placeholder='Enter Adhar Number'
//                         onChange={(e)=>setadharNumber(e.target.value)}/>
//                     </div>

//                     <div className='form-group'>
//                         <button className='btn btn-primary login-btn btn-block' onClick={register}>Create Account</button>
//                     </div>
//                     <p className='text-center text-muted small'>
//                         Already have an account?
//                         <Link to='#' onClick={props.handleSave}> Sign in here</Link>
//                     </p>

//                 </article>
//             </div>
            
//         </div>
    
//     )
// }

// export default Signup








































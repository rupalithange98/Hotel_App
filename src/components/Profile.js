import axios from "axios";
import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import ViewBooking from "./ViewBooking";

function Profile() {
    const [id, setId] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [dob, setDOB] = useState("")
    const [adharNumber, setadharNumber] = useState(0)
    const [profile, setProfile] = useState({profileData:[]})

console.log("ProfileData:",profile.profileData)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(fname,lname,password,confirmPwd,email,dob,adharNumber)
    }

    useEffect(()=>{
      getProfileData();
    },[])

    const getProfileData=()=>{
      axios.get("http://localhost:3001/getuser").then(res=>{
        console.log("profile Data---",res.data)
        setProfile({
          profileData:res.data
        })

      })
    }
    console.log("Profile--",profile.profileData)

    const deleteProfile=(e,id)=>{
      e.preventDefault();
      console.log("id to delete Profile--",id)
      axios.delete(`http://localhost:3001/deleteuser/${id}`)
      alert("Profile deleted successfully");
      getProfileData();

    }
    

    const editProfile=(id)=>{
      console.log("edit id:",id)
      axios.get(`http://localhost:3001/getuser/${id}`).then(res=>{
        console.log("update response--",res)

        setId(res.data[0].id)
        setFname(res.data[0].fname)
        setLname(res.data[0].lname)
        setPassword(res.data[0].password)
        setConfirmPwd(res.data[0].confirmPwd)
        setDOB(res.data[0].dob)
        setadharNumber(res.data[0].adhar)
        setEmail(res.data[0].username)

      })
      // getProfileData();
    }
    // console.log("getting data to edit:",update);

    const updateProfile=(e,id)=>{
      // alert('update is called')
      // e.preventDefault()
      axios.put(`http://localhost:3001/updateProfile/${id}`,{fname,lname,password,email,confirmPwd,adharNumber})
    .then(res=>{
      console.log("Success update",res)
  
      displayData();
    })
    // displayData();

    }

    const displayData=()=>{
      {
         return profile.profileData.length>0 ? profile.profileData.map((val,i)=>{
             return  (
                 <tr key={i}>
              <td>{val.id}</td>
             <td>{val.fname}</td>
             <td>{val.lname}</td>
             <td>{val.username}</td>

             <td>{val.password}</td>
             {/* <td>{val.confirmPwd}</td> */}
             <td>{val.dob}</td>
             <td>{val.adhar}</td>
             <td>
                 <button className='btn btn-success mr-2' onClick={()=>editProfile(val.id)} >Edit</button>
                 </td>
                 <td>
                 <button className='btn btn-danger mr-2'onClick={(e)=>{deleteProfile(e,val.id)}} >Delete</button>
             </td>
             </tr>

               )
           }):(
               <tr>
                   <td colSpan={8} style={{color:"red" ,textAlign:"center"}}>No data to display...</td>
               </tr>
           )
       }
  }


  
  return (
    <>
     
    <div>
        <form className='container  p-3 mb-5' bg-white mt-5 fullH rounded border>
      <div>
        <h5 className="d-inline">First Name</h5>
        <input
        type='text'
          name="firstname"
          className="d-inline pl-5 ml-5"
          value={fname}
          onChange={(e)=>setFname(e.target.value)}
          required
        />
        <hr />
      </div>

      <div>
        <h5 className="d-inline">Last Name</h5>
        <input
          name="lastname"
          className="d-inline pl-5 ml-5"
          value={lname}
          onChange={(e)=>setLname(e.target.value)}
          required
        />
        <hr />
      </div>

      <div>
        <h5 className="d-inline">Email id</h5>
        <input
          name="email"
          className="d-inline pl-5 ml-5"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        {/* <h5 className="d-inline pl-5 ml-5">{state.email}</h5> */}
        <hr />
      </div>

      <div>
        <h5 className="d-inline">Password</h5>
        <input
          name="password"
          className="d-inline pl-5 ml-5"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <small id="passwordHelpBlock" className="form-text text-muted">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </small>
        <hr />
      </div>

      <div>
        <h5 className="d-inline">Confirm password</h5>
        <input
          name="cpwd"
          className="d-inline pl-5 ml-5"
          value={confirmPwd}
          onChange={(e)=>setConfirmPwd(e.target.value)}
          required
        />
        <hr />
      </div>

      <div>
        <h5 className="d-inline">DOB</h5>
        <input
          name="dob"
          className="d-inline pl-5 ml-5"
          value={dob}
          onChange={(e)=>setDOB(e.target.value)}
          required
        />
        <hr />
      </div>

      <div>
        <h5 className="d-inline">Adhar Number</h5>
        <input
          name="lastname"
          className="d-inline pl-5 ml-5"
          value={adharNumber}
          onChange={(e)=>setadharNumber(e.target.value)}
          required
        />
        <hr />
      </div>
      {/* <button type="button"onClick={handleSubmit}className="btn  btn-primary mr-2" > Submit</button> */}
      {/* <button type="button"className="btn  btn-primary mr-2"> Upadte</button> */}
      {
        // update.updateField===true ?<Button  onClick={updateProfile()}>Update</Button>:
        // <Button>Save</Button>
        <Button  onClick={(e)=>updateProfile(e,id)}>Update</Button>
      }
      
      </form>
    </div>
  <hr></hr>
  <h2 style={{textAlign:'center'}}>Information of the Person...</h2>
<div className='container'> 
<table className='table table-striped pt-50 m-50'>
                <thead className='bg-secondary m-50'>
                    <th>Sr No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Date of Birth</th>
                    <th>Adhar Number</th>
                    <th colSpan={2}>Action</th>
                 </thead>
                <tbody>{displayData()}</tbody>
             </table>
          
</div>
</>
  );
}

export default Profile;





















// import axios from 'axios';
// import React,{useState,useEffect} from 'react'
// import api from '../api/api'


// function Profile() {
//     const [state, updateState] = useState({
//         edit:false,
//         fname:"",
//         lname:"",
//         email:"",
//         password:"",
//         confirmPwd:"",
//         dob:"",
//         adhar:"",
//     });
// console.log("State data on profile page--",state)

//     const onEdit=()=>{
//         if(!state.edit){
//             updateState({...state,edit:true});
//         }else{
//             updateState({...state,edit:false});
//         }
//     };

//     const changeHandler=e=>{
//         const {name}=e.target;
//         updateState({
//             ...state,[name]:e.target.value
//         });
//     }

//   alert("state",state)

// let email=state.email;
//     const updateProfile=(id)=>{
//         axios.put('http://localhost:3001/update/{this.props.match.params.id}',{email:updateState,id:id}).then(
//             response=>{
//                 updateState(
//                     state.map(val=>{
//                         return val.id==id?{{}
//                             id:val.id,
//                             fname:val.fname,
//                             lname:val.lname,
//                             email:val.username,
//                             password:val.password,
//                             confirmPwd:val.confirmPwd,
//                             dob:val.dob,
//                             adhar:val.adhar
//                         }
//                         :val
//                     })
//                 )
//             }
//         )
//     }

    // useEffect(()=>{

    //     // alert("useEffect called")
    //     // alert(localStorage.getItem("signupData"));
    //     if(localStorage.getItem("signupData")){
    //         alert("inside localstorage if condition")
    //         let all=localStorage.getItem('signupData')
    //         alert(all)
        
    //         // alert(typeof(allData)

    //         let fname=JSON.parse(localStorage.getItem("signupData")).fname;
    //         let lname=JSON.parse(localStorage.getItem("signupData")).lname;
    //         let password=JSON.parse(localStorage.getItem("signupData")).password;
    //         let confirmPwd=JSON.parse(localStorage.getItem("signupData")).confirmPwd;
    //         let dob=JSON.parse(localStorage.getItem("signupData")).dob;
    //         let adhar=JSON.parse(localStorage.getItem("signupData")).adhar;
    //         let email=JSON.parse(localStorage.getItem("signupData")).username;

    //         alert(`First Name------: ${fname}`)
    //         updateState({
    //             fname:fname,
    //             lname:lname,
    //             password:password,
    //             confirmPwd:confirmPwd,
    //             email:email,
    //             dob:dob,
    //             adhar:adhar
    //         })
    //     }else{
    //         alert("User could not be Created....")
    //     }
    // },[])
   
    
    // const handleSubmit=()=>{
    //     if(validityCheck()){
    //         const profileData={
    //             password:state.password,
    //             fname:state.fname,
    //             lname:state.lname
    //         };
    //         try{
    //             console.log("Profile Data",JSON.stringify(profileData))
    //             let userId=JSON.parse(localStorage.getItem("signupData")).id
    //             alert("User Id:",userId);
    //             // updateProfile(profileData,userId)
    //         }catch(e){
    //             console.log(e.message)
    //         }
    //     }else{
    //         alert("Enter Valid Details...");
    //     }
    // };

    // const validityCheck=()=>{
    //     return(
    //         state.password === state.confirmPwd &&
    //         checkPassword(state.password)
    //     )
    // }

    // const checkPassword=(str)=>{
    //     var reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    //     return reg.test(str);
    // }


   
//       </div>
//             <div className='container  p-3 mb-5' bg-white mt-5 fullH rounded border>
//                 <h2>Profile</h2>
//                 <h5 className='mb-5'>Information of the user</h5>
//                 <div className="mb-4">
//                     <h3 className='font-weight-bold'>
//                         Edit Profile
//                         <sapn onClick={onEdit}>
//                             <button className="btn btn-outline-dark">&#9988;</button>
//                         </sapn>
//                     </h3>
//                 </div>

//                 <div>
//                     { !state.edit ? (
//                             <div>
//                                 <div>
//                                     <h5 className='d-inline'>First Name</h5>
//                                     <h5 className='d-inline pl-5 ml-5'>{state.fname}</h5>
//                                     <hr/>
//                                 </div>
//                                 <div>
//                                     <h5 className='d-inline'>Last Name</h5>
//                                     <h5 className='d-inline pl-5 ml-5'>{state.lname}</h5>
//                                     <hr/>
//                                 </div>
//                                 <div>
//                                     <h5 className='d-inline'>Email-Id</h5>
//                                     <h5 className='d-inline pl-5 ml-5'>{state.email}</h5>
//                                     <hr/>
//                                 </div>

//                                 <div>
//                                     <h5 className='d-inline'>Password</h5>
//                                     <h5 className='d-inline pl-5 ml-5'>****</h5>
//                                     <hr/>
//                                 </div>

//                                 <div>
//                                     <h5 className='d-inline'>DOB</h5>
//                                     <h5 className='d-inline pl-5 ml-5'>{state.dob}</h5>
//                                     <hr/>
//                                 </div>
//                                 <div>
//                                     <h5 className='d-inline'>Adhar Card Number</h5>
//                                     <h5 className='d-inline pl-5 ml-5'>{state.adhar}</h5>
//                                     <hr/>
//                                 </div>
//                             </div>
//                         ):(
//                             <div>
//                                 <div>
//                                     <h5 className="d-inline">First Name</h5>
//                                     <input
//                                     name='firstname'
//                                     className="d-inline pl-5 ml-5"
//                                     value={state.fname}
//                                     onChange={changeHandler} required/>
//                                     <hr/>
//                                 </div>

//                                 <div>
//                                     <h5 className="d-inline">Last Name</h5>
//                                     <input
//                                     name='lastname'
//                                     className="d-inline pl-5 ml-5"
//                                     value={state.lname}
//                                     onChange={changeHandler} required/>
//                                     <hr/>
//                                 </div>

//                                 <div>
//                                 <h5 className="d-inline">Email id</h5>
//                                 <input
//                                     name='email'
//                                     className="d-inline pl-5 ml-5"
//                                     value={state.email}
//                                     onChange={changeHandler} required/>
//                                    <h5 className="d-inline pl-5 ml-5">{state.email}</h5> 
//                                     <hr />
//                                 </div>

//                                 <div>
//                                     <h5 className="d-inline">Password</h5>
//                                     <input
//                                     name='password'
//                                     className="d-inline pl-5 ml-5"
//                                     value={state.password}
//                                     onChange={changeHandler} required/>
//                                       <small id="passwordHelpBlock" className="form-text text-muted">
//                                         Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
//                                         </small>
//                                     <hr/>
//                                 </div>

//                                 <div>
//                                     <h5 className="d-inline">Confirm password</h5>
//                                     <input
//                                     name='cpwd'
//                                     className="d-inline pl-5 ml-5"
//                                     value={state.confirmPwd}
//                                     onChange={changeHandler} required/>
//                                     <hr/>
//                                 </div>

//                                 <div>
//                                     <h5 className="d-inline">DOB</h5>
//                                     <input
//                                     name='dob'
//                                     className="d-inline pl-5 ml-5"
//                                     value={state.dob}
//                                     onChange={changeHandler} required/>
//                                     <hr/>
//                                 </div>

//                                 <div>
//                                     <h5 className="d-inline">Adhar Number</h5>
//                                     <input
//                                     name='lastname'
//                                     className="d-inline pl-5 ml-5"
//                                     value={state.adhar}
//                                     onChange={changeHandler} required/>
//                                     <hr/>
//                                 </div>
//                                 <button type="button" onClick={handleSubmit}
//                                  <button type="button" onClick={updateProfile} 

//                                 className="btn p-2 btn-primary">
//                                     Upadte
//                                 </button>

//                             </div>
//                         )
//                     }
                         
//                </div> 
// //              </div>

//         </>
//     )
// }

// export default Profile

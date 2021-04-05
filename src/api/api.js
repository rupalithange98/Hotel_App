import axios from "axios";
import store from "../store/store";

function addNewuser(data) {
    console.log("getting data", data)

    fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then(response => {
            console.log("success :", response)
        })
        .catch((err) => {
            console.log('error', err)
        })
   
}

// function updateProfile(userData, userId) {
//     console.log("recevied data", userData, "user ID", userId)
//     fetch(`http://localhost:5000/user/${userId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userData)
//     })
//         .then((data) => data.json())
//         .then(response => {
//             console.log("success :", response)
//             if (response.success === true) {
//                 // window.location.reload()
//                 localStorage.setItem("signupData", JSON.stringify(response.user));

//                 // store.dispatch({
//                 //     type: "UPDATE_USER_DETAILS",
//                 //     userData: response.user
//                 // });

//                 alert("update Successfully")
//                 return true
//             }
//         })
//         .catch((err) => {
//             console.log('error', err)
//         })
// }


// function getuser() {
//     fetch("http://localhost:5000/allusers")
//         .then((data) => data.json())
//         .then(response => {
//             console.log("responese ", response)
//         })
// }

// export { addNewuser, getuser, verifyLoginDetails, updateProfile };
export { addNewuser };

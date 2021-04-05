import React ,{useEffect}from 'react'


function Logout(props) {
    useEffect(()=>{
      localStorage.clear("signupData")
    },[])

    props.history.push("/")

    return (
        <div>
            From Logout
        </div>
    )
}

export default Logout

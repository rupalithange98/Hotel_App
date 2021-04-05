// import express from 'express';
// import cors from 'cors';
// import mysql from 'mysql';

const  express=require('express');
const cors=require('cors');
const mysql=require('mysql');

const app= express();

app.use(express.json());
app.use(cors())

const db =mysql.createConnection({
    user:"root",
    host:'localhost',
    password:'root',
    database:'hotelbook'
})

app.post('/register',(req,res)=>{

    const userName= req.body.email
    const password= req.body.password
    const fname = req.body.fname
    const lname = req.body.lname
    const confirmPwd = req.body.confirmPwd
    const dob = req.body.dob
    const adharNumber = req.body.adharNumber

    db.query("insert into user (username,password,fname,lname,confirmPwd,dob,adhar) values(?,?,?,?,?,?,?)",
    [userName,password,fname,lname,confirmPwd,dob,adharNumber],(err,result)=>{
        // console.log(result)
        // console.log(err)
        if(err){
            console.log(err)
        }else{
            res.send("values inserted...");
        }
    })
})




app.post('/booking',(req,res)=>{
    const hotelName=req.body.hotelName
    const address=req.body.address
    const checkIn=req.body.checkIn
    const checkOut=req.body.checkOut
    const children=req.body.children
    const person=req.body.adults
    const totalDays=req.body.totalDays
    const price=req.body.totalPrice

    db.query("insert into bookingdetails (hotelName,address,checkIn,checkOut,children,person,totalDays,price) values(?,?,?,?,?,?,?,?)",
    [hotelName,address,checkIn,checkOut,children,person,totalDays,price],(err,result)=>{
        // console.log(result)
        // console.log(err)
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted..")
            console.log(result)
        }
    })
})
app.post('/login',(req,res)=>{
    const userName= req.body.userName
    const password= req.body.password
    db.query("select * from user where username=? and password=?",[userName,password],(err,result)=>{
        console.log(result);
                    if(result.length>0){
                        console.log(result)
                        res.send(result)
                    }
                    else{
                        res.send({message:"Register First to Login"})
                }
    })
})


app.get('/getuser',(req,res)=>{
    db.query("select * from user",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Result",result);
            res.send(result)
        }
    })
})
//edit data
app.get('/getuser/:id',(req,res)=>{
    // const id=req.params.id;
    // console.log("edit Id:",id)
    db.query("select * from user where id="+req.params.id,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result);
        }
    })
})


//update Data

// app.put('/update',(req,res)=>{
//     let sql="update user set fname='"+req.body.fname+"', lname='"+req.body.lname+"',confirmPwd='"+req.body.confirmPwd+"',username='"+req.body.email+"',password='"+req.body.password+"',adhar='"+req.body.adharNumber+"'\
//     ,dob='"+req.body.dob+"'where id="+req.body.id;
//      db.query(sql,(err,result)=>{
//          if(err){
//              console.log(err)
//          }else{
//              console.log(result,"Record updated Succcessfully...")
//              res.send(res)
//          }
//      })
// })

app.put('/updateProfile/:id',(req,res)=>{
    const id=req.params.id;
    console.log("update id--",id)
    const newAdhar=req.body.adharNumber;
    console.log("Adhar--",newAdhar)
    const newPassword=req.body.password;
    console.log("Pwd--",newPassword)
    const fname=req.body.fname;
    const lname=req.body.lname;
    db.query("update user set fname=?,lname=?,password=?,adhar=? where id=?",[fname,lname,newPassword,newAdhar,id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log(res)
        }
    })
})



app.get('/getBooking',(req,res)=>{
    db.query("select * from bookingdetails",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Result",result);
            res.send(result)
        }
    })
})




// app.put('/update/:id',(req,res)=>{
//     const data=req.body
    
//     const id=req.params.id
//     alert(id)
//     const username=req.body.userName
//     db.query("update user set  username=?  where id=? ",
//     [username,id],
//     (err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(result)
//             res.send(result)
//         }
//     })
// })


app.delete('/delete/:hotelId',(req,res)=>{
    const id=req.params.hotelId;
    console.log("Id to delete---",id);
    db.query('delete from bookingdetails where bookId=?',id,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
})


app.delete('/deleteuser/:id',(req,res)=>{
    const id=req.params.id;
    console.log("Id to delete profile---",id);
    db.query('delete from user where id=?',id,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
})

app.listen(3001,()=>console.log("server has started"))
cors()

// const express=require('express');

// const app=express();

// app.get('/',(req,res)=>{
//     res.send('<h2> hello express js</h2>');
// })

// app.listen(3001,()=>{
//     console.log("Server started.... at port 3001");
// })
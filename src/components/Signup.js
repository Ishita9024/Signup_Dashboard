import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Signup.css'
export default function Signup() {
    const [username,setusername]=useState("")
    const [usererr,setUsererr]=useState("Username can't be empty")
    const [email,setemail]=useState("")
    const [emailerr,setEmailerr]=useState("Email can't be empty")
    const [password,setpassword]=useState("")
    const [passerr,setPasserr]=useState("Password can't be empty")
    const [verifypassword,setverifypassword]=useState("")
    const [verifyerr,setVerifyerr]=useState("Rewrite the password")
    const navigate=useNavigate()
    function validation(){
        if (username.length>=4 && username.length<15 && password===verifypassword && email.includes(".") && email.includes("@")){
            navigate('./dashboard')
        }
        else{
            alert("Please fill the data")
        }
    }
    return (
        <div className='main'>
            <h1>Sign Up</h1>
            <form action="">
                <div>
                    <label htmlFor='password'></label><br/>
                    <input type="text" placeholder='Username'autoComplete='off' onChange={(e)=>{
                        setusername(e.target.value)
                        if (e.target.value===""){
                            setUsererr("Username can't be empty")
                        }
                        else if (e.target.value.length<4 || e.target.value.length>10){
                            setUsererr("Please take the username with 4 or 10 letters")
                        }
                        else{
                            setUsererr("")
                        }
                    }}/>
                    <span style={{color:"white","marginLeft":"15%"}}>{usererr}</span>
                </div>
                <div>
                    <label htmlFor='password'></label><br/>
                    <input type="email" placeholder='Email'  autoComplete='off'  onChange={(e)=>{
                        setemail(e.target.value)
                        if (e.target.value===""){
                            setEmailerr("Email can't be empty")
                            
                        }
                        else if (!email.includes("@") || !email.includes(".")){
                            setEmailerr("Email is invalid, Please include @ & .")
                        }
                        else{
                            setEmailerr("")
                        }
                    }}></input>
                    <span style={{color:"white","marginLeft":"15%"}}>{emailerr}</span>
                </div>
                <div>
                    <label htmlFor='password'></label><br/>
                    <input type="password" placeholder='Set A Password'  autoComplete='off'   onChange={(e)=>{
                        setpassword(e.target.value)
                        if (e.target.value===""){
                            setPasserr("Password can't be empty")
                        }
                        else if (e.target.value.length<5){
                            setPasserr("Please create a strong password")
                        }
                        else{
                            setPasserr("")
                        }
                        
                    }}></input>
                    <span style={{color:"white","marginLeft":"15%"}}>{passerr}</span>
                </div>
                <div>
                    <label htmlFor='verify_password'></label><br/>
                    <input type="password" placeholder='Confirm Password' autoComplete='off'  onChange={(e)=>{
                        setverifypassword(e.target.value)
                        if (e.target.value===""){
                            setVerifyerr("Rewrite the password")
                        }
                        else if (e.target.value!==password){
                            setVerifyerr("Password doesn't match")
                        }
                        else{
                            setVerifyerr("")
                        }
                    }}></input>
                    <span style={{color:"white","marginLeft":"15%"}}>{verifyerr}</span>
                </div>
                <div>
                <label htmlFor='technologies'></label><br/>
                <select>
                    <option>Javascript</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>Scala</option>
                    <option>Spark</option>
                </select>
                
                </div>
                <label htmlFor='technologies'></label><br/>
                <button className="submitButton" type="submit" onClick={()=>validation()
                }><b>SUBMIT</b></button>
            </form>
            
        </div>
    )
}
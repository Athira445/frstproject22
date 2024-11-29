import React from 'react'
import './Login.css';
import { useForm } from 'react-hook-form'
const Login = () => {
    const{register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        console.log("Form Data:",data)
        axios.post("http://localhost:3000/users/login",data).then(response=>{
          console.log(response.data)
          alert("login successfull")
        })
        .catch(error=>console.log(error))
       
    };
  return (<>
  
    <h2>LOGINFORM</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div style={{marginBottom:'15px'}}>
    Email:<input {
        ...register("email",{
            required:"Email is required*"

        })
    } type="email" name="email" placeholder="Enter email"/>
    {
        errors.email && <p>
            {errors.email.message}
        </p>
    }
    </div> 
    <div  style={{marginBottom:'15px'}}>
     Password:<input {
          ...register("password" ,{
            required:"Password is required",minLength:{
                value:8,message:"password must be atleast 8 characters*"
            }
          })
     } type="password" name="password" placeholder="enter password"/>
      {
        errors.password && <p>
            {errors.password.message}
        </p>
    }

     </div> 
     <button type="submit">LOGIN</button></form>
     </>
  )
}

export default Login
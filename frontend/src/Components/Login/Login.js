import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css'
import { ThemeContext } from '../../Context/ThemeContext';

const Login = ({setUserAuth}) => {

    const navigate = useNavigate();
    const [data,setData] = useState({email:"",password:""});
    const theme = useContext(ThemeContext);

    function handleChange(e){
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        
        const res={data:{success:true}};

        const data=res.data;
        if(data.success){
            setUserAuth(true);
            navigate("/dashboard");
        }else{
            alert("You have not Autority to do this!")
        }
        setData({email:"",password:""});
    }

  return (
    <div className={`login-main ${theme && 'dark'}`}>
        <h1>Login</h1>
        <form className='login-form'>
            <input 
                name='email'
                value={data.email}
                onChange={handleChange}
                placeholder='Email'
                required
                type='email'
            />
            <input 
                name='password'
                value={data.password}
                onChange={handleChange}
                placeholder='Password'
                required
                type='password'
            />
            <button onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login
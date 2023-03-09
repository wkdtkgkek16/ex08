import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { app } from '../firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import './Login.css'

const Login = ({history}) => {
  const auth=getAuth(app);
  const [form, setForm] = useState({
    email:'user01@email.com',
    password:'12341234'
  });
  const {email, password} = form;
  const onSubmit = (e) => {
    e.preventDefault();
    //로그인체크
    signInWithEmailAndPassword(auth, email, password)
    .then((success)=>{
        alert("로그인성공!");
        sessionStorage.setItem('email', email);
        history.go(-1);
    })
    .catch((error)=>{
        alert("로그인실패!" + error.message);
    })
}
  
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div className='login'>
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
            <input name="email" value={email} onChange={onChange}/>
            <input name="password" type="password" value={password} onChange={onChange}/>
            <button>로그인</button>
            <Link to="/join">회원가입</Link>
        </form>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import logo_xxl from '../assets/img/logo-xxl.png'
import InptGroup from '../components/InptGroup'

const Login = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  return (
    <main class="main-site-home vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
      <div class="logo-xxl mb-5">
        <img src={logo_xxl} alt="Logo Talespawn" />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <form action="" class="d-flex flex-column justify-content-center align-items-center">
          <InptGroup name={'email'} type={'text'} label={'Email'} value={email} handleChange={setEmail} />
          <InptGroup name={'password'} type={'password'} label={'Password'} value={password} handleChange={setPassword} />
          <button class="btn-rpg mb-3" type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login

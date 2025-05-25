import React, { useState } from 'react'
import logo_xxl from '../assets/img/logo-xxl.png'
import InptGroup from '../components/InptGroup'

const Login = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const addClassInptGroup = {
    container: "w-100",
    label: "w-100",
    input: "w-100",
  }

  return (
    <main className="main-site-login vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
      <div className="logo-xxl mb-5">
        <img src={logo_xxl} alt="Logo Talespawn" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <form action="" className="d-flex flex-column justify-content-center align-items-center">
          <InptGroup addClass={addClassInptGroup} name={'email'} type={'text'} label={'Email'} value={email} handleChange={setEmail} />
          <InptGroup addClass={addClassInptGroup} name={'password'} type={'password'} label={'Password'} value={password} handleChange={setPassword} />
          <button className="btn-rpg mt-4 mb-3" type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login

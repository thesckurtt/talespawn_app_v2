import React from 'react'
import bg_home from '../assets/video/bg_home.mp4'
import logo_xxl from '../assets/img/logo-xxl.png'
const Home = () => {
  return (
    <>
      <video id="background-video" autoPlay loop muted playsInline>
        <source src={bg_home} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="overlay"></div>
      <main className="main-site-home vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
        <div className="logo-xxl mb-5">
          <img src={logo_xxl} alt="Logo Talespawn" />
        </div>
        <div className="d-flex flex-column">
          <button className="btn-rpg mb-3 c-pointer">Login</button>
          <button className="btn-rpg c-pointer">Register</button>
        </div>
      </main>
    </>
  )
}

export default Home

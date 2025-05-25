import React, { useState } from 'react'
import logo_md from '../assets/img/logo-md.png'
import Typewriter from 'typewriter-effect';

const Game = () => {
  const [isTyping, setIsTyping] = useState(false)

  return (
    <main className="main-site-chat vh-100 vw-100">
      <div className="header-site-chat d-flex justify-content-between align-items-center">
        <div className="logo-md">
          <img src={logo_md} alt="Logo Talespawn" />
        </div>
        <div>
          <i className="fa-solid fa-circle-info fs-3 color-gold c-pointer"></i>
          <i className="fa-solid fa-music fs-3 mx-4 color-gold c-pointer"></i>
        </div>
      </div>
      <div className="middle-site-chat">
        <div className="left-middle-chat">
          <div className="rpg-master-container justify-content-center mt-4">
            <div className="rpg-profile-picture">
              <img src="./img/rpg-master.jpg" alt="" />
            </div>
            {/* <div className="rpg-master-text">
              <p className="fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quasi ipsam cumque
                excepturi eum repudiandae provident. Voluptatum eveniet sint, dolores maiores qui culpa odit quas eligendi
                in nobis provident blanditiis.<br /><br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum culpa molestiae ratione
                dolorem modi itaque amet facilis vero nisi.<br /><br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum culpa molestiae ratione
                dolorem modi itaque amet facilis vero nisi.</p>
            </div> */}
            <div className="rpg-master-text fs-5">
              <Typewriter
                onInit={(typewriter) => {
                  setIsTyping(true)
                  typewriter
                    .typeString("Sua aventura começa agora...")
                    .callFunction(() => {
                      // alert("terminou de digitar!")
                      setIsTyping(false)
                    })
                    .start();
                }}

                options={{
                  autoStart: true,
                  loop: false,
                  delay: 75,
                  cursor: '',
                }}
              />
            </div>
          </div>
          {!isTyping && <div className="d-flex justify-content-around align-items-center">
            <button className="btn-rpg">Opção 1</button>
            <button className="btn-rpg">Opção 2</button>
          </div>}
        </div>
        <div className="right-middle-chat">
          <div className="character-info d-flex flex-column p-3 text-center justify-content-center align-items-center">
            <div className="rpg-profile-picture">
              <img src="./img/rpg-master.jpg" alt="" />
            </div>
            <h1 className="rpg-text-title fs-3 mt-3">Lorem Ipsum</h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum culpa
              molestiae ratione dolorem modi itaque amet facilis vero nisi.</p>
          </div>
          <div className="chat-mission-history">
            <div className="">
              <span className="rpg-text-title">Lorem Ipsum</span>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorum odio error
                voluptate ratione non ex molestias</p>
            </div>
            <div className="">
              <span className="rpg-text-title">Lorem Ipsum</span>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorum odio error
                voluptate ratione non ex molestias</p>
            </div>
            <div className="">
              <span className="rpg-text-title">Lorem Ipsum</span>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorum odio error
                voluptate ratione non ex molestias</p>
            </div>
            <div className="">
              <span className="rpg-text-title">Lorem Ipsum</span>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorum odio error
                voluptate ratione non ex molestias</p>
            </div>
            <div className="">
              <span className="rpg-text-title">Lorem Ipsum</span>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorum odio error
                voluptate ratione non ex molestias</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Game

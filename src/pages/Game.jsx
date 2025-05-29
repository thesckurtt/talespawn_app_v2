import React, { useEffect, useRef, useState } from 'react'
import logo_md from '../assets/img/logo-md.png'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import soundtrack from '../assets/audio/soundtrack_action.mp3'
import RPGMasterText from '../components/RPGMasterText';
import { BtnRPG } from '../components/BtnRPG';

const Game = () => {
  const { protectedRoute, user } = useAuth()
  const navigate = useNavigate()
  // console.log(user.name)

  protectedRoute()

  const { token } = useAuth();
  const [isTyping, setIsTyping] = useState(false)
  const refSoundTrack = useRef(null) // Trilha sonora
  const refSoundMaster = useRef(null) // Voz do narrador
  const [playSoundTrack, setplaySoundTrack] = useState(false)
  const [isInitialGame, setIsInitialGame] = useState(true)
  const [textToTypyng, setTextToTypyng] = useState('Olá olá mundo...')
  const [delayToTypyng, setDelayToTypyng] = useState(75)

  useEffect(() => {
    const sound = new Audio(soundtrack)
    refSoundTrack.current = sound

  }, [])

  useEffect(() => {
    if (isInitialGame) {
      // setTextToTypyng('.')
      setTextToTypyng('Nas profundezas de uma terra esquecida pelo tempo, heróis surgem para moldar seu destino...')
      setDelayToTypyng(60)
    }
  }, [isInitialGame])

  // UseEffect para controlar a soundtrack 
  useEffect(() => {
    // console.log(playSoundTrack)
    if (refSoundTrack.current) {
      if (playSoundTrack) {
        refSoundTrack.current.play()
      } else {
        refSoundTrack.current.pause()
      }
    }
    return () => {
      if (refSoundTrack.current) {
        if (playSoundTrack) {
          refSoundTrack.current.pause()
        }
      }
    }
  }, [playSoundTrack])

  return (
    <main className="main-site-chat vh-100 vw-100">
      <div className="header-site-chat d-flex justify-content-between align-items-center">
        <div className="logo-md">
          <img src={logo_md} alt="Logo Talespawn" />
        </div>
        <div>
          <i className="fa-solid fa-circle-info fs-3 color-gold c-pointer"></i>
          <i onClick={() => setplaySoundTrack((old) => !old)} className={`fa-solid fa-music ${playSoundTrack ? '' : 'inactive'} fs-3 mx-4 color-gold c-pointer`}></i>
          <i onClick={() => { navigate('/logout', { replace: true }) }} className="fa-solid fa-right-from-bracket fs-3 color-gold c-pointer"></i>
        </div>
      </div>
      <div className="middle-site-chat">
        <div className="left-middle-chat">
          <div className="rpg-master-container justify-content-center mt-4">
            <div className="rpg-profile-picture">
              <img src="./img/rpg-master.jpg" alt="" />
            </div>
            <RPGMasterText setIsTyping={setIsTyping} textToTypyng={textToTypyng} />
          </div>
          {!isTyping && isInitialGame && <div className="d-flex justify-content-around align-items-center">
            <BtnRPG label={'iniciar Jornada'}/>
          </div>}
        </div>
        <div className="right-middle-chat">
          <div className="character-info d-flex flex-column p-3 text-center justify-content-center align-items-center">
            <div className="rpg-profile-picture">
              <img src="./img/rpg-master.jpg" alt="" />
            </div>
            <h1 className="rpg-text-title fs-3 mt-3">{user.nickname}</h1>
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

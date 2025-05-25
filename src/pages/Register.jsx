import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import InptGroup from '../components/InptGroup';
import logo_xl from '../assets/img/logo-xl.png'
import bg_home from '../assets/video/bg_home.mp4'
import bg_video_character_1 from '../assets/video/character_1.mp4'
import bg_video_character_2 from '../assets/video/character_2.mp4'
import bg_video_character_3 from '../assets/video/character_3.mp4'
import bg_video_character_4 from '../assets/video/character_4.mp4'

import main_audio_character_1 from '../assets/audio/aud_1.mp3'
import main_audio_character_2 from '../assets/audio/aud_2.mp3'
import main_audio_character_3 from '../assets/audio/aud_3.mp3'
import main_audio_character_4 from '../assets/audio/aud_4.mp3'

const characters = [
  {
    id: 1,
    image: "./img/character_1.png",
    name: "Character 1",
    attributes: {
      magic: 0,
      attack: 2,
      healing: 0,
      perception: 5
    },
    bg_video: bg_video_character_1,
    main_audio: main_audio_character_1
  },
  {
    id: 2,
    image: "./img/character_2.png",
    name: "Character 2",
    attributes: {
      magic: 5,
      attack: 1,
      healing: 1,
      perception: 0
    },
    bg_video: bg_video_character_2,
    main_audio: main_audio_character_2
  },
  {
    id: 3,
    image: "./img/character_3.png",
    name: "Character 3",
    attributes: {
      magic: 0,
      attack: 5,
      healing: 0,
      perception: 2
    },
    bg_video: bg_video_character_3,
    main_audio: main_audio_character_3
  },
  {
    id: 4,
    image: "./img/character_4.png",
    name: "Character 4",
    attributes: {
      magic: 0,
      attack: 5,
      healing: 2,
      perception: 2
    },
    bg_video: bg_video_character_4,
    main_audio: main_audio_character_4
  }
];

const Register = () => {

  const navigate = useNavigate()

  const swiperRef = useRef(null);
  const formRef = useRef(null)
  const videoRef = useRef(null);

  const [characterSelectedIndex, setCharacterSelectedIndex] = useState(0)
  const [characterSelected, setCharacterSelected] = useState(characters[0])

  // Form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [backgroundCharacter, setBackgroundCharacter] = useState(bg_video_character_1)

  // useEffect para carregar o Swiper
  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, []);

  // useEffect para atualizar o vídeo de fundo do personagem
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [characterSelected.bg_video])

  // useEffect para reproduzir frase de efeito do personagem
  useEffect(() => {
    const sound = new Audio(characterSelected.main_audio)
    sound.
      sound.play()
  }, [characterSelected])

  return (
    <>
      <video ref={videoRef} id="background-video" autoPlay loop muted playsInline>
        <source src={characterSelected.bg_video} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      {/* <div className="overlay"></div> */}
      <div className="overlay-register"></div>
      <main className="main-site-register vh-100 vw-100">
        <div className="main-site-register-top d-flex align-items-center justify-content-center">
          <div className="logo-xl top-20">
            <img src={logo_xl} alt="Logo Talespawn" />
          </div>
        </div>

        <div className="main-site-register-middle">
          <div className="right-border d-flex justify-content-center align-items-center">
            <form action="#" className="rpg-form" ref={formRef}>
              <InptGroup name={'name'} type={'text'} label={'Nome'} value={name} handleChange={setName} />
              <InptGroup name={'email'} type={'email'} label={'E-mail'} value={email} handleChange={setEmail} />
              <InptGroup name={'password'} type={'password'} label={'Senha'} value={password} handleChange={setPassword} />
              <InptGroup name={'nickname'} type={'text'} label={'Nick'} value={nickname} handleChange={setNickname} />
            </form>
          </div>

          <div className="main-site-register-middle-characters d-flex justify-content-center align-items-center">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              spaceBetween={30}
              onSlideChange={(swiper) => {
                const index = swiper.realIndex
                setCharacterSelectedIndex(index)
                setCharacterSelected(characters[index])
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              className="mySwiper"
            >
              {characters && characters.map(character => {
                return (
                  <SwiperSlide key={character.id}><img src={character.image} alt="Personagem 1" /></SwiperSlide>
                )
              })}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>

          <div className="left-border d-flex px-4 justify-content-start align-items-center">
            <div>
              <h1 className="rpg-text-title mb-4">Atributos</h1>
              <div className="mb-3">
                <span className="rpg-text-title fs-2">Magia</span>
                <div className="progress-container">
                  {[...Array(5)].map((_, i) => <div key={i} className={`pc-dot ${characterSelected.attributes.magic >= i ? "full" : ""}`}></div>)}
                </div>
              </div>
              <div className="mb-3">
                <span className="rpg-text-title fs-2">Ataque</span>
                <div className="progress-container">
                  {[...Array(5)].map((_, i) => <div key={i} className={`pc-dot ${characterSelected.attributes.attack >= i ? "full" : ""}`}></div>)}
                </div>
              </div>
              <div className="mb-3">
                <span className="rpg-text-title fs-2">Cura</span>
                <div className="progress-container">
                  {[...Array(5)].map((_, i) => <div key={i} className={`pc-dot ${characterSelected.attributes.healing >= i ? "full" : ""}`}></div>)}
                </div>
              </div>
              <div className="mb-3">
                <span className="rpg-text-title fs-2">Percepção</span>
                <div className="progress-container">
                  {[...Array(5)].map((_, i) => <div key={i} className={`pc-dot ${characterSelected.attributes.perception >= i ? "full" : ""}`}></div>)}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="main-site-register-bottom d-flex justify-content-center align-items-center p-3">
          <button className="btn-rpg">Registrar</button>
        </div>
      </main>
    </>
  );
};

export default Register;

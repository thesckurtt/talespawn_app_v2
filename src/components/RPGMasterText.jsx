import React from 'react'
import Typewriter from 'typewriter-effect';

const RPGMasterText = ({setIsTyping, textToTypyng }) => {
  return (
    <div className="rpg-master-text fs-5">
      <Typewriter
        onInit={(typewriter) => {
          setIsTyping(true)
          typewriter
            .typeString(textToTypyng)
            .callFunction(() => {
              // alert("terminou de digitar!")
              setIsTyping(false)
            })
            .start();
        }}

        options={{
          autoStart: true,
          loop: false,
          delay: 45,
          cursor: '',
        }}
      />
    </div>
  )
}

export default RPGMasterText

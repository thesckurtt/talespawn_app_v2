import React from 'react'
import Typewriter from 'typewriter-effect';

const RPGMasterText = ({ setIsTyping, textToTyping }) => {
  return (
    <div className="rpg-master-text fs-5">
      <Typewriter
        key={textToTyping}
        onInit={(typewriter) => {
          setIsTyping(true)
          typewriter
            .typeString(textToTyping)
            .callFunction(() => {
              // alert("terminou de digitar!")
              setIsTyping(false)
            })
            .start();
        }
        }

        options={{
          autoStart: true,
          loop: false,
          delay: 45,
          cursor: '',
          html: true
        }}
      />
    </div>
  )
}

export default RPGMasterText

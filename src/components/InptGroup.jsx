import React from 'react'

const InptGroup = ({ addClass = null, name, type, label, handleChange, value }) => {
  return (
    <div className={`d-flex flex-column justify-content-start align-items-start mb-3 ${addClass ? addClass.container : ''}`}>
      <label htmlFor={name} className={`label-rpg fs-3  ${addClass ? addClass.label : ''}`}>{label}</label>
      <input type={type} id={name} name={name} className={`inpt-rpg ${addClass ? addClass.input : ''}`} value={value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default InptGroup

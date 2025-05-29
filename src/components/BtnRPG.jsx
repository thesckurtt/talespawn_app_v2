import React from "react";

export const BtnRPG = ({ label, handleClick }) => {
  return <button onClick={handleClick} className="btn-rpg">{label}</button>;
};

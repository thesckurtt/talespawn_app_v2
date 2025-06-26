import React from "react";

export const BtnRPG = ({ label, handleClick, option }) => {
  return <button onClick={() => handleClick(option)} className="btn-rpg">{label}</button>;
};

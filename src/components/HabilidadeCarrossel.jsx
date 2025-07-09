// src/components/HabilidadeCarousel.jsx
import React, { useEffect, useState } from 'react';
import './HabilidadeCarrossel.css';

const habilidadeInfo = {
  magic: {
    nome: 'Magia',
    descricao: 'Representa a inteligência e o domínio arcano do personagem.'
  },
  attack: {
    nome: 'Ataque',
    descricao: 'Mede a força física e a capacidade de combate direto.'
  },
  healing: {
    nome: 'Cura',
    descricao: 'Indica a habilidade de restaurar a vida e ajudar aliados.'
  },
  perception: {
    nome: 'Percepção',
    descricao: 'Reflete a consciência, intuição e vigilância do personagem.'
  }
};

const HabilidadeCarrossel = ({ attributes }) => {
  const keys = Object.keys(attributes);
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % keys.length);
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(intervalo);
  }, [keys.length]);

  const chaveAtual = keys[indexAtual];
  const { nome, descricao } = habilidadeInfo[chaveAtual];
  const valor = attributes[chaveAtual];

  return (
    <div className="habilidade-carousel text-white mt-4 px-3">
      <h2 className="rpg-text-title mb-2">{nome}</h2>
      <p className="mb-1">{descricao}</p>
      <p><strong>Valor:</strong> {valor}</p>
    </div>
  );
};

export default HabilidadeCarrossel;

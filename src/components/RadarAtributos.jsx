import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

// Cores por personagem
const coresPorPersonagem = {
  1: '#00c6ff', // Azul
  2: '#ff00ff', // Magenta
  3: '#00ff99', // Verde água
  4: '#ffaa00', // Laranja
};

// Ícones SVG fixos para cada atributo, com posição manual dentro do tick
const iconMap = {
  Magia: (
    // <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffaa00" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate(163px, 9px)' }}>
    //   <circle cx="12" cy="12" r="10" />
    // </svg>

    <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{ transform: 'translate(163px, 9px)' }} aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M57.047 26.167s-3.049 2.77-8.145 6.074C47.512 24.159 43.656 14.182 36.02 2c0 0-2.497 13.067-10.813 25.435c-3.629-5.598-5.186-9.993-5.186-9.993C-6.145 43.521 15.545 62 29.167 62c17.484 0 32.87-8.361 27.88-35.833M30.063 60.332c-3.81 0-12.314-2.656-16.425-14.883c0 0 1.477.756 3.879 1.631c.098-4.227 1.797-9.636 6.144-16.46c0 0 1.09 2.93 3.63 6.662c5.821-8.246 7.569-16.961 7.569-16.961c5.346 8.125 8.045 14.778 9.019 20.167c3.566-2.204 5.701-4.052 5.701-4.052c-.243 5.423-1.29 9.673-2.805 12.995c2.385-.391 3.892-.807 3.892-.807C43.8 58.322 36.87 60.332 30.063 60.332" fill="#ffaa00"></path><path d="M21.897 43.854s2.805 3.826 4.938 2.902c0 0 4.055-6.301 9.874-9.804c0 0-1.195 9.606.179 11.304c1.822 2.258 6.759-2.504 6.759-2.504c0 5.676-6.231 12.828-11.806 12.828c-5.535 0-13.382-6.156-9.944-14.726" fill="#ffaa00"></path><path d="M49.84 18.118c2.101-3.041 3.529-6.156 3.529-6.156c3.523 5.775 1.444 9.287-.104 10.434c-2.077 1.542-5.85-.763-3.425-4.278" fill="#ffaa00"></path><path d="M11.497 17.131C9.441 13.606 9.21 9.213 9.21 9.213C4.187 16.76 6.149 20.87 7.82 22.114c2.242 1.67 6.05-.91 3.677-4.983" fill="#ffaa00"></path><path d="M23.183 9.291c.256-2.369-.737-4.826-.737-4.826c4.764 3.064 4.707 5.733 4.086 6.772c-.837 1.394-3.646.791-3.349-1.946" fill="#ffaa00"></path></svg>
  ),
  Ataque: (
    <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate(314px, 163px)' }}><path fill="#ffaa00" d="M101.938 19.938c-8.837 0-15.813 6.978-15.813 15.812 0 7.358 4.84 13.427 11.563 15.25l23.134 55.4c-12.618 7.364-23.065 19.85-30.17 37.528L64.22 163.75l11.218 14.938 8.177-6.135c31.722-21.112 72.4-39.987 110.12-49.975l27.327-4.078-2.78-18.5-33.294 4.982c-13.01-4.957-25.152-7.096-36.113-6.607-3.67.164-7.202.62-10.6 1.334l-23.088-55.304c1.6-2.48 2.532-5.436 2.532-8.656 0-8.837-6.945-15.813-15.782-15.813zM178.81 147c-17.714 6.11-35.908 13.923-52.875 22.656l68.407 165.03 14.625-7.842 28.28-38.75L178.812 147zm169.094 111.53l-68.125 3.033-56.967 78-1.25 1.718-1.875 1.033-65.313 35.03-28.47 117.188h345.25l-15-63.686-165.56-54.688 5.874-17.75 89.905 29.688-38.47-129.563z" /></svg>
  ),
  Cura: (
    // <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffaa00" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate(163px, 314px)' }}>
    //   <path d="M12 2v20M2 12h20" stroke="#ffaa00" strokeWidth="2" />
    // </svg>

    <svg fill="#ffaa00" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate(163px, 314px)' }}>
      <title>health</title>
      <path d="M27 28.031h-2v1.938h-4v-1.938h-11v1.938h-4v-1.938h-2c-1.105 0-2-0.896-2-2v-17c0-1.105 0.895-2 2-2h23c1.104 0 2 0.896 2 2v17c0 1.105-0.896 2-2 2zM20.999 16.031h-3.999v-4h-3v4h-4v3h4v4h3v-4h3.999v-3zM19 4.010h-6v2.021h-2v-0.979h1v-3.021h7.958v3h1.042v1h-2v-2.021z"></path>
    </svg>
  ),
  Percepção: (
    // <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffaa00" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate(11px, 163px)' }}>
    //   <circle cx="12" cy="12" r="5" />
    //   <circle cx="12" cy="12" r="10" strokeDasharray="4 2" />
    // </svg>

    <svg width="40" height="40" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style={{ transform: 'translate(2px, 156px)' }} version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve">
      <path fill="#ffaa00" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 37.2083,15.8334C 46.7083,19 35.625,20.5833 41.1667,25.3333L 52.25,25.3334L 52.25,36.4167C 57,41.9584 58.5833,30.875 61.75,40.375C 58.5833,49.875 57,38.7917 52.25,44.3334L 52.25,57L 41.1667,57C 35.625,52.25 46.7083,50.6667 37.2083,47.5C 27.7083,50.6667 38.7917,52.25 33.25,57L 20.5833,57L 20.5833,44.3333C 25.3333,38.7917 26.9167,49.875 30.0833,40.375C 26.9167,30.875 25.3333,41.9583 20.5833,36.4167L 20.5833,25.3333L 33.25,25.3333C 38.7916,20.5833 27.7083,19 37.2083,15.8334 Z " />
    </svg>
  ),
};

// Componente que renderiza o ícone fixo no lugar da label do tick
const CustomTick = ({ payload }) => {
  return iconMap[payload.value] || null;
};

const RadarAtributos = ({ attributes, characterId }) => {
  const data = [
    { atributo: 'Magia', valor: attributes.magic },
    { atributo: 'Ataque', valor: attributes.attack },
    { atributo: 'Cura', valor: attributes.healing },
    { atributo: 'Percepção', valor: attributes.perception },
  ];

  const cor = coresPorPersonagem[characterId] || '#8884d8';

  return (
    <div style={{ width: 350, height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#aaa" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="atributo"
            tick={CustomTick}   // Aqui troca o texto pelos ícones fixos
            isAnimationActive={true}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 5]}
            tick={false}
            tickCount={6}
            stroke="#ccc"
          />
          <Radar
            name="Atributos"
            dataKey="valor"
            stroke={cor}
            fill={cor}
            fillOpacity={0.5}
            isAnimationActive={true}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarAtributos;

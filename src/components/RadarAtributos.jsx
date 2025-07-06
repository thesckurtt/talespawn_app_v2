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

const RadarAtributos = ({ attributes, characterId }) => {
  const data = [
    { atributo: 'Magia', valor: attributes.magic },
    { atributo: 'Ataque', valor: attributes.attack },
    { atributo: 'Cura', valor: attributes.healing },
    { atributo: 'Percepção', valor: attributes.perception },
  ];

  //ela altera a cor do gráfico de acordo com a classe
  const cor = coresPorPersonagem[characterId] || '#8884d8';

  return (
    <div style={{ width: 350, height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#aaa" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="atributo"
            tick={{ fill: '#fff', fontSize: 14, fontWeight: 'bold' }}
            isAnimationActive={true}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 5]}
            tick={{ fill: '#ccc', fontSize: 12 }}
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

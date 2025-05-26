exports.seed = async function(knex) {
  return knex('characters').del()
    .then(() => {
      return knex('characters').insert([
        {
          name: 'Ladino',
          image: '',
          description: 'Mestre da furtividade e da astúcia, o Ladino é capaz de se infiltrar em qualquer lugar sem ser notado, utilizando sua habilidade com adagas e truques para surpreender os inimigos.'
        },
        {
          name: 'Mago',
          image: '',
          description: 'Estudioso das artes arcanas, o Mago manipula os elementos da natureza com feitiços poderosos, preferindo a inteligência à força bruta.'
        },
        {
          name: 'Guerreiro',
          image: '',
          description: 'Treinado nas artes do combate, o Guerreiro é a linha de frente do grupo, utilizando armaduras pesadas e espadas largas para proteger seus aliados e esmagar os inimigos.'
        },
        {
          name: 'Arqueira',
          image: '',
          description: 'Com olhos afiados e mãos firmes, a Arqueira domina o arco e flecha, atacando à distância com precisão letal e movendo-se rapidamente pelos campos de batalha.'
        },
      ]);
    });
};

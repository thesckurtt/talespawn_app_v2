exports.seed = async function (knex) {
  return knex('characters').del()
    .then(() => {
      return knex('characters').insert([
        {
          name: 'Ladino',
          image: 'img/character_1.png',
          description: 'Mestre da furtividade e da astúcia, o Ladino é capaz de se infiltrar em qualquer lugar sem ser notado, utilizando sua habilidade com adagas e truques para surpreender os inimigos.',
          bg_video: 'video/character_1.mp4',
          main_audio: 'audio/aud_1.mp3',
          magic: 0,
          attack: 2,
          healing: 0,
          perception: 5

        },
        {
          name: 'Mago',
          image: 'img/character_2.png',
          description: 'Estudioso das artes arcanas, o Mago manipula os elementos da natureza com feitiços poderosos, preferindo a inteligência à força bruta.',
          bg_video: 'video/character_2.mp4',
          main_audio: 'audio/aud_2.mp3',
          magic: 5,
          attack: 1,
          healing: 1,
          perception: 0
        },
        {
          name: 'Guerreiro',
          image: 'img/character_3.png',
          description: 'Treinado nas artes do combate, o Guerreiro é a linha de frente do grupo, utilizando armaduras pesadas e espadas largas para proteger seus aliados e esmagar os inimigos.',
          bg_video: 'video/character_3.mp4',
          main_audio: 'audio/aud_3.mp3',
          magic: 0,
          attack: 5,
          healing: 0,
          perception: 2
        },
        {
          name: 'Arqueira',
          image: 'img/character_4.png',
          description: 'Com olhos afiados e mãos firmes, a Arqueira domina o arco e flecha, atacando à distância com precisão letal e movendo-se rapidamente pelos campos de batalha.',
          bg_video: 'video/character_4.mp4',
          main_audio: 'audio/aud_4.mp3',
          magic: 0,
          attack: 5,
          healing: 2,
          perception: 2
        },
      ]);
    });
};

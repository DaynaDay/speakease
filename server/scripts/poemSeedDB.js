const db = require('../config/connection');
const { User, Poem } = require('../models');

const userSeed = {
  username: 'Dayna',
  password: 'password1234',
};

const poemSeed = [
  {
    title: 'Ludus',
    theme: 'Love',
    poem: 'Heat setting in slow A cool hand across neck Even greater heat',
  },
  {
    title: 'Bloom',
    theme: 'Love',
    poem: 'Bright lights flash by usA cool drink and warm laughterThree breaths entwined',
  },
  {
    title: 'Pants',
    theme: 'Sadness',
    poem:
      'I wore pants to your funeral,Missed the sharp looks and sharper judgment of what is proper church attire.You thought more of propriety than ease, early morning squabbles that turnedEven heat into quiet love and affection, theMore I think, the more, I cry, the more I miss you',
  },
  {
    title: 'Birthday Girl',
    theme: 'Sadness',
    poem: 'Today rained heavySilence on a grave filled hillHappy Birthday Ma',
  },
  {
    title: 'Cold',
    theme: 'Nature',
    poem: 'The cold won’t go away.June is January, March is now May,A sharp wind blowsWarm winds a feint memory',
  },
  {
    title: 'Surplus',
    theme: 'Nature',
    poem:
      'There is a surplus of you of your scent.You linger like white wine and orangesIn a visit to a small town in Naples.You visit like a summer feverTo hot and all consumingYet stroking the heat from my faceA small stream flowing through parched forest',
  },
  {
    title: 'Little Bird',
    theme: 'Hope',
    poem:
      'Come little bird, sit upon my windowShow me your broken wingsLet me fix it so that I learn to fix my own Maybe we both may fly with some tender care ',
  },
  {
    title: 'Color Me In',
    theme: 'Hope',
    poem:
      'I see in blue A deflated blue balloon forgotten,Litter best trampled.I see reds and brownsBlood on broke door handles andDirt gone old.There are things left outBlank spots and empty memoriesOf other colors, other happier associations.I wonder if I will know happiness tastes likeWonder if love is as strong as the smell of copperJust as bright and all consumingI wonder.',
  },
];

db.once('open', async () => {
  const createdPoems = await Poem.insertMany(poemSeed);

  const poemIds = createdPoems.map(({ _id }) => _id);

  await User.create({ ...userSeed, poems: poemIds });

  process.exit(0);
});

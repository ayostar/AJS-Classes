const typesCharacter = [
  'Bowerman',
  'Daemon',
  'Magician',
  'Swordsman',
  'Undead',
  'Zombie',
];

const possibleErrorTypes = {
  name: 'Введите имя от 2 до 10 символов!',
  type: 'Введите допустимое имя персонажа!',
  levelup: 'Нельзя повысить левел умершего!',
};

const t0 = performance.now();
const type = 'Bowerman';

if (!typesCharacter.includes(type)) {
  throw new Error(possibleErrorTypes.type);
}

const t1 = performance.now();

console.log(t1 - t0, 'milliseconds');

const t2 = performance.now();
const _type = 'Bowerman';

if (typesCharacter.indexOf(type) === -1) {
  throw new Error(possibleErrorTypes.type);
}

const t3 = performance.now();

console.log(t3 - t2, 'milliseconds');

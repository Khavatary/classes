import Character from '../char';

test('chek Character', () => {
  const ch1 = new Character('Belk', 'Zombie');
  const result = {
    name: 'Belk', type: 'Zombie', health: 100, level: 1,
  };

  expect(ch1).toEqual(result);
});

test('check Character error type', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character(1, 'Zombie');
  }).toThrow();
});

test('check lvlUp', () => {
  const player = new Character('Belk', 'Zombie');
  player.health = 0;
  expect(() => {
    player.levelUp();
  }).toThrow();
});

test('check healthUp', () => {
  const player = new Character('Belk', 'Zombie');
  player.health = 50;
  player.levelUp();
  expect(player.health).toBe(100);
});

test('check damage', () => {
  const player = new Character('Belk', 'Zombie');
  player.defence = 50;
  player.health = 50;
  player.damage(40);
  expect(player.health).toBe(30);
});

test('check Character type', () => {
  const char = new Character('Belk', 'Daemon');
  const expected = {
    name: 'Belk', type: 'Daemon', health: 100, level: 1,
  };
  expect(char).toEqual(expected);
});

test('check Character type 2', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character('Belk', 123123123);
  }).toThrow();
});

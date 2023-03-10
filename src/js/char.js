export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка ввода имени!');
    }
    if (types.includes(type) === false) {
      throw new Error('Ошибка ввода типа!');
    }
    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

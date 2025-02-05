// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strenght) {
    super(health, strenght);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health !== 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    const vikingArmy = [];
    const saxonArmy = [];
  }

  addViking() {}
  addSaxon() {}
  vikingAttack() {}
  saxonAttack() {}
  showStatus() {}
}

//to create street fighter as a template and this makes it hard to nstantitiate street fighter directly
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }
  //  with abstract the function cannot have any implementation
  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class ChunLi extends StreetFighter {

  getSpecialAttack(): string {
    return "Lightning Kick";
  }

  get name(): string {
    return "Chun-Li";
  }
  
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }
  get name(): string {
    return "ryu";
  }
}

//  we cant instantiate stree fighter as it is abstract
//  const ryu = new StreetFighter();
const ryu = new Ryu();
const chunLi = new ChunLi();

// console.log(ryu.getSpecialAttack());
chunLi.fight();
ryu.fight();
// console.log(ryu.fight());

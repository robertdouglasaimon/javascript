// char e oponente

class Personagem {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    agility = 0;

    constructor (name) {
        this.name = name;
    }


    get life () {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Cavaleiro extends Personagem {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 30;
        this.defense = 15;
        this.agility = 5;
        this.maxLife = this.life;
    }
}


class Paladino extends Personagem {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 15;
        this.defense = 30;
        this.agility = 5;
        this.maxLife = this.life;
    }
}


class Caçador extends Personagem {
    constructor(name) {
        super(name);
        this.life = 90;
        this.attack = 15;
        this.defense = 5;
        this.agility = 30;
        this.maxLife = this.life;
    }
}


class MonstroMenor extends Personagem {
    constructor () {
        super('Valkyria Randrigs');
        this.life =  120;
        this.attack = 30;
        this.defense = 5;
        this.agility = 10;
        this.maxLife = this.life;
    }
}

class MonstroMaior extends Personagem {
    constructor () {
        super('Satan Morroc');
        this.life =  200;
        this.attack = 20;
        this.defense = 20;
        this.agility = 3;
        this.maxLife = this.life;
    }
}

class Chefao extends Personagem {
    constructor () {
        super('King Tristan III');
        this.life =  300;
        this.attack = 30;
        this.defense = 20;
        this.agility = 10;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1EL, fighter2EL) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;
    }

    start()  {
        this.update();

        //TODO: Evento do botão de atacar.
        this.fighter1EL.querySelector('.attackButton').addEventListener('click', () => this.doAtacck(this.fighter1, this.fighter2));

        this.fighter2EL.querySelector('.attackButton').addEventListener('click', () => this.doAtacck(this.fighter2, this.fighter1));

    }

    update() {
        //Fighter 1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1EL.querySelector('.lifebar .bar').style.width = `${f1Pct}%`


        //Fighter 2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2EL.querySelector('.lifebar .bar').style.width = `${f2Pct}%`
    }

    doAtacck(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log (`Atacando o morto`);
            return;
        } 

        let attackFactor = (Math.random() * 2).toFixed(2);
        // console.log(attackFactor);

        let defenseFactor = (Math.random() * 2).toFixed(2);
        console.log(defenseFactor);


        let actualAttack = attacking.attack * attackFactor;
        // console.log(actualAttack);

        let actualDefense = attacked.defense * defenseFactor;
        console.log(actualDefense);

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            console.log(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        } else {
            console.log(`${attacked.name} conseguiu defender!`);
        }

        this.update();
    }
}
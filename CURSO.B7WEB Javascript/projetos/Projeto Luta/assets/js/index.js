// char e oponente

class Personagem {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

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

class Ryu extends Personagem {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 10;
        this.maxLife = this.life;
    }
}


class Ken extends Personagem {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 7;
        this.maxLife = this.life;
    }
}


class ChunLi extends Personagem {
    constructor(name) {
        super(name);
        this.life = 90;
        this.attack = 15;
        this.defense = 10;
        this.maxLife = this.life;
    }
}

class Sakura extends Personagem {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 20;
        this.defense = 9;
        this.maxLife = this.life;
    }
}

let char = new Ryu ('Ryu');
console.log(char.name)
console.log(char.attack)
console.log(char.defense)
console.log(char.life)
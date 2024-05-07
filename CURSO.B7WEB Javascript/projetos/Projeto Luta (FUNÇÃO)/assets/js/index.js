let defaultCharacter = {
    name:'',
    life: 1,
    maxLife:1,
    attack:0,
    defense:0,
    agility:0
}


let criarPaladino = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 7,
        defense: 10,
        agility:3
    }
}


let criarCavaleiro = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8,
        agility: 5
    }
}   


let criarMago = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 5,
        mattack: 10,
        defese: 3,
        agility: 1
    }
}


let criarCaçador = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 90,
        maxLife: 90,
        attack: 8,
        defese: 3,
        agility: 10
    }
}


//MONSTROS!

let MonstroMenor = () => {
    return {
        ...defaultCharacter,
        name: 'Valkyria Randrigs',
        life: 120,
        maxLife: 120,
        attack: 30,
        defense: 5,
        agility: 10
    }
}

let MonstroMaior = () => {
    return {
        ...defaultCharacter,
        name: 'Satan Morroc',
        life: 300,
        maxLife: 300,
        attack: 30,
        defense: 20,
        agility: 3
    }
}

let Chefao = () => {
    return {
        ...defaultCharacter,
        name: 'King Tristan III',
        life: 200,
        maxLife: 200,
        attack: 20,
        defense: 20,
        agility: 10
    }
}

const stage =  {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;


        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },

    update() {
        //FIGHTER 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`; 


        //FIGHTER 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`; 
    },

    doAttack(attacking, attacked){
        
        this.update();
    }
}

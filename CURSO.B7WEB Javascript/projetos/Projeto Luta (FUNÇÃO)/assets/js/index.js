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
        attack: 20,
        defense: 30,
        agility:3
    }
}


let criarCavaleiro = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 30,
        defense: 20,
        agility: 10
    }
}   


let criarMago = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 90,
        maxLife: 80,
        attack: 5,
        mattack: 30,
        defese: 10,
        agility: 1
    }
}


let criarCaçador = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 90,
        maxLife: 90,
        attack: 20,
        defese: 3,
        agility: 30
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
        if(attacking.life <= 0 || attacked.life <= 0) {
           log.addMessage('Morto não pode atacar!');
            return;
        }

        const attackFactor = (Math.random() *2).toFixed(2);
        const defenseFactor = (Math.random() *2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -=actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano!`)
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`);
        }

        this.update();
    }
}

const log = { //LOG DO JOGO
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';


        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}
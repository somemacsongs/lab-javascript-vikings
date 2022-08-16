// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(demage){
        this.health -= demage;
    } 
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) { 
        super (health, strength); 
        this.name = name; 
        
    }
    receiveDamage(demage){
            this.health -= demage;
            if (this.health>0) return `${this.name} has received ${demage} points of damage`;
            else return `${this.name} has died in act of combat`;
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(demage){
        this.health -= demage;
        if (this.health>0) return `A Saxon has received ${demage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const result = randomSaxon.receiveDamage(randomViking.attack());
        if(randomSaxon.health<=0) {this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);}
        return result;
    }
    saxonAttack(){
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const result = randomViking.receiveDamage(randomSaxon.attack());
        if(randomViking.health<=0) {this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);}
        return result;
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}

//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this.species;
	}
	set species(species){
		this.species=species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
		this.sound="woof";
	}
	bark(){
		console.log(this.sound);
	}
	
}

class Cat extends Animal {
	constructor(species){
		super(species);
		this.sound="purr";
	}
	purr(){
		console.log(this.sound);
	}
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

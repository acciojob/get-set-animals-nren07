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
		console.log('The ${this.species} makes a sound');
	}
}

class Dog extends Animal {
	let sound="woof"
	constructor(species){
		super(species);
	}
	bark(){
		console.log(sound);
	}
	
}

class Cat extends Animal {
	let sound="purr"
	constructor(species){
		super(species);
	}
	purr(){
		console.log(sound);
	}
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

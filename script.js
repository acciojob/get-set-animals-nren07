//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this.species;
	}
	makeSound(logs){
		console.log(logs);
	}
}

class Dog extends Animal {
	let sound="woof";
	bark(){
		makeSound(sound);
	}
	
}

class Cat extends Animal {
	const sound="purr";
	purr(){
		makeSound(sound);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

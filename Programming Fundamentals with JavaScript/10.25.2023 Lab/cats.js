function createCats(catData) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let data of catData) {
        let [name, age] = data.split(' ');
        age = Number(age);
        const cat = new Cat(name, age);
        cat.meow();
    }
}

createCats(['Mellow 2', 'Tom 5']);
// createCats(['Candy 1', 'Poppy 3', 'Nyx 2']);
//Oyuncu oyuna girdiğinde, ona rastgele bir hayvan atanacak
//characters/animalFactory.js

import { Chicken } from './Chicken.js';
import { Cow } from './Cow.js';

const animalClasses = [ 
    Chicken,
    Cow
    // İleride: Cow
    // İleride: Sheep
    // İleride: Pig
    // İleride: Horse
    // İleride: Duck
    // İleride: Wolf
    // İleride: Fox
    // İleride: Dog
    // İleride: Cat
    // İleride: Rabbit
    // İleride: Lion
    // İleride: Tiger
    // İleride: Bear
    // İleride: Elephant
    // İleride: Giraffe
    // İleride: Zebra
    // İleride: Hippo
    // İleride: Turtle
];

export function getRandomAnimal(options) {
    const AnimalClass = animalClasses[Math.floor(Math.random() * animalClasses.length)];
    return new AnimalClass(options);
}

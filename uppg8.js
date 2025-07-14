

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
// Skapa en array med fem personobjekt

const personer = [
    { name: "Peter", age: 22 },
    { name: "Hans", age: 33 },
    { name: "Sara", age: 44 },
    { name: "Alfons", age: 55 },
    { name: "Ida", age: 66 }
];

const personerOver30 = (personArr) =>  {
    for (let person of personArr) {
        if (person.age > 30) {
            console.log(person.name);
        }
    }
}

personerOver30(personer);

}

module.exports = { uppg8 };
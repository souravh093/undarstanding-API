const user = {
    id: 1,
    name: 'Doe',
    job: 'Doctor'
}

// (J)ava(S)cript (O)bject (N)otation (JSON)

const stringified = JSON.stringify(user); 

// console.log(user);
// console.log(stringified);


/**
   { id: 1, name: 'Doe', job: 'Doctor' }
   {"id":1,"name":"Doe","job":"Doctor"}
 */



const shop = {
    owner: 'Alia',
    address: {
        street: 'Kockhaet location Mili',
        city: 'Molbazer',
        country: 'Bangladesh'
    },
    product: ['laptop', 'microphone', 'monitor', 'keyboard', 'phone'],
    revenue: 49000,
    isOpen: true,
    isNew: false
}
const shopJson = JSON.stringify(shop);
console.log(shop);
console.log(shopJson);

const shopObject = JSON.parse(shopJson);
console.log(shopObject);
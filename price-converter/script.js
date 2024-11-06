// ticket prices in US dollars
const ticket = 9.49;
const ticket3D = 12.49
const ticketImax = 13.49;
const ticketImax3D = 15.49;
const ticketDolby = 14.49;

let numberOfSeats;
let ticketCost = numberOfSeats * ticket;
let ticket3DCost = numberOfSeats * ticket3D;
let ticketImaxCost = numberOfSeats * ticketImax;
let ticketImax3DCost = numberOfSeats * ticketImax3D;
let ticketDolbyCost = numberOfSeats * ticketDolby;

// concession prices in US dollars
const popcornSmall = 8.99;
const popcornLarge = 9.99;
const drinkSmall = 6.99;
const drinkLarge = 7.49;
const drinkFrozen = 7.49;
const bottledWater = 5.49;
const candy = 5.49;

// conversion to foreign currency
let dollar = 1;
let euro = dollar * 1.07;
let peso = dollar * 0.050;
let canadaDollar = dollar * 0.72;
let yen = dollar * 0.0065;
let yuan = dollar * 0.14;

console.log(`Standard screen: ${ticket}`);
console.log(`3D screen: ${ticket3D}`);
console.log(`IMAX screen: ${ticketImax}`);
console.log(`IMAX 3D screen: ${ticketImax3D}`);
console.log(`Dolby screen: ${ticketDolby}`);
console.log(`Small popcorn: ${popcornSmall}`);
console.log(`Large popcorn: ${popcornLarge}`);
console.log(`Small drink: ${drinkSmall}`);
console.log(`Large drink: ${drinkLarge}`);
console.log(`Frozen drink: ${drinkFrozen}`);
console.log(`Bottled water: ${bottledWater}`);
console.log(`Candy: ${candy}`);

console.log()
// ticket prices in US dollars
const ticket = 9.49;
const ticket3D = 12.49
const ticketImax = 13.49;
const ticketImax3D = 15.49;
const ticketDolby = 14.49;

// concession prices in US dollars
const popcornSmall = 8.99;
const popcornLarge = 9.99;
const drinkSmall = 6.99;
const drinkLarge = 7.49;
const drinkFrozen = 7.49;
const bottledWater = 5.49;
const candy = 5.49;

console.log('The total cost of 2 movie tickets is ' + (ticket * 2));
console.log('The total cost of a small popcorn and a frozen coke is ' + (popcornSmall + drinkFrozen));
console.log('For me and my date to see a movie in IMAX and split a large popcorn and drink it cost me ' + (ticketImax * 2 + popcornLarge + drinkLarge));
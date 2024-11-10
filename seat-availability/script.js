const groupSize = 5;
let seatAvailability = 0;

if (seatAvailability >= 5) {
    console.log("There are enough seats for this showtime");
} else {
    console.log("There aren't enough seats for this showtime");
}

groupSize > seatAvailability ? console.log("There are not enough seats for this showtime") : 
console.log("There are enough seats for this showtime");

switch (seatAvailability) {
    case 6:
        console.log('There are more than enough seats for this showtime');
        break;
    case 5:
        console.log("There are just enough seats for this showtime");
        break;
    case 4:
        console.log("There are not enough seats for this showtime");
        break;
    case 0:
        console.log("This showtime is sold out");
        break;
    default:
        console.log("We don't even want to go the movies");
        break;
}
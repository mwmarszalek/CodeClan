var myArray = [];
var sports = ['football','tennis','rugby'];

sports.push('snooker');
sports.push('curling', 'badminton');
var removedSport = sports.pop();

sports.unshift('hockey');
sports.shift();

var removedElements = sports.splice(1,2);
// console.log(removedElements);
// console.log(sports);


// for (var currentSport of sports) {
//     var upperCaseSport = currentSport.toUpperCase();
//     console.log(upperCaseSport);
// }

for (var i = 0; i < sports.length; i ++) {
    console.log('counter was: ', i , 'sports was', sports[i]);
}
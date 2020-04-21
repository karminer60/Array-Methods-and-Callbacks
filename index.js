import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

var object = fifaData.filter(function(item){return item.Year == 2014 && item.Stage == "Final";})[0];

console.log(object["Home Team Name"]);

console.log(object["Away Team Name"]);

console.log(object["Home Team Goals"]);

console.log(object["Away Team Goals"]);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalsData = fifaData.filter(function(item){
        return item.Stage == "Final";        
    });
    return finalsData;
}

console.log(getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals, data) {

    const years = getFinals(data).map(function(item){
        return item.Year;
    }); 
    return years;
};

console.log(getYears(getFinals,fifaData));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals, data) {

    const winners = getFinals(data).map(function(item){
        let homeTeamGoals = item["Home Team Goals"];
        let awayTeamGoals = item["Away Team Goals"];
        if(homeTeamGoals < awayTeamGoals){
            return item["Home Team Name"];
        }
        else if (homeTeamGoals > awayTeamGoals){
            return item["Away Team Name"];
        }
        
        
    });
    return winners;
}


console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(getWinners, getYears, getFinals, data) {

    var years = getYears(getFinals,data); 
    var winners = getWinners(getFinals, data); 
    var newArray = years.map(function(years, i) {
        return "In " + years + " , " +  winners[i] + " won the world cup!";

    });
    return newArray;
};


console.log(getAllWinners(getWinners, getYears, getFinals, fifaData));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getInitialsWinners (getFinals, data) {

    const initialsWinners = getFinals(data).map(function(item){
        let homeTeamGoals = item["Home Team Goals"];
        let awayTeamGoals = item["Away Team Goals"];
        if(homeTeamGoals < awayTeamGoals){
            return item["Home Team Initials"];
        }
        else if (homeTeamGoals > awayTeamGoals){
            return item["Away Team Initials"];
        }
            
    });
    return initialsWinners;
}

function getCountryWins(teamInitials, getInitialsWinners , getFinals, data ) {
    let initials = getInitialsWinners (getFinals,data); 
    let userInitialsWinners = initials.filter(function(item){
            return item == teamInitials;
    });
    return userInitialsWinners.length;
    }
console.log(getCountryWins("BRA", getInitialsWinners , getFinals, fifaData));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */
//const homeTeamGoals = getFinals(data).map(function(item){
        //return [item["Home Team Initials"], item["Home Team Goals"]];
    //});

//const awayTeamGoals = getFinals(data).map(function(item){
    //return [item["Away Team Initials"], item["Away Team Goals"]];
//});

//function newArrayAllGoals(homeTeamGoals, awayTeamGoals, getFinals, data) {
    //var newArray = homeTeamGoals.map(function(homeTeamGoals, i) {
        //return [homeTeamGoals , awayTeamGoals[i] ];

    //});
    //return newArray;
//};  

//function getGoals( homeTeamGoals, awayTeamGoals, getFinals, data){
    //let totalGoalsPerTeam = newArrayAllGoals(homeTeamGoals, awayTeamGoals, getFinals, data).forEach(function(item){
        //if(item > item + 1){
            //return 
        //}
    //});
//}
    

//getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


function getAverageGoals(getFinals, data) {
    const homeTeamGoals = getFinals(data).map(function(item){
        return item["Home Team Goals"];
    });
    
    const awayTeamGoals = getFinals(data).map(function(item){
        return  item["Away Team Goals"];
    });

    let homeTeamGoalsTotal = homeTeamGoals.reduce(function(accumulator , item){
        return accumulator + item; 
    }, 0);

    let awayTeamGoalsTotal = awayTeamGoals.reduce(function(accumulator , item){
        return accumulator + item; 
    }, 0);



    return "The home team goals average is " + homeTeamGoalsTotal/homeTeamGoals.length + " and the away team goals average is " + awayTeamGoalsTotal/awayTeamGoals.length;

};

console.log(getAverageGoals(getFinals, fifaData));


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */
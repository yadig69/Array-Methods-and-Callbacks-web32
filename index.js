import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// (a)

const homeTeamName2014 = [];

fifaData.forEach(function(item) {
    if (item["Year"] === 2014 && item["Stage"] === "Final") {
        homeTeamName2014.push(item["Home Team Name"]);
    }
    return homeTeamName2014;
});

console.log(homeTeamName2014);

// (b)

const awayTeamName2014 = [];
fifaData.forEach(function(item) {
    if (item["Year"] === 2014 && item["Stage"] === "Final") {
        awayTeamName2014.push(item["Away Team Name"]);
    }
    return awayTeamName2014;
});
console.log(awayTeamName2014);

// (c)

const homeTeamGoals2014 = [];
fifaData.forEach(function(item) {
    if (item["Year"] === 2014 && item["Stage"] === "Final") {
        homeTeamGoals2014.push(item["Home Team Goals"]);
    }
    return homeTeamGoals2014;
});

console.log(homeTeamGoals2014);
// (d)

const awayTeamGoals2014 = [];
fifaData.forEach(function(item) {
    if (item["Year"] === 2014 && item["Stage"] === "Final") {
        awayTeamGoals2014.push(item["Away Team Goals"]);
    }
    return awayTeamGoals2014;
});

console.log(awayTeamGoals2014);


// (e)
const homeTeamSum2014 = homeTeamGoals2014.reduce(
    function(runningTotal, element) {
        return runningTotal + element;

    });

const awayTeamSum2014 = awayTeamGoals2014.reduce(
    function(runningTotal, element) {
        return runningTotal + element;

    });

if (homeTeamSum2014 > awayTeamSum2014) {
    console.log(homeTeamName2014[0]);
} else if (awayTeamSum2014 > homeTeamSum2014) {
    console.log(awayTeamName2014[0]);
} else {
    console.log('tie')
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    let finalData = data.filter(function(item) {
        return item["Stage"] === "Final";
    });
    /* code here */
    return finalData;
}

console.log(getFinals(fifaData));



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {

    const finalGames = cb(fifaData);
    const years = finalGames.map(function(item) { return item["Year"] });
    return years;
};
console.log(getYears(getFinals));
// getYears(getFinals);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinals) {
    const winners = [];

    getFinals(fifaData).forEach(function(data) {
        if (data["Home Team Goals"] > data["Away Team Goals"]) {
            winners.push(data["Home Team Name"]);
        } else

        if (data["Away Team Goals"] > data["Home Team Goals"]) {

        } else {
            winners.push["Win conditions"].split(" ")[0];
        }

    });
    /* code here */

};
console.log(getWinners(getFinals));
getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear( /* code here */ ) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals( /* code here */ ) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins( /* code here */ ) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals( /* code here */ ) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense( /* code here */ ) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
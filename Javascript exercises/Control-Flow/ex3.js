// Exercise 1
// We'll build the industry plant calendar.

//Part 1
alert("Hello! Welcome to our Industry Plant Calendar.");

let dayNumber = parseInt(prompt("Please, enter the number of week day (between 1-7): "));
let hourNumber = parseInt(prompt("Please, enter the hour of the day (between 0-23): "));

function businessHours(dayNumber, hourNumber){
    if ( (hourNumber < 19 && hourNumber > 8) && (dayNumber > 0 && dayNumber < 6)) {
        return true;
    } else {
        return false;
    }
}

alert(businessHours(dayNumber,hourNumber));

// Part 2

let janFirstDayNumber = parseInt(prompt("Please, enter a number between 0-6, representing the day of the week of January 1st: "));
let yearDayNumber = parseInt(prompt("Please, enter the number of day on the year, in a 0-365 range: "));


function getDayNumber(janFirstDayNumber, yearDayNumber){
    if (janFirstDayNumber >= 0 && janFirstDayNumber < 7){
        let theRemainder = (yearDayNumber % 7) - 1; // remainder = 1 --> Monday and -1 --> leap year
        let weekDay =  janFirstDayNumber + theRemainder; 
        
        console.log("The day of the week is " + weekDay);

        switch(weekDay) {
        case 0:
            return "Monday";
            break;
        case 1:
            return "Tuesday";
            break;
        case 2:
            return "Wednesday";
            break;
        case 3:
            return"Thrusday";
            break;
        case 4:
            return "Friday";
            break;
        case 5:
            return "Saturday";
            break;
        case 6:
            return "Sunday";
            break;
        default:
            return "Try again!";
        }
    } else {
        alert("Please, enter a number between 0-6. Than you!");
    }
}

alert("The day " + yearDayNumber + " it's " + getDayNumber(janFirstDayNumber,yearDayNumber));

// Part 3

function itsbusinessHours (yearDayNumber,hourNumber){
    if ((businessHours(dayNumber,hourNumber)== true) &&  getDayNumber(yearDayNumber,janFirstDayNumber) !== "Sunday" || getDayNumber(yearDayNumber,janFirstDayNumber) !== "Saturday"){
        alert("It's business hours!");
        return true;
    } else {
        alert("No worries. It's rest time. Relax!");
        return false ;
    }
}

alert(itsbusinessHours(yearDayNumber,hourNumber));

// Challenge
/* Replace the yearDayNumber and 
 hourNumber parameters with a Date() variable.
*/

let date =  new Date();
let newYearDayNumber = date.getDay();
let newHourNumber = date.getHours();

function itsbusinessHours (newYearDayNumber,newHourNumber){
    if ((businessHours(dayNumber,newHourNumber)== true) &&  getDayNumber(newYearDayNumber,janFirstDayNumber) !== "Sunday" || getDayNumber(newYearDayNumber,janFirstDayNumber) !== "Saturday"){
        alert("It's business hours!");
        return true;
    } else {
        alert("No worries. It's rest time. Relax!");
        return false ;
    }
}



alert("The " + newHourNumber + " of the day " + newYearDayNumber + " it's " + getDayNumber(janFirstDayNumber,newYearDayNumber) + " is business time?" + itsbusinessHours (newYearDayNumber,newHourNumber));




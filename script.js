const currentYear = new Date();
const currentYearAsString = currentYear.getFullYear().toString();
 
const currentMonth = new Date();

function getWeekNumber(date) {
    // Copy date so don't modify original
    date = new Date(date);
    date.setHours(0, 0, 0, 0);
    // Set to nearest Thursday
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // Get first day of year
    var yearStart = new Date(date.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    var weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    // Return week number with leading zero if needed
    return weekNumber < 10 ? '0' + weekNumber : '' + weekNumber;
}
 

function getLink() {
    let month = (currentMonth.getMonth() + 1).toString(); // Adding 1 since getMonth() returns zero-based index
 
    // Pad the month with leading zeros if necessary
    if (month.length === 1) {
        month = '0' + month;
    }
     
    const currentDate = new Date();
    const weekNumber = getWeekNumber(currentDate);
     
     
    return "https://www.befreshcatering.ch/wp-content/uploads/" + currentYearAsString + "/" + month + "/Woche-" + weekNumber + ".pdf";    
}

window.location.replace(getLink());

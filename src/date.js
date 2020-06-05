// Days mapping
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Months mapping
const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

// Get previous n days of certain day
function* getPreviousDays(day, numberOfPreviousDays){
    const currentDay = new Date(day);
    for(let i=1; i <= numberOfPreviousDays; i++){
        currentDay.setDate(currentDay.getDate() - 1);
        yield currentDay;
    }
};

// Return day name from date
const getDayName = dayIndex => {
    return days[dayIndex];
};

// Return short day name from date
const getDayShortName = dayIndex => {
    return days[dayIndex].substr(0,3);
};

// Return month name from date
const getMonthName = monthIndex => {
    return months[monthIndex];
};

// Return short month name from date
const getMonthShortName = monthIndex => {
    return months[monthIndex].substr(0,3);
};

export {getPreviousDays, getDayName, getDayShortName, getMonthName, getMonthShortName};
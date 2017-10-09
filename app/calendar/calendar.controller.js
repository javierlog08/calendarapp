
var CalendarController = function() 
{
    var CalendarController = this;
    
    var WEEK_DAYS = 7;
    var MONTHS = 12;
    var MONTH_WEEKS = 5;

    var MONTH_DAYS = {
        "1" : [31],
        "2" : [28,29],
        "3" : [31],
        "4" : [31],
        "5" : [31],
        "6" : [30],
        "7" : [31],
        "8" : [31],
        "9" : [30],
        "10": [31],
        "11": [30],
        "12": [31]
    }
    
    CalendarController.getCalendarData = function(startDate, days, countryCode)
    {
        var calendar = [];

        var date = new Date(startDate);
        var currentMonthDays = MONTH_DAYS[(date.getMonth()+1)][0];

        var week = 0;
        var week_day = 0;
        
        for(var week=0; week < MONTH_WEEKS; week++  ) {
            calendar[week] = [];
            for(var week_day=0;week_day < WEEK_DAYS; week_day++) {
                calendar[week][week_day] = 0;
            }
        }

        var start_week_day = date.getDay();
        var fdom = new Date(date.getFullYear(),date.getMonth(),1);
        
        for(var week=0; week < MONTH_WEEKS; week++  ) {
            for(var week_day=fdom.getDay();week_day < WEEK_DAYS; week_day++) {
                calendar[week][week_day] = fdom.getDate();
                fdom = new Date(date.getFullYear(),date.getMonth(),fdom.getDate()+1);
            }
        }
        console.log(calendar);
    }
}

angular.module('app.calendarComponent').controller("calendarController",CalendarController)
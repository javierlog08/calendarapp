
var CalendarController = function() 
{
    var CalendarController = this;

    CalendarController.calendar = [];

    var WEEK_DAYS = 7;
    var MONTHS = 12;
    var MONTH_WEEKS = 5;
    

    CalendarController.setCalendar = function(start, days) {
        this.calendar = CalendarController.getCalendarData("2017-10-1",40);
    }

    /**
     * This will get the array data needed to display our calendar on the screen
     * 
     * @param start the start date ie. 2017-10-1
     * @param days the number of days counting from the start date
     */
    CalendarController.getCalendarData = function(start, days, countryCode)
    {

        var startDate = new Date(start);
        var lastDate = new Date(start); 
        lastDate.setDate(lastDate.getDate()+days);

        // day of the week to start
        var startWeekDay = startDate.getDay()
        // cursor to iterate months starting from the first day from the given date
        var monthCursor = new Date(startDate.getFullYear(),startDate.getMonth(),1);
        // Numbers of month we will have on the given date range
        var monthDiference =   Math.abs((startDate.getFullYear() - lastDate.getFullYear()) * 12 + (startDate.getMonth() - lastDate.getMonth()) -1);

        // Array to return data
        var calendar = [];


        for(var months = 0; months < monthDiference; months++) {
            
            var monthCalendar = createEmptyCalendar();

            // a cursor to iterate through all the days of the given month, starting from the first day
            var dayOfMonthCursor = monthCursor; 

            // We need the last day of the current month
            var lastDayOfMonth = new Date(monthCursor.getFullYear(),monthCursor.getMonth()+1,monthCursor.getDate()-1);
            
            for(var week=0; week < MONTH_WEEKS; week++  ) { // evry month have (x) day of weeks, just for data structure
                for(var week_day=dayOfMonthCursor.getDay();week_day < WEEK_DAYS; week_day++) {
                    // date invariant, we need ever finish month definition on the last day and not forward the lastDate of given dates
                    if(dayOfMonthCursor.getTime() <= lastDayOfMonth.getTime() && dayOfMonthCursor.getTime() <= lastDate.getTime() )
                            monthCalendar[week][week_day] = dayOfMonthCursor.getDate();

                    // lets move day cursor 1 day on this month
                    dayOfMonthCursor = new Date(dayOfMonthCursor.getFullYear(),dayOfMonthCursor.getMonth(),dayOfMonthCursor.getDate()+1);
                }
            }

            // lets move cursor 1 month forward
            monthCursor = new Date(startDate.getFullYear(),startDate.getMonth()+1,1);

            // lets save the month calendar on the array calendar
            calendar.push(monthCalendar);
        }
        
        
        return calendar;
    }

    function createEmptyCalendar() {
        var emptyCalendar = [];
        // Les create a empty callendar grid 5 x 7        
        for(var week=0; week < MONTH_WEEKS; week++  ) {
            emptyCalendar[week] = [];
            for(var week_day=0;week_day < WEEK_DAYS; week_day++) {
                emptyCalendar[week][week_day] = 0;
            }
        }

        return emptyCalendar;
    }
}

angular.module('app.calendarComponent').controller("calendarController",CalendarController)
// Get reference to the START, STOP and RESET buttons
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
 
// Make variables for time
var hour = 0;
var minute = 0;
var second = 0;
var count = 0;
var timer= false;
 
// Make EventListener for all 3 buttons and add function to it
start.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
 
stop.addEventListener('click', function () {
    timer = false;
});
 
reset.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    // Setting InnerHTML to string
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
 
// Main function
function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
            count=0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
            count=0;
        }

        // Making copy of time to convert into strings
        var hrString = hour;
        var minString = minute;
        var secString = second;
        var countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }

        // Setting innerHTML(displayed when start buuton is clicked)
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        
        // Calling function again using setTimeout(timer is 10 millisec because 100 count =1sec)
        setTimeout("stopWatch()", 10);
    }
}

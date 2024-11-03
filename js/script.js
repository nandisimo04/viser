// Set the date we're counting down to
var AKK1 = new Date("Dec 4, 2024 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distanceAKK1 = AKK1 - now;
    
  // Time calculations for days, hours, minutes and seconds
  var monthsAK1 = Math.floor(distanceAKK1 / (1000 * 60 * 60 * 24 * 30))
  var weeksAK1 = Math.floor((distanceAKK1 % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7))
  var daysAK1 = Math.floor((distanceAKK1 % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));

  document.getElementById("demo").innerHTML = monthsAK1 + "m " + weeksAK1 + "w " + daysAK1 + "d " 
  // If the count down is over, write some text 
  if (distanceAKK1 < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "NEDEFINSANO";
  }
}, 1000);

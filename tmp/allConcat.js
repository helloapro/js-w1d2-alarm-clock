var Alarm = require('./../js/alarm.js').alarmModule;

$(function() {
  var now;
  var audio = new Audio('http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2015.mp3');
  setInterval(function(){
    now = moment();
    $('#time').text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);

  var soundAlarm = function(time) {
    setTimeout(function() {
      $(".sound-alarm").show();
      $("body").addClass("alarm");
      audio.play();
    }, time);
  }

  var stopAlarm = function() {
    $(".sound-alarm").hide();
    $("body").removeClass("alarm");
    audio.pause();
  }

  $("form").submit(function(event) {
    event.preventDefault();
    var userAlarm = moment($("#alarm").val());
    var alarm = new Alarm(userAlarm);
    soundAlarm(alarm.alert(now));
   });

  $("#snooze").click(function(event) {
    stopAlarm();
    soundAlarm(100000);
  });

  $("#stopAlarm").click(function(event) {
    stopAlarm();
  });
});

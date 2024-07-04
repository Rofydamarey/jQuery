
/// <reference types="../@types/jquery" />

$('.nav-toggle').on('click',function () {
    $('.navy').animate({width:'toggle'},1000)
   
})

$('.close').on('click',function () {
    $('.navy').animate({width:'toggle'},1000)
})


$(function () {
    $('.loader').fadeOut(1000,function () {
        $('.loading').fadeIn(1000,function () {
            $('body').css('overflow','auto')
            $('.loading').remove()
        })
    })
})
$('.head').on('click',function () {
    $(this).next().slideToggle(1000)
   
})

/*counter*/ 
// var countDownDate = new Date("10 october 2021 9:56:00").getTime();
// var x = setInterval(function() {
//   var now = new Date().getTime()/1000;
//   var distance = (countDownDate/1000) - now;
//   var days = Math.floor(distance / ( 60 * 60 * 24));
//   var hours = Math.floor((distance- (days * (24*60*60))) / 3600);
//   var mins = Math.floor((distance- (days * (24*60*60)) - (hours * 3600 )) / 60);
//   var secs = Math.floor((distance- (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

//   $(".days").html(`${days} D`);
//   $(".hours").html(`${hours} h`);
//   $(".minutes").html(`${ mins } m`);
//   $('.seconds').html(`${ secs} s`)


//   setInterval(function() { countDownDate(countTo); });
// })
function makeTimer() {
		var endTime = new Date("3 April 2024 9:56:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }
			$(".days").html(days + "<span>D</span>");
			$(".hours").html(hours + "<span>h</span>");
			$(".minutes").html(minutes + "<span>min</span>");
			$(".seconds").html(seconds + "<span>sec</span>");		

	}
	setInterval(function() { makeTimer(); }, 1000);


/**TextArea*/
var maxlimit=100;
$('textarea').on('input',function () {
    var length = $(this).val().length;
    var RemainAmount = maxlimit-length;
    if (RemainAmount<0) {
            $("#char").text("your available character finished");   
            $('textarea').not()
    }
   else{
   $("#char").text(RemainAmount);
   }
    
})
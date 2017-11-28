$(document).ready(function(){

	//Кнопка меню

	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	})

	//Кнопка наверх

	$("body").append('<div class = "top"><i class="fa fa-angle-double-up"</i>');

	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}

	});

	$("body").on("click", ".top", function(){
  		$("html, body").animate({scrollTop: 0}, "slow");
  	});
});

window.onload = function () {

    //Слайдеры
    showSlides();
    showComands(comandIndex);
    //Прогресс бар
    countPlayers(interest, 100, 50);
};

window.onresize = function (){
	countPlayers(interest, 100, 50);
};

//Слайдер

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName(" header-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//Галерея 

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var modalIndex = 1;
showModals(modalIndex);

function plusSlides(n) {
  showModals(modalIndex += n);
}

function currentSlide(n) {
  showModals(modalIndex = n);
}

function showModals(n) {
  var i;
  var slides = document.getElementsByClassName("myModals");
  if (n > slides.length) {modalIndex = 1}
  if (n < 1) {modalIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[modalIndex-1].style.display = "block";
}

//Команды

var comandIndex = 1;

function plusComands(n) {
  showComands(comandIndex += n);
}

function currentComands(n) {
  showComands(comandIndex = n);
}

function showComands(n) {
  var i;
  var slides = document.getElementsByClassName("server-comands");
  var dots = document.getElementsByClassName("comands-dot");
  if (n > slides.length) {comandIndex = 1} 
  if (n < 1) {comandIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[comandIndex-1].style.display = "flex"; 
  dots[comandIndex-1].className += " active";
}

//Progress-bar

var interest = 50;

function countPlayers(players,maxplayers,sleepers) {

    //Пока не 100% увеличиваем процент
    if (interest <= 100) {
        //interest++;
        document.getElementById('interest').innerHTML = '<i class="fa fa-user-o" aria-hidden="true"></i> ' + players + "/" + maxplayers + ' &nbsp <i class="fa fa-bed" aria-hidden="true"></i>&nbsp'+sleepers;
        document.getElementById('progress').style.width = interest * (document.querySelector('.bar-box').clientWidth / 100) + 'px';
    }

}
var app = document.querySelector(".typewriter");

var typewritter = new Typewriter(app, {
  Loop: true,
});

typewritter
  .typeString("Web Developer")
  .pauseFor(2000)
  .deleteAll()
  .typeString("UI/UX Designer")
  .deleteAll()
  .typeString("App Developer")
  .pauseFor(2000)
  .start();


  var Tablist = document.querySelectorAll('.nav-tabs .nav-item a');

Tablist.forEach(function(e) {
var Tabtrigger = new bootstrap.Tab(e);
e.addEventListener('click', function (e) {
e.preventDefault();
Tabtrigger.show();
})
})

var grid = document.querySelector('.grid');
var iso;

imagesLoaded(grid, function () {
  iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
  });

var filterElm = document.querySelector ('.portfolio-filter');
filterElm.addEventListener('click', function(event) {
if (!matchesSelector(event.target, 'button')) {
return;
}

var filterValue = event.target.getAttribute('data-filter');
iso.arrange({
filter: filterValue
})

});

});

var btnElem = document.querySelectorAll('.fil-btn')

btnElem.forEach(function (el, key) {
el.addEventListener('click', function() {
el.classList.add('clicked');



btnElem.forEach(function(ell,keys) {
if(key != keys) {
ell.classList.remove('clicked');
}


})

})

})



var slider = tns({
  container: ".my-slider",
  items: 1,
  slideBy: 1,
  controls: false,
  navPosition: "bottom",
  gutter: 30,
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  responsive: {
    960: {
      items: 2,
    },
  },
});

window.addEventListener('scroll', function(){

var scrolled = window.scrollY;

var topbtn = document.querySelector('.scroll-to-top')


if(scrolled >700) {
topbtn.classList.add('d-inline-block');

}

if(scrolled < 700) {
topbtn.classList.remove('d-inline-block');

}

})


window.addEventListener("scroll", function () {
  if (window.scrollY > 50) 
    {
    document.getElementById("navbar-scroll").classList.add("fixed-top");
    var navbar_height = document.querySelector ('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
   

  } else{
      document.getElementById("navbar-scroll").classList.remove("fixed-top");
      document.body.style.paddingTop = '0';
  }
});
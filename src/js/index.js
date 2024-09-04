 const search = document.getElementById("loupe");
 const searchInput = document.getElementById("form-search");
 const close = document.getElementById("close");

 search.addEventListener('click', function(){
     searchInput.classList.add('active');
     close.classList.add("close-active");
     search.classList.add("loupe-invisible");
 })

 close.addEventListener('click', function(){
  searchInput.classList.toggle("active");
  close.classList.toggle("close-active");
  search.classList.toggle("loupe-invisible");
 })



 //Бургер-меню

const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.querySelector(".burger-menu");
const burgerClose = document.getElementById("burgerClose");
const burgerLink = document.querySelectorAll(".burger-link");


burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add("active");
});

function closeBurger() { 
    burgerMenu.classList.toggle("active");
   console.log('dfg')
}
burgerLink.onclick = closeBurger;
burgerClose.onclick = closeBurger;

burgerLink.forEach(function(e) {
  
  e.addEventListener("click", () => closeBurger());
});


//Карта//
ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.76965401273346, 37.63676449999999],
    zoom: 15,
    controls: [],
  });

  let myPlacemark = new ymaps.Placemark(
    [55.76, 37.64],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/Map.svg",
      iconImageSize: [12, 12],
      iconImageOffset: [-3, -42],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}
let len = document.getElementsByClassName("iq");
for (i = 0; i < len.length; i++) {
  len[i].setAttribute("onmouseenter", `hower(${i})`);
}
function hower(x) {
  let p = document.getElementsByClassName("iq")[x].querySelector("p");
  console.log(p);
  len[x].style.boxShadow = "1px 1px 5px lightgrey";
  p.style.color = "#008BDC";

  // console.log(iq)
  len[x].addEventListener("mouseleave", () => {
    len[x].style.boxShadow = null;
    p.style.color = null;
  });
//   len[x].addEventListener("click", () => {
//     location = "./#";
//   });

  // (iq.classList.toggle('active'))
}
$('.team .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: true,
  nav: false,
  responsiveClass: true,
  responsive:{
      0:{
          items: 1
      }, 
      600:{
          items: 2
      },
      1000:{
          items: 3
      }
  }
});
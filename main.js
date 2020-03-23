//Get the button
var myintro = document.getElementById("intro");
var mypanel = document.getElementById("panel");
var mymedia = document.getElementById("media");
var mycategory = document.getElementById("category");
var mypc = document.getElementById("pc");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mypanel.style.display = "block";
    myintro.style.display = "none";
  } else {
    mypanel.style.display = "none";
  }
  if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
    mypanel.style.display = "none";
    mymedia.style.display = "block";
  } else {
    mymedia.style.display = "none";
  }
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mymedia.style.display = "none";
    mycategory.style.display = "block";
  } else {
    mycategory.style.display = "none";
  }
  if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
    mycategory.style.display = "none";
    mypc.style.display = "block";
  } else {
    mypc.style.display = "none";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("mySidenavClose").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("mySidenavClose").style.display = "none";
}

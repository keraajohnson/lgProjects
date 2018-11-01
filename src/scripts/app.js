const hello = 'World';
console.log(hello);

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
const navBar = $('.stickyNav');

// Get the offset position of the navbar
const sticky = navBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navBar.addClass("sticky")
    } else {
        navBar.removeClass("sticky");
    }
} 
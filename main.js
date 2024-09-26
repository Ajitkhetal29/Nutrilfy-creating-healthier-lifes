$(document).ready(function() {
    $(window).bind('scroll', function() {
        // var navHeight = $(window).height() - 10;
        if ($(window).scrollTop() > 50) {
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky');
        }
    });
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");


let isChickenVisible;

let people = [{
        photo: "url(https://png.pngtree.com/png-vector/20220916/ourmid/pngtree-emoticon-template-isolated-lol-illustration-vector-png-image_39257478.png)",
        name: "Aniket",
        profession: "WEB DEVLOPER",
        description: "Indeed a natural jaggery. I liked the quality and my tea testes delicious.. It's time to replace sugar by jaggery"
    },

    {
        photo: "url(https://png.pngtree.com/png-vector/20220916/ourmid/pngtree-emoticon-template-isolated-lol-illustration-vector-png-image_39257478.png)",
        name: "Pratima",
        profession: "CHEF",
        description: "Found It Unique in own way Taste very natural Small cubes are easy to use &amp; measure. Packaging is very good (Certified food grade as well) Highly recommend"
    },

    {
        photo: "url(https://png.pngtree.com/png-vector/20220916/ourmid/pngtree-emoticon-template-isolated-lol-illustration-vector-png-image_39257478.png)",
        name: "Sagar",
        profession: "Teacher",
        description: "I really like this product and it's good value of money try everyone then share your experience in review"
    },

    {
        photo: "url(https://png.pngtree.com/png-vector/20220916/ourmid/pngtree-emoticon-template-isolated-lol-illustration-vector-png-image_39257478.png)",
        name: "Vasudha",
        profession: "Farmer",
        description: "Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
    }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
    let reviewWrapWidth = reviewWrap.offsetWidth + "px";
    let descriptionHeight = description.offsetHeight + "px";
    //(+ or -)
    let side1symbol = whichSide === "left" ? "" : "-";
    let side2symbol = whichSide === "left" ? "-" : "";

    let tl = gsap.timeline();

    if (isChickenVisible) {
        tl.to(chicken, {
            duration: 0.4,
            opacity: 0
        });
    }

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 0,
        translateX: `${side1symbol + reviewWrapWidth}`
    });

    tl.to(reviewWrap, {
        duration: 0,
        translateX: `${side2symbol + reviewWrapWidth}`
    });

    setTimeout(() => {
        imgDiv.style.backgroundImage = people[personNumber].photo;
    }, 400);
    setTimeout(() => {
        description.style.height = descriptionHeight;
    }, 400);
    setTimeout(() => {
        personName.innerText = people[personNumber].name;
    }, 400);
    setTimeout(() => {
        profession.innerText = people[personNumber].profession;
    }, 400);
    setTimeout(() => {
        description.innerText = people[personNumber].description;
    }, 400);

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 1,
        translateX: 0
    });

    if (isChickenVisible) {
        tl.to(chicken, {
            duration: 0.4,
            opacity: 1
        });
    }
}

function setNextCardLeft() {
    if (currentPerson === 3) {
        currentPerson = 0;
        slide("left", currentPerson);
    } else {
        currentPerson++;
    }

    slide("left", currentPerson);
}

function setNextCardRight() {
    if (currentPerson === 0) {
        currentPerson = 3;
        slide("right", currentPerson);
    } else {
        currentPerson--;
    }

    slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);


window.addEventListener("resize", () => {
    description.style.height = "100%";
});
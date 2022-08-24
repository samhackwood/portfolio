const content = document.getElementById("content")
const text = document.getElementById("text")

const contentTwo = document.getElementById("content_two");
const textTwo = document.getElementById("text_two")

const contentThree = document.getElementById("content_three");
const textThree = document.getElementById("text_three")

const contentFour = document.getElementById("content_four");
const textFour = document.getElementById("text_four");

const outer = document.getElementById("outer");
const outerTwo = document.getElementById("outer_two");
const outerThree = document.getElementById("outer_three");
const outerFour = document.getElementById("outer_four");

const gitHub = document.getElementById("github");


// var i = 0;
// var speed = 50; /* The speed/duration of the effect in milliseconds */
// txt = '"We may not yet know what an enlightened computer programmer looks like, but the potential is clear." - Julian Daizan Skinner';

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter()

var p = document.getElementById('demo');

function typeWriter(element, str) {
element.innerHTML = '';
var n = 100;
var typeTimer = setInterval(function() {
  n = n + 1;
  element.innerHTML = "> " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    element.innerHTML = "> " + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        element.innerHTML = "> " + str + "|"
        n = 1;
      } else {
        element.innerHTML = "> " + str
        n = 0;
      };
    }, 500);
  };
}, 60)
}

// function typeWriterNoBlink(element, str) {
//     element.innerHTML = '';
//     var n = 2;
//     var typeTimer = setInterval(function() {
//       n = n + 1;
//       element.innerHTML = "> " + str.slice(0, n);
//       if (n === str.length) {
//         clearInterval(typeTimer);
//         element.innerHTML = "> " + str;
//         n = 0;
//         setInterval(function() {
    
//           if (n === 0) {
//             element.innerHTML = "> " + str 
//             n = 1;
//           } else {
//             element.innerHTML = "> " + str
//             n = 0;
//           };
//         }, 500);
//       };
//     }, 60)
//     }



typeWriter(document.getElementById('demo'), '"This is the real secret of life -- to become completely engaged with what you are doing in the here and now. And instead of calling it work, realise it is play." - Alan Watts')

// window.addEventListener('scroll', function() {
// 	var element = document.querySelector('#zen-journal');
// 	var position = element.getBoundingClientRect();

// 	// checking whether fully visible
// 	if(position.top >= 0 && position.bottom <= window.innerHeight) {
// 		typeWriter(document.getElementById('zen-journal'), "zen journal.");
//         console.log("working")
// 	}

// });

// var observer = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true)
// 		console.log('Element is fully visible in screen')
//         typeWriterNoBlink(document.getElementById('zen-journal'), "zen journal. ");
// }, { threshold: [1] });

// observer.observe(document.querySelector("#zen-journal"));

// var observer = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true)
// 		console.log('Element is fully visible in screen')
//         typeWriterNoBlink(document.getElementById('sewer-king'), "the sewer king.  ");
// }, { threshold: [1] });

// observer.observe(document.querySelector("#sewer-king"));

// var observer = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true)
// 		console.log('Element is fully visible in screen')
//         typeWriterNoBlink(document.getElementById('phonograph'), "the phonograph. ");
//         observer.disconnect();
// }, { threshold: [1] });

// observer.observe(document.querySelector("#phonograph"));

// var observer = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true)
// 		console.log('Element is fully visible in screen')
//         typeWriterNoBlink(document.getElementById('dream-catcher'), "dreamcatcher. ");
//         observer.disconnect();
// }, { threshold: [1] });

// observer.observe(document.querySelector("#dream-catcher"));



content.addEventListener("mouseenter", () => {
    content.style.filter = "brightness(10%)"
    text.style.display = 'block';
})

outer.addEventListener("mouseleave", () => {
    content.style.filter = "brightness(100%)"
    text.style.display = 'none';
})



// WORKING CODE 
contentTwo.addEventListener("mouseenter", () => {
    contentTwo.style.filter = "brightness(10%)"
    textTwo.style.display = 'block';
})

outerTwo.addEventListener("mouseleave", () => {
    contentTwo.style.filter = "brightness(100%)"
    textTwo.style.display = 'none';
})
// ^^WORKING CODE

contentThree.addEventListener("mouseenter", () => {
    contentThree.style.filter = "brightness(10%)"
    textThree.style.display = 'block';
})

outerThree.addEventListener("mouseleave", () => {
    contentThree.style.filter = "brightness(100%)"
    textThree.style.display = 'none';
})

contentFour.addEventListener("mouseenter", () => {
    contentFour.style.filter = "brightness(10%)"
    textFour.style.display = 'block';
})

outerFour.addEventListener("mouseleave", () => {
    contentFour.style.filter = "brightness(100%)"
    textFour.style.display = 'none';
})




// gitHub.addEventListener("mouseenter", () => {
//     contentTwo.style.filter = "brightness(10%)"
//     textTwo.style.display = 'block';
// })
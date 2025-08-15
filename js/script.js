// progress bar js
let value = 45; // এখানে value পরিবর্তন করুন

const progressBar = document.getElementById('progressBar');
const progressValue = document.getElementById('progressValue');

// Width আপডেট
progressBar.style.width = value + '%';

// Text update
progressValue.innerText = value + '% completed';

// আগের color class remove
progressBar.classList.remove('bg-success','bg-warning','bg-danger','bg-info');

// Value অনুযায়ী color set
if(value <= 25){
  progressBar.classList.add('bg-danger'); 
} else if(value <= 60){
  progressBar.classList.add('bg-warning');
} else {
  progressBar.classList.add('bg-success'); 
}

// clint slide start
$(document).ready(function(){
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,   // desktop
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768, // tablet
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '40px',
        arrows: false
      }
    },
    {
      breakpoint: 480, // mobile
      settings: {
        slidesToShow: 1,  // small device-এ শুধু ১ image
        centerMode: true,
        centerPadding: '20px', // slide চারপাশে padding
        arrows: false
      }
    }
  ]
});


});


const reviews = [
    {
        img: "img/delowar.jpg",
        text: "“On the Windows talking painted pasture yet its express parties use...”",
        name: "Md Delowar Hossain",
        loc: "Chittagong, Bangladesh"
    },
    {
        img: "img/delowar2.png",
        text: "“On the Windows talking painted pasture yet its express parties use...”",
        name: "John Doe",
        loc: "Karachi, Pakistan"
    },
    {
        img: "img/image2.png",
        text: "“On the Windows talking painted pasture yet its express parties use...”",
        name: "Jane Smith",
        loc: "Delhi, India"
    }
];


const reviewBody = document.querySelector('.review_body');

// Container + Stack
const container = document.createElement('div');
container.classList.add('review_container');
const stack = document.createElement('div');
stack.classList.add('review_stack');
container.appendChild(stack);
reviewBody.innerHTML = ''; 
reviewBody.appendChild(container);

// Nav buttons
const nav = document.createElement('div');
nav.classList.add('review_nav');
nav.innerHTML = `
    <button id="prevBtn">&#10094;</button>
    <button id="nextBtn">&#10095;</button>
`;
container.appendChild(nav);

// Create stacked cards
reviews.forEach((r, i) => {
    const card = document.createElement('div');
    card.classList.add('review_card_item');
    card.style.transform = `translate(${i * 50}px, ${i * 80}px) scale(${1 - i * 0.05})`;
    card.style.zIndex = reviews.length - i;
    card.innerHTML = `
        <img src="${r.img}" alt="${r.name}">
        <p>${r.text}</p>
        <h6>${r.name}</h6>
        <p>${r.loc}</p>
    `;
    stack.appendChild(card);
});

// Rotate stack forward
function rotateNext(){
    const first = stack.firstElementChild;
    stack.appendChild(first);
    updateStack();
}

// Rotate stack backward
function rotatePrev(){
    const last = stack.lastElementChild;
    stack.insertBefore(last, stack.firstElementChild);
    updateStack();
}

// Update transform & z-index for stack
function updateStack(){
    [...stack.children].forEach((card, i) => {
        card.style.transform = `translate(${i * 50}px, ${i * 80}px) scale(${1 - i * 0.05})`;

        card.style.zIndex = reviews.length - i;
    });
}

document.getElementById('nextBtn').addEventListener('click', rotateNext);
document.getElementById('prevBtn').addEventListener('click', rotatePrev);

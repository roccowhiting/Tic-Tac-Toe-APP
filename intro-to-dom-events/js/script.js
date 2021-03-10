alert('js is loaded');

// cached element references - dom elements 

const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

//event listeners

button.addEventListener('click', function (evt) {
    // create the new li tag 
    const li = document.createElement("li");
    // capture user input 
    li.textContent = input.value;
    // append the new li as a child to the ul element 
    ul.appendChild(li);
    // clear the input
    input.value = '';
});


console.log(click);


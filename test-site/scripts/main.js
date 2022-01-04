
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/dog.jpg') {
        myImage.setAttribute('src', 'images/grump.jpg');
    } else {
        myImage.setAttribute('src', 'images/dog.jpg');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cools, ' +storedName
}

myButton.onclick = function() {
    setUserName();
}

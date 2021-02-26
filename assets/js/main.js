// Name

var name = prompt("What's your name?");
console.log(name);

document.getElementById('password').innerHTML = name;

// Last name

var lastname = prompt("What's your last name?");
console.log(lastname);

document.getElementById('password').innerHTML = name + lastname;

// Favourite colour

var colour = prompt("What's your favourite colour?");
console.log(colour);

document.getElementById('password').innerHTML = name + lastname + colour + '21';

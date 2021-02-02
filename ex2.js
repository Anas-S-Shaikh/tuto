let h1 = document.createElement('h1');
h1.className = 'headind';
h1.id = 'first';
let text = document.createTextNode("This is Heading");
h1.appendChild(text);
let container = document.querySelector('div.container');
container.replaceChild(h1,container.firstElementChild);

let li = document.createElement("li");
let a = document.createElement('a');
a.setAttribute('href','www.link.com');
aText = document.createTextNode('This is link');
a.appendChild(aText);
li.appendChild(a);
let ul = document.getElementById('myul');
ul.appendChild(li);


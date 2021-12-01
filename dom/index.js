const container = document.querySelector('#container')

const content = document.createElement('p')
content.classList.add('content')
content.textContent = "Hey I'm red!"

container.appendChild(content)

const htag = document.createElement('h3')
htag.classList.add('header')
htag.textContent= "Hey I'm blue!"

container.appendChild(htag)

const d = document.createElement('div');
d.classList.add('childcontainer')
var divstyle = d.style;
divstyle.width='400px';
divstyle.height='400px';
divstyle.background='pink';
divstyle.border='20px solid black';
container.appendChild(d)


const scontainer = document.querySelector('.childcontainer')
const hone = document.createElement('h1')
hone.classList.add('hone')
hone.textContent = "I'm a div"

scontainer.appendChild(hone)

const ptag = document.querySelector('p')
ptag.classList.add('newp')
ptag.textContent = "ME TOO!"

scontainer.appendChild(ptag)

const btn = document.querySelector('#btn')
btn.onclick = () => alert("Hello World from type 2 ! ")

const btntwo = document.querySelector('#btntwo')
btntwo.addEventListener('click',function(e){
    alert("Hello World !")
    e.target.style.background = 'blue'
    console.log(e.target)
})
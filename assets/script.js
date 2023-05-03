var switchBtn = document.getElementById('switch-btn');
var body = document.body; 
var colors = ['#3D5467', '#709176', '#C06E52'];
var currentColor = localStorage.getItem('backgroundColor'); 

if (currentColor) {
    body.style.backgroundColor = currentColor; 
} else {
    currentColor = colors[Math.floor(Math.random()*colors.length)]; 
    localStorage.setItem('backgroundColor', currentColor); 
}


switchBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    var randomColor = colors[Math.floor(Math.random()*colors.length)]; 
    body.style.backgroundColor = randomColor; 
    localStorage.setItem('backgroundColor', randomColor); 
 
}); 



 


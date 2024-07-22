const clock = document.querySelector('#clock');

setInterval(function(){
    const now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);
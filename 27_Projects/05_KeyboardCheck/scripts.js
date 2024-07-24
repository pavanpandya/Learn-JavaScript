// Generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Generate a random color
// console.log(randomColor());
// Output: #F3A2B1

let intervalRef;

const startChangingColor = function(){
    // intervalRef = setInterval(function(){
    //     document.body.style.backgroundColor = randomColor()
    // }, 1000);

    // Since we are setting the intervalRef to null, we can use the following code:
    if(!intervalRef){
        intervalRef = setInterval(function(){
            document.body.style.backgroundColor = randomColor()
        }, 1000);
    }
};

const stopChangingColor = function(){
    clearInterval(intervalRef);

    // Recommended Step
    intervalRef = null; // Dereferencing the intervalRef variable

    // Why this is recommended?
    // We are repeatedly overwriting the intervalRef variable with the new value of setInterval. Therefore, we need to clear the intervalRef variable when we stop the interval.
};

document.querySelector(".start").addEventListener("click", startChangingColor);

document.querySelector(".stop").addEventListener("click", stopChangingColor);
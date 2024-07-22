const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')

buttons.forEach(function(button){
    // console.log(button)
    // Output:
    // <span class="button" id="grey"></span>
    // <span class="button" id="white"></span>
    // <span class="button" id="blue"></span>
    // <span class="button" id="yellow"></span>
    button.addEventListener('click', function(e){
        // console.log(e)
        // Output: MouseEvent {isTrusted: true, …}
        // console.log(e.target)
        // Tells us from where the event is coming from
        // Output: HTMLSpanElement{attribute: {...}, innerHTML: "", nodeType: 1, tagName:"span", ...}
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        } 
        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
});
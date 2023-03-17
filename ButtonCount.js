class ButtonCount extends HTMLElement {
    constructor() {
        super();
        document.addEventListener("DOMContentLoaded", () => {

       

        const shadowDom = this.attachShadow({mode: 'open'});
        const button = document.createElement('button');
        const span = document.createElement('span');
        var count = 0;
        span.innerHTML = count;
        button.innerHTML = "Times Clicked: ";
        button.appendChild(span);
        

        button.addEventListener("click", () => {
       
            count++;
            span.innerHTML = count;
        });


        shadowDom.appendChild(button);
    });
}}

customElements.define('button-count', ButtonCount);
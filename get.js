import {id, article_name, article_body, output} from './methodtest.js';

document.addEventListener('DOMContentLoaded', () => {
    const date = document.getElementById("date");
    const getBtn = document.getElementById("getBtn");

    getBtn.addEventListener('click', () => {
        date.value = new Date();
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    let outputString = JSON.stringify(this.responseText).replace(/\\n/g, '<br>')
                    output.innerHTML = outputString.replace(/\\/g, '');
                }
            }
        }
        xhr.open('GET', "https://httpbin.org/get");
        xhr.send();
    });
});
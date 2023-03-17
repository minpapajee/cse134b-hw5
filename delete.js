import {id, article_name, article_body, output} from './methodtest.js';

document.addEventListener("DOMContentLoaded", () => {
    const date = document.getElementById("date");
    const deleteBtn = document.getElementById("deleteBtn");

    deleteBtn.addEventListener('click', () => {
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
        xhr.open('DELETE', "https://httpbin.org/delete");
        xhr.send();
    });
});
import {id, article_name, article_body, output} from './methodtest.js';

document.addEventListener('DOMContentLoaded', () => {
    const date = document.getElementById("date");
    const postBtn = document.getElementById("postBtn");
    
    postBtn.addEventListener('click', () => {
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
        xhr.open('POST', "https://httpbin.org/post");
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.send(id.name + ": " + id.value + ", " + article_name.name + ": " + article_name.value +
            ", " + article_body.name + ": " + article_body.value + ", " + date.name + ": " + date.value);
    });
});
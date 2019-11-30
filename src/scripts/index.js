import '../styles/index.css';
import { getSnippets } from "./restClient/snippetApi";

console.log('webpack starterkit');

window.addEventListener('load', function () {
    addActionListeners();
    // console.log(API_URL);


});

function addActionListeners() {
    document.getElementById('aboutBtn').addEventListener('click', () => {
        getSnippetsFromAPI();
    });

}

async function getSnippetsFromAPI() {
    var result = await getSnippets(0, 100);
    console.log(result);
}


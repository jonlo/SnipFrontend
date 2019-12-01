import '../styles/main.css';
import { getSnippets } from "./restClient/snippetApi";
import { SnippetNav } from "./Navigators/snippetNav";

var snippetNav;

window.addEventListener('load', function () {
    init();

});


function init() {
    snippetNav = new SnippetNav();
    getSnippetsFromAPI();
}

async function getSnippetsFromAPI() {
    var result = await getSnippets(0, 100);
    if (result.ok) {
        snippetNav.populate(result.snippets);
    }
}




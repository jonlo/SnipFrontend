import '../styles/main.css';
import { getSnippets } from "./restClient/snippetApi";
import { SnippetNav } from "./Navigators/snippetNav";
import { SnippetAside } from "./Navigators/snippetAside";

var snippetNav;
var snippetAside;

window.addEventListener('load', function () {
    init();

});


function init() {
    snippetAside = new SnippetAside();
    snippetNav = new SnippetNav(snippetAside);
    getSnippetsFromAPI();
}

async function getSnippetsFromAPI() {
    var result = await getSnippets(0, 100);
    if (result.ok) {
        snippetNav.populate(result.snippets);
    }
}





import { getSnippets } from "../restClient/snippetApi";

export class SnippetNav {

    constructor(main) {
        this.mainView = main;
        this.snippets = [];
        this.parentDiv = document.getElementById('snippets-holder');
    }

    async loadSnippets() {
        this.snippets = [];
        var result = await getSnippets(0, 100);
        if (result.ok) {
            this.populate(result.snippets);
        }
    }

    populate(_snippets) {
        this.parentDiv.innerHTML = '';
        while (this.parentDiv.firstChild) {
            this.parentDiv.removeChild(this.parentDiv.firstChild);
        }
        _snippets.forEach((snippet, index) => {
            this.snippets.push(snippet);
            var snippetBox = document.createElement('div');
            snippetBox.className = "snippet-box";
            snippetBox.innerHTML = snippet.title;   // Use innerHTML to set the text
            this.parentDiv.appendChild(snippetBox);
            snippetBox.addEventListener("click", (e) => {
                this.showSnippet(e, index);
            });
        });
    }

    showSnippet(e, i) {
        this.mainView.snippetAside.loadSnippet(this.snippets[i], i);
    }
}

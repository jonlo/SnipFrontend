class SnippetNav {
    constructor() {
        this.snippets = [];
        this.parentDiv = document.getElementById('snippets-holder');
    }

    populate(_snippets) {

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
        console.log(this.snippets[i]);
    }
}

export { SnippetNav };
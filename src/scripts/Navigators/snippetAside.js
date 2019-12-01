import hljs from 'highlight.js';


class SnippetAside {

    constructor() {
        this.parentDiv = document.getElementById('snippet-aside');
        this.title = document.getElementById('snippet-title');
        this.description = document.getElementById('snippet-description');
        this.code = document.getElementById('snippet-code');
    }

    loadSnippet(snippet) {
        this.title.innerHTML = snippet.title;
        this.description.innerHTML = `${snippet.description}`;
        this.code.className = snippet.language;
        this.code.innerHTML = snippet.code;
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

}

export { SnippetAside };
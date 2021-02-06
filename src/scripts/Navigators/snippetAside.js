import hljs from 'highlight.js';
import { deleteSnippet } from '../restClient/snippetApi';
import { AddSnippetModalView } from "./addSnippetModalView";

class SnippetAside {

    constructor(main) {
        this.mainView = main;
        this.header = document.getElementById('snip-actions-header');
        this.parentDiv = document.getElementById('snippet-aside');
        this.title = document.getElementById('snippet-title');
        this.description = document.getElementById('snippet-description');
        this.fileName = document.getElementById("snippet-filename");
        this.code = document.getElementById('snippet-code');
        this.setEventListeners();
        this.hideHeader();

    }

    setEventListeners() {
        document.getElementById('editSnippet').addEventListener('click', () => {
            this.editSnippetAction();
        });
        document.getElementById('copySnippet').addEventListener('click', () => {
            this.copySnippetAction();
        });
        document.getElementById('deleteSnippet').addEventListener('click', () => {
            this.deleteSnippetAction();
        });
    }

    loadSnippet(snippet) {
        this.showHeader();
        this.snippet = snippet;
        this.title.innerHTML = this.snippet.title;
        this.description.innerHTML = `${this.snippet.description}`;
        this.code.className = this.snippet.language;
        this.code.innerHTML = this.snippet.code;
        this.code.className = '';
        this.code.className = `${this.snippet.language}`;
        this.fileName.innerHTML = this.snippet.filename;
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    showHeader() {
        this.header.style.visibility = "visible";
    }

    hideHeader() {
        this.header.style.visibility = "hidden";
    }

    clearView() {
        this.code.innerHTML = '';
        this.title.innerHTML = '';
        this.description.innerHTML = '';
        this.code.className = '';
        this.fileName.innerHTML = '';
        this.snippet = null;
    }

    editSnippetAction() {
        let modalView = new AddSnippetModalView(this.mainView, this.snippet);
    }

    copySnippetAction() {
        const str = this.code.innerText;
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        alert("Copied the snippet");
    }

    async deleteSnippetAction() {
        let response = await deleteSnippet(this.snippet._id);
        this.mainView.snippetNav.loadSnippets();
        this.hideHeader();
        this.clearView();
    }

}

export { SnippetAside };
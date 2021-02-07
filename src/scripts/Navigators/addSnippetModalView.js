
import { addSnippet, updateSnippet } from "../restClient/snippetApi";

export class AddSnippetModalView {

    constructor(mainView, snippet) {
        if (snippet) {
            this.updating = true;
            this.snippet = snippet;
        }
        this.mainView = mainView;
        this.container = document.getElementById('addSnippet');
        this.cancelBtn = document.getElementById("addSnippet-cancelBtn")
        this.cancelBtn.addEventListener('click', () => {
            this.closeModalView();
        });
        this.addBtn = document.getElementById("addSnippet-addBtn");

        this.addBtn.addEventListener('click', () => {
            this.addSnippetToAPI();
        });
        this.container.style.visibility = "visible";
        this.titleInput = document.getElementById('titleInput');
        this.descriptionInput = document.getElementById('descriptionInput');
        this.filenameInput = document.getElementById('filenameInput');
        this.snippetText = document.getElementById('snippetText');
        if (this.snippet) {
            this.loadInputs();
            this.addBtn.innerHTML = 'Update';
        }
    }

    closeModalView() {
        this.container.style.visibility = "hidden";
    }

    loadInputs() {
        this.titleInput.value = this.snippet.title;
        this.descriptionInput.value = this.snippet.description;
        this.filenameInput.value = this.snippet.filename;
        this.snippetText.value = this.snippet.code;
    }

    async addSnippetToAPI() {
        this.closeModalView();
        const snippetData = {
            title: this.titleInput.value,
            description: this.descriptionInput.value,
            code: this.snippetText.value,
            extension: this.filenameInput.value.split(".")[1],
            filename: this.filenameInput.value,
            tags: []
        };
        if (this.updating) {
            snippetData.id = this.snippet._id;
            let response = await updateSnippet(snippetData);
            console.log("update");
        } else {
            let response = await addSnippet(snippetData);
            console.log("add");
        }
        this.mainView.snippetNav.loadSnippets();

    }
}
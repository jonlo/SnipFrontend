
import { addSnippet as addSnippetToRestClient } from "../restClient/snippetApi";

export class AddSnippetModalView {

    constructor(mainView) {
        this.mainView = mainView;
        this.container = document.getElementById('addSnippet');
        this.cancelBtn = document.getElementById("addSnippet-cancelBtn")
        this.cancelBtn.addEventListener('click', () => {
            this.closeModalView();
        });
        this.addBtn = document.getElementById("addSnippet-addBtn");

        this.addBtn.addEventListener('click', () => {
            this.addSnippet();
        });
        this.container.style.visibility = "visible";
        this.titleInput = document.getElementById('titleInput');
        this.descriptionInput = document.getElementById('descriptionInput');
        this.filenameInput = document.getElementById('filenameInput');
        this.snippetText = document.getElementById('snippetText');

    }

    closeModalView() {
        this.container.style.visibility = "hidden";
    }

    async addSnippet() {
        this.closeModalView();
        const snippetData = {
            title: this.titleInput.value,
            description: this.descriptionInput.value,
            code: this.snippetText.value,
            language: this.filenameInput.value.split(".")[1],
            filename: this.filenameInput.value,
            tags: []
        };
        let response = await addSnippetToRestClient(snippetData);
        this.mainView.snippetNav.loadSnippets();

    }
}
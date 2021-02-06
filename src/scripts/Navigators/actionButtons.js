
import { AddSnippetModalView } from "./addSnippetModalView";

export class ActionButtons {

    constructor(main) {
        this.mainView = main;
        let newSnippetButton = document.getElementById('newSnippet');
        newSnippetButton.addEventListener('click', () => {
            this.openNewSnippetMenu();
        })
    }

    openNewSnippetMenu() {
        let modalView = new AddSnippetModalView(this.mainView);
        console.log("open menu new");
    }
}